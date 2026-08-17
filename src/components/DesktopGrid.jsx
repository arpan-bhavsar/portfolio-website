import { Folder, FileText } from 'lucide-react';
import { Rnd } from 'react-rnd';

export default function DesktopGrid({ projects, selectedId, onSelect, onOpen }) {
  const getInitialPosition = (index) => {
    // 110px spacing vertically, 100px horizontally
    const column = Math.floor(index / 6);
    const row = index % 6;
    return { x: column * 110, y: row * 110 };
  };

  return (
    <div className="desktop-grid" style={{ position: 'absolute', top: 24, left: 24, width: '100%', height: 'calc(100vh - 100px)', zIndex: 10 }}>
      {projects.map((proj, i) => {
        const initPos = getInitialPosition(i);
        return (
          <Rnd
            key={proj.id}
            default={{ x: initPos.x, y: initPos.y, width: 96, height: 90 }}
            bounds="parent"
            enableResizing={false}
            dragHandleClassName="desktop-item"
            onDragStart={(e) => { e.stopPropagation(); onSelect(proj.id); }}
          >
            <button 
              onClick={(e) => { e.stopPropagation(); onSelect(proj.id); }}
              onDoubleClick={(e) => { e.stopPropagation(); onOpen(proj); }}
              className={`desktop-item ${selectedId === proj.id ? 'selected' : ''}`}
            >
              <Folder size={44} style={{ color: '#ffca28', filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.12))' }} />
              <span className="item-label">{proj.folderName}</span>
            </button>
          </Rnd>
        );
      })}

      <Rnd
        default={{ x: getInitialPosition(projects.length).x, y: getInitialPosition(projects.length).y, width: 96, height: 90 }}
        bounds="parent"
        enableResizing={false}
        dragHandleClassName="desktop-item"
        onDragStart={(e) => { e.stopPropagation(); onSelect('bio'); }}
      >
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
      </Rnd>
    </div>
  );
}