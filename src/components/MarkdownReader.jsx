import { useState } from 'react';
import WindowContainer from './WindowContainer';
import { FileText, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

export default function MarkdownReader({ title, content, isMinimized, zIndex, onFocus, onMinimize, onClose }) {
  const [zoom, setZoom] = useState(100);

  return (
    <WindowContainer 
      defaultWidth={720} defaultHeight={560} title={title} 
      icon={<FileText size={15} style={{ color: '#0078d4' }} />} 
      isMinimized={isMinimized} zIndex={zIndex} onFocus={onFocus} onMinimize={onMinimize} onClose={onClose}
    >
      <div className="win-navbar" style={{ gap: '16px', background: 'var(--win-sidebar)' }}>
        <button onClick={() => setZoom(p => Math.min(p + 10, 150))} className="action-btn" style={{ width: '32px', height: '32px' }}><ZoomIn size={15} /></button>
        <span style={{ fontSize: '12px', fontWeight: 600, minWidth: '40px', textAlign: 'center' }}>{zoom}%</span>
        <button onClick={() => setZoom(p => Math.max(p - 10, 70))} className="action-btn" style={{ width: '32px', height: '32px' }}><ZoomOut size={15} /></button>
        <button onClick={() => setZoom(100)} className="action-btn" style={{ width: '32px', height: '32px' }}><RotateCcw size={14} /></button>
      </div>
      <div style={{ flex: 1, overflowY: 'auto', background: 'var(--gh-bg)', padding: '24px' }}>
        <div className="gh-readme-content" style={{ transform: `scale(${zoom / 100})`, transformOrigin: 'top left', width: `${100 / (zoom / 100)}%`, padding: 0 }}>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    </WindowContainer>
  );
}