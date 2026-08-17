import { Folder, Power, Calculator, Terminal } from 'lucide-react';
import SocialFlipButton from './SocialFlipButton';

export default function StartMenu({ onOpenApp, projects, onShutdown }) {
  return (
    <div className="start-menu backdrop-blur-[32px]" style={{ zIndex: 1200 }}>
      <div>
        <span className="start-section-title">Pinned Applications & Projects</span>
        <div className="start-grid">
          {projects.map(p => (
            <button key={p.id} className="start-app-btn" onClick={() => onOpenApp('explorer', p, `explorer-${p.id}`)}>
              <Folder size={32} style={{ color: '#ffca28' }} />
              <span className="start-app-label">{p.folderName.substring(0, 10)}..</span>
            </button>
          ))}
          <button className="start-app-btn" onClick={() => onOpenApp('terminal', { title: 'Command Prompt' }, 'terminal-app')}>
            <div style={{ width: 32, height: 32, borderRadius: 8, background: '#0ea5e9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Terminal size={20} color="white" />
            </div>
            <span className="start-app-label">Terminal</span>
          </button>
          <button className="start-app-btn" onClick={() => onOpenApp('calculator', { title: 'Calculator' }, 'calculator-app')}>
            <div style={{ width: 32, height: 32, borderRadius: 8, background: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Calculator size={20} color="white" />
            </div>
            <span className="start-app-label">Calculator</span>
          </button>
        </div>
      </div>
      
      <div className="start-footer" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <SocialFlipButton />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <img src="/Photo.PNG" alt="Arpan Bhavsar" style={{ width: 28, height: 28, borderRadius: '50%', objectFit: 'cover' }} />
            <span style={{ fontSize: 12, fontWeight: '600', color: 'var(--win-text)' }}>Arpan Bhavsar</span>
          </div>
          <button 
            onClick={onShutdown}
            style={{ background: 'none', border: 'none', color: 'var(--win-text-muted)', display: 'flex', alignItems: 'center', padding: '4px', borderRadius: '4px', cursor: 'pointer' }}
            title="Shut Down"
          >
            <Power size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}