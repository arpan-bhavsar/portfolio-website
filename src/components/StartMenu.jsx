import React from 'react';
import { Folder, Globe } from 'lucide-react';

export default function StartMenu({ onOpenApp, projects }) {
  return (
    <div className="start-menu">
      <div>
        <span className="start-section-title">Pinned Directory Links</span>
        <div className="start-grid">
          {projects.map(p => (
            <button key={p.id} className="start-app-btn" onClick={() => onOpenApp(p)}>
              <Folder size={32} style={{ color: '#ffca28' }} />
              <span className="start-app-label">{p.folderName.substring(0, 8)}..</span>
            </button>
          ))}
        </div>
      </div>
      
      <div className="start-footer">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: 26, height: 26, borderRadius: '50%', backgroundColor: 'var(--win-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: 10, fontWeight: 'bold' }}>AB</div>
          <span style={{ fontSize: 12, fontWeight: '600', color: 'var(--win-text)' }}>Arpan Bhavsar</span>
        </div>
        <a href="https://github.com/arpan-bhavsar" target="_blank" rel="noreferrer" style={{ color: 'var(--win-text-muted)' }}><Globe size={16} /></a>
      </div>
    </div>
  );
}