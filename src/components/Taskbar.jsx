import { useState, useEffect } from 'react';
import { Monitor, Sun, Moon, Wifi, Volume2, BatteryCharging } from 'lucide-react';

export default function Taskbar({ darkMode, setDarkMode, activeWindow, onToggleQuickSettings }) {
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

      <div className="taskbar-right" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <button
          onClick={onToggleQuickSettings}
          className="taskbar-icon text-[var(--win-text)]"
          style={{ display: 'flex', gap: '6px', padding: '0 8px', borderRadius: '4px' }}
        >
          <Wifi size={14} />
          <Volume2 size={14} />
          <BatteryCharging size={14} />
        </button>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', padding: '0 8px' }}>
          <span>{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
          <span style={{ marginTop: '2px', fontSize: '10px', opacity: 0.8 }}>
            {time.toLocaleDateString([], { day: '2-digit', month: '2-digit', year: 'numeric' })}
          </span>
        </div>
      </div>
    </footer>
  );
}