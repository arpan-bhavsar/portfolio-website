import React from 'react';

export default function DeveloperBio() {
  return (
    <div className="bio-wrapper">
      <div>
        <span className="meta-tag">// Profile Details</span>
        <h2 className="project-title" style={{ marginBottom: '4px' }}>Arpan Jagdish Bhavsar[cite: 1]</h2>
        <p style={{ color: 'var(--text-muted)', margin: 0, fontSize: '13px' }}>Computer Science & Engineering Student[cite: 1]</p>
      </div>

      <div className="bio-grid">
        <div className="bio-card">
          <span className="section-label">Education Track[cite: 1]</span>
          <p style={{ fontWeight: 600, margin: '0 0 4px 0' }}>B.Tech CSE — P.P. Savani University[cite: 1]</p>
          <p style={{ fontSize: '12px', color: 'var(--text-muted)', margin: 0 }}>6th Sem | Current Grade Metrics: 7.47 CGPA[cite: 1]</p>
          <p style={{ fontWeight: 600, margin: '12px 0 4px 0' }}>Diploma CE — Shri K.J. Polytechnic[cite: 1]</p>
          <p style={{ fontSize: '12px', color: 'var(--text-muted)', margin: 0 }}>Graduated 2024 | Grade Metrics: 7.95 CGPA[cite: 1]</p>
        </div>

        <div className="bio-card">
          <span className="section-label">Practical Milestones[cite: 1]</span>
          <p style={{ fontWeight: 600, margin: '0 0 4px 0' }}>Nexis Infotech, Bharuch[cite: 1]</p>
          <p style={{ fontSize: '12px', color: 'var(--text-muted)', margin: 0, fontStyle: 'italic' }}>Software Development Intern (45 Days)[cite: 1]</p>
          <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '8px', lineHeight: '1.5' }}>
            Built modular user interfaces and analyzed structured API query sequences connecting backend storage clusters[cite: 1].
          </p>
        </div>
      </div>
    </div>
  );
}