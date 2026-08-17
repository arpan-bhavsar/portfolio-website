import { useState } from 'react';
import { Folder, FileText, Code, Globe, Terminal } from 'lucide-react';

// 1. Define your projects data structure
const projectsData = {
  "Web Development": [
    {
      id: "hospital-system",
      name: "Hospital Appointment System.exe",
      title: "Full-Stack Hospital Appointment System",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS", "Framer Motion"],
      description: "A comprehensive healthcare management application enabling seamless doctor-patient interactions.",
      features: [
        "Dynamic appointment scheduling with real-time slot availability.",
        "Secure user authentication and role-based access control (Admin, Doctor, Patient).",
        "Interactive dashboard featuring fluid animations for patient medical history tracking."
      ],
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: "multi-page-app",
      name: "Dynamic Multi-Page WebApp.sh",
      title: "Interactive Multi-Page Web Application",
      tech: ["React.js", "Node.js", "MongoDB", "CSS Animations"],
      description: "A highly responsive multi-page application focused on complex database integration and engaging front-end visual transitions.",
      features: [
        "Robust database integration for dynamic content rendering.",
        "Custom UI animations optimizing user retention and experience.",
        "Optimized RESTful API endpoints for fast state rendering."
      ],
      liveLink: "#",
      githubLink: "#"
    }
  ],
  "Machine Learning": [
    {
      id: "sales-forecasting",
      name: "Sales_Forecasting_Model.py",
      title: "Predictive Sales Forecasting & Data Analysis",
      tech: ["Python", "Pandas", "Scikit-Learn", "Matplotlib", "Jupyter"],
      description: "A predictive data science project focused on parsing historical retail datasets to forecast future sales trends.",
      features: [
        "Advanced data preprocessing pipelines handling missing values and structural anomalies.",
        "Feature engineering including seasonal trends and promotional impact variables.",
        "Evaluated via rigorous regression metrics to optimize predictive accuracy."
      ],
      liveLink: "#",
      githubLink: "#"
    }
  ]
};

export default function FileExplorer() {
  const [activeCategory, setActiveCategory] = useState("Web Development");
  const [selectedProject, setSelectedProject] = useState(projectsData["Web Development"][0]);

  return (
    <div className="flex h-screen w-screen bg-[#1e1e2e] text-[#cdd6f4] font-mono p-4 overflow-hidden">
      {/* Main Window Container simulating an OS App */}
      <div className="flex flex-col w-full h-full bg-[#181825] rounded-lg border border-[#313244] shadow-2xl overflow-hidden">
        
        {/* Title Bar */}
        <div className="flex items-center justify-between bg-[#11111b] px-4 py-3 border-b border-[#313244]">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-[#f38ba8]"></div>
            <div className="w-3 h-3 rounded-full bg-[#f9e2af]"></div>
            <div className="w-3 h-3 rounded-full bg-[#a6e3a1]"></div>
            <span className="text-xs text-[#a6adc8] ml-2 flex items-center gap-1">
              <Terminal size={14} /> guest@developer-pc:~/{activeCategory}
            </span>
          </div>
          <span className="text-sm font-bold text-[#89b4fa]">Project_Explorer.exe</span>
        </div>

        {/* Workspace Split Pane */}
        <div className="flex flex-1 overflow-hidden">
          
          {/* Sidebar - Folder Structure */}
          <div className="w-64 bg-[#11111b] border-r border-[#313244] p-4 flex flex-col space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#585b70]">Root Directories</h3>
            <nav className="space-y-1">
              {Object.keys(projectsData).map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                    setSelectedProject(projectsData[category][0]);
                  }}
                  className={`w-full flex items-center space-x-2 px-3 py-2 rounded text-sm transition-colors ${
                    activeCategory === category 
                      ? 'bg-[#313244] text-[#89b4fa] font-semibold' 
                      : 'hover:bg-[#1e1e2e] text-[#a6adc8]'
                  }`}
                >
                  <Folder size={16} className={activeCategory === category ? 'text-[#89b4fa]' : 'text-[#6c7086]'} />
                  <span>{category}</span>
                </button>
              ))}
            </nav>
            

            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#585b70] pt-4">Files</h3>
            <div className="space-y-1 overflow-y-auto">
              {projectsData[activeCategory].map((project) => (
                <button
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className={`w-full flex items-center space-x-2 px-3 py-2 rounded text-xs transition-colors truncate ${
                    selectedProject.id === project.id 
                      ? 'bg-[#45475a] text-[#a6e3a1]' 
                      : 'hover:bg-[#1e1e2e] text-[#cdd6f4]'
                  }`}
                >
                  <FileText size={14} className="text-[#a6e3a1] flex-shrink-0" />
                  <span className="truncate">{project.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Main Content Area - File Viewer */}
          <div className="flex-1 bg-[#181825] p-6 overflow-y-auto flex flex-col">
            {selectedProject ? (
              <div className="space-y-6 animate-fade-in">
                {/* File Header */}
                <div>
                  <h1 className="text-2xl font-bold text-[#cdd6f4] border-b border-[#313244] pb-2 flex items-center gap-2">
                    <Code className="text-[#fab387]" /> {selectedProject.title}
                  </h1>
                </div>

                {/* Tech Stack Badges */}
                <div>
                  <h4 className="text-xs font-bold text-[#585b70] uppercase mb-2">Compiled Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <span key={tech} className="bg-[#313244] text-[#f5e0dc] text-xs px-2.5 py-1 rounded-md border border-[#45475a]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div className="bg-[#1e1e2e] border border-[#313244] rounded-md p-4">
                  <h4 className="text-xs font-bold text-[#89b4fa] uppercase mb-2">// Project Overview</h4>
                  <p className="text-sm text-[#a6adc8] leading-relaxed">{selectedProject.description}</p>
                </div>

                {/* Key Metrics / Features */}
                <div>
                  <h4 className="text-xs font-bold text-[#a6e3a1] uppercase mb-2">// Core Architecture & Features</h4>
                  <ul className="list-inside space-y-2 text-sm text-[#a6adc8]">
                    {selectedProject.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#f9e2af] mt-0.5">➔</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 flex items-center space-x-4 border-t border-[#313244]">
                  <a href={selectedProject.liveLink} className="flex items-center space-x-2 bg-[#89b4fa] text-[#11111b] font-bold px-4 py-2 rounded text-xs hover:bg-[#b4befe] transition-colors">
                    <Globe size={14} />
                    <span>Execute Deployment (Live)</span>
                  </a>
                  <a href={selectedProject.githubLink} className="flex items-center space-x-2 border border-[#45475a] text-[#cdd6f4] px-4 py-2 rounded text-xs hover:bg-[#313244] transition-colors">
                    <Code size={14} />
                    <span>View Source Code</span>
                  </a>
                </div>
              </div>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center text-[#585b70]">
                <Terminal size={48} className="mb-2 stroke-1" />
                <p className="text-sm">Select a file from the directory tree to inspect payload.</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}