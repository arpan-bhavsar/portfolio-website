import { useEffect } from 'react';
import { Bell, X } from 'lucide-react';

export default function NotificationToast({ title, message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 6000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '60px',
        right: '16px',
        zIndex: 9990,
        width: '320px',
        backgroundColor: 'var(--win-surface)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid var(--win-border)',
        borderRadius: '10px',
        boxShadow: 'var(--win-shadow)',
        padding: '12px 14px',
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
        animation: 'slideInRight 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        fontFamily: "'Segoe UI', system-ui, sans-serif"
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <div style={{
            width: '18px',
            height: '18px',
            borderRadius: '4px',
            backgroundColor: 'var(--win-accent)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff'
          }}>
            <Bell size={11} />
          </div>
          <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--win-text)' }}>
            {title || 'Notification'}
          </span>
        </div>

        <button
          onClick={onClose}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--win-text-muted)',
            cursor: 'pointer',
            padding: '2px',
            display: 'flex',
            alignItems: 'center',
            borderRadius: '4px'
          }}
        >
          <X size={14} />
        </button>
      </div>

      <div style={{ fontSize: '12px', color: 'var(--win-text-muted)', lineHeight: '1.4' }}>
        {message}
      </div>
    </div>
  );
}
