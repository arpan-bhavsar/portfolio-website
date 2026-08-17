import { useState, useEffect } from 'react';

export default function DesktopWidget() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="desktop-widget">
      <div className="widget-time">
        {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </div>
      <div className="widget-date">
        {time.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric' })}
      </div>
      <div style={{
        marginTop: '10px',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        padding: '4px 10px',
        borderRadius: '12px',
        backgroundColor: 'var(--win-surface)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: '1px solid var(--win-border)',
        fontSize: '11px',
        fontWeight: 600,
        color: 'var(--win-text)'
      }}>
        <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#22c55e' }} />
        <span>Full-Stack & IoT Workspace</span>
      </div>
    </div>
  );
}
