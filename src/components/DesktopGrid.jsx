import React from 'react';
import { Folder, FileText } from 'lucide-react';

export default function DesktopGrid({ projects, selectedId, onSelect, onOpen }) {
  return (
    <div className="desktop-grid">
      {projects.map((proj) => (
        <button 
          key={proj.id}
          onClick={(e) => { e.stopPropagation(); onSelect(proj.id); }}
          onDoubleClick={(e) => { e.stopPropagation(); onOpen(proj); }}
          className={`desktop-item ${selectedId === proj.id ? 'selected' : ''}`}
        >
          <Folder size={44} style={{ color: '#ffca28', filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.12))' }} />
          <span className="item-label">{proj.folderName}</span>
        </button>
      ))}

      <button 
        onClick={(e) => { e.stopPropagation(); onSelect('bio'); }}
        onDoubleClick={(e) => {
          e.stopPropagation();
          onOpen({
            id: "bio",
            folderName: "About_Me",
            title: "System Config - Developer Profile",
            readmeContent: "=========================================\nARPAN JAGDISH BHAVSAR - SYSTEM INTERFACE\n=========================================\n\n[Academic Node]\n-----------------------------------------\n- B.Tech Computer Science & Engineering (6th Sem)\n  PP Savani University | Current: 7.47 CGPA\n\n- Diploma Computer Engineering\n  Shri K.J. Polytechnic (GTU) | Graduate: 7.95 CGPA\n\n[Core Practical Experience]\n-----------------------------------------\n- Nexis Infotech, Bharuch\n  Role: Software Development Intern (45 Days)\n  Tasks: Full-stack workspace configurations, front-end updates.",
            technologies: [],
            isBio: true
          });
        }}
        className={`desktop-item ${selectedId === 'bio' ? 'selected' : ''}`}
      >
        <FileText size={44} style={{ color: '#42a5f5', filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.1))' }} />
        <span className="item-label">About_Me.txt</span>
      </button>
    </div>
  );
}