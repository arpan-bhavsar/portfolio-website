import { useState } from 'react';
import { Folder, ExternalLink } from 'lucide-react';

const projectsData = [
  {
    id: "complaint-system",
    name: "complaint-management-system",
    title: "MERN Stack Complaint Management System",
    category: "Full-Stack Web Development",
    status: "Production Ready",
    github: "https://github.com/arpan-bhavsar/complaint-management-system",
    description: "An enterprise-grade grievance management portal. Features authenticated session layers, custom database routes, and interactive processing counters[cite: 1].",
    techLogos: [
      { name: "MongoDB", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Express", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "React", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Node.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" }
    ]
  },
  {
    id: "smart-energy",
    name: "smart-energy-grid-platform",
    title: "Smart Energy Grid Analytics Platform",
    category: "IoT + Firebase Relays[cite: 1]",
    status: "Active System",
    github: "https://github.com/arpan-bhavsar/smart-energy-grid-platform",
    description: "An asynchronous ingestion manager built to gather embedded device telemetry metrics and securely stream updates onto administrative grids[cite: 1].",
    techLogos: [
      { name: "Node.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Firebase", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg" },
      { name: "JavaScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" }
    ]
  },
  {
    id: "sales-forecasting",
    name: "sales-forecasting-project",
    title: "Predictive Sales Forecasting Framework",
    category: "Data Science & ML[cite: 1]",
    status: "Stable Core",
    github: "https://github.com/arpan-bhavsar/sales-forecasting-project",
    description: "A Python pipeline handling exploratory data validation, parsing trends, and evaluating regression safety metrics[cite: 1].",
    techLogos: [
      { name: "Python", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Pandas", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" }
    ]
  }
];

export default function CodebaseExplorer() {
  const [selected, setSelected] = useState(projectsData[0]);

  return (
    <>
      <div className="sidebar-nav">
        <span className="sidebar-heading">Repositories</span>
        <div className="nav-list">
          {projectsData.map((project) => (
            <button 
              key={project.id}
              onClick={() => setSelected(project)}
              className={`nav-item-btn ${selected.id === project.id ? 'active' : ''}`}
            >
              <Folder size={14} />
              <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{project.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="main-inspector">
        <div>
          <div className="inspector-header">
            <div>
              <span className="meta-tag">{selected.category}</span>
              <h2 className="project-title">{selected.title}</h2>
            </div>
            <span className="status-badge">{selected.status}</span>
          </div>

          <div className="tech-row">
            {selected.techLogos.map((tech) => (
              <div key={tech.name} className="tech-card">
                <img src={tech.url} alt={tech.name} className="tech-icon-img" />
                <span className="tech-name">{tech.name}</span>
              </div>
            ))}
          </div>

          <div className="desc-box">
            <span className="section-label">// Functional Overview</span>
            {selected.description}
          </div>
        </div>

        <div className="action-footer">
          <a href={selected.github} target="_blank" rel="noreferrer" className="github-link-btn">
            <span>Launch Source Repository</span>
            <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </>
  );
}