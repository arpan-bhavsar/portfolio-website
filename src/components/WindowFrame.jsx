import { useState } from 'react';
import WindowContainer from './WindowContainer';
import { Folder, ArrowLeft, HardDrive, Monitor, Image, FileText } from 'lucide-react';

export default function WindowFrame({ project, onClose, onOpenReadme, onOpenImage, onOpenBrowser, isMinimized, zIndex, onFocus, onMinimize }) {
  const [layer, setLayer] = useState('root');

  return (
    <WindowContainer 
      defaultWidth={860} defaultHeight={540} title={project.title} 
      icon={<Folder size={15} style={{ color: '#ffca28' }} />} 
      isMinimized={isMinimized} zIndex={zIndex} onFocus={onFocus} onMinimize={onMinimize} onClose={onClose}
    >
      <div className="win-navbar">
        {layer !== 'root' && (
          <button onClick={() => setLayer('root')} className="action-btn" style={{ height: '26px', width: '26px', border: 'none', borderRadius: '4px' }}>
            <ArrowLeft size={14} />
          </button>
        )}
        <div className="address-box">This PC &gt; Desktop &gt; {project.folderName} {layer !== 'root' && `> ${layer}`}</div>
      </div>

      <div className="explorer-body" style={{ flex: 1, overflow: 'hidden' }}>
        <div className="explorer-sidebar">
          <button className="sidebar-link active" style={{ background: 'none', border: 'none', width: '100%', textAlign: 'left' }}>
            <HardDrive size={14} style={{ color: 'var(--win-accent)' }} />
            <span>Local Disk (C:)</span>
          </button>
        </div>
        
        <div className="explorer-view" style={{ flex: 1, overflowY: 'auto' }}>
          {layer === 'root' && (
            <div className="file-grid">
              {!project.isBio && (
                <div className="file-item" onClick={() => setLayer('tech')}>
                  <Folder size={40} style={{ color: '#ffca28' }} />
                  <span className="file-label">technologies</span>
                </div>
              )}
              {project.diagrams && (
                <div className="file-item" onClick={() => setLayer('diagrams')}>
                  <Folder size={40} style={{ color: '#ffca28' }} />
                  <span className="file-label">diagrams</span>
                </div>
              )}
              <div className="file-item" onDoubleClick={() => onOpenReadme(project)}>
                <FileText size={40} style={{ color: '#b0bec5' }} />
                <span className="file-label">{project.isBio ? 'About_Me.txt' : 'README.txt'}</span>
              </div>
              {project.liveUrl && (
                <div className="file-item" onDoubleClick={() => onOpenBrowser(project)}>
                  <Monitor size={40} style={{ color: 'var(--win-accent)' }} />
                  <span className="file-label">execute_live.exe</span>
                </div>
              )}
            </div>
          )}

          {layer === 'tech' && (
            <div className="file-grid">
              {project.technologies?.map(t => (
                <div key={t.name} className="file-item" style={{ cursor: 'default' }}>
                  <div className="tech-icon-container"><img src={t.url} alt={t.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} /></div>
                  <span className="file-label">{t.name}</span>
                </div>
              ))}
            </div>
          )}

          {layer === 'diagrams' && (
            <div className="file-grid">
              {project.diagrams?.map((img) => (
                <div key={img.name} className="file-item" onDoubleClick={() => onOpenImage(img)}>
                  <Image size={40} style={{ color: '#22c55e' }} />
                  <span className="file-label">{img.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </WindowContainer>
  );
}