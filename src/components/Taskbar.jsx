import React, { useState, useEffect } from 'react';
import { Monitor, Sun, Moon } from 'lucide-react';

export default function Taskbar({ darkMode, setDarkMode, activeWindow }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="taskbar">
      <button onClick={() => setDarkMode(!darkMode)} className="taskbar-icon text-[var(--win-text)]">
        {darkMode ? <Sun size={18} style={{ color: 'var(--win-accent)' }} /> : <Moon size={18} />}
      </button>

      <div className="taskbar-center">
        <button className={`taskbar-icon ${activeWindow ? 'active' : ''}`}>
          <Monitor size={20} style={{ color: 'var(--win-accent)' }} />
        </button>
      </div>

      <div className="taskbar-right">
        <span>{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
        <span style={{ marginTop: '2px', fontSize: '10px', opacity: 0.8 }}>
          {time.toLocaleDateString([], { day: '2-digit', month: '2-digit', year: 'numeric' })}
        </span>
      </div>
    </footer>
  );
}