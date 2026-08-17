import { useState } from 'react';
import WindowContainer from './WindowContainer';
import { Globe, RotateCw, ExternalLink, Lock } from 'lucide-react';

export default function BrowserApp({ title, url, isMinimized, zIndex, onFocus, onMinimize, onClose }) {
  const [currentUrl, setCurrentUrl] = useState(url || 'https://github.com/arpan-bhavsar');
  const [inputUrl, setInputUrl] = useState(url || 'https://github.com/arpan-bhavsar');
  const [iframeKey, setIframeKey] = useState(0);

  const handleNavigate = (e) => {
    e.preventDefault();
    let target = inputUrl.trim();
    if (!target.startsWith('http://') && !target.startsWith('https://')) {
      target = 'https://' + target;
    }
    setCurrentUrl(target);
    setInputUrl(target);
  };

  const handleReload = () => {
    setIframeKey(k => k + 1);
  };

  return (
    <WindowContainer
      defaultWidth={900}
      defaultHeight={580}
      title={title || 'Edge Browser'}
      icon={<Globe size={15} style={{ color: '#f97316' }} />}
      isMinimized={isMinimized}
      zIndex={zIndex}
      onFocus={onFocus}
      onMinimize={onMinimize}
      onClose={onClose}
    >
      {/* Browser Navigation Bar */}
      <div 
        style={{
          height: '42px',
          backgroundColor: 'var(--win-sidebar)',
          borderBottom: '1px solid var(--win-border)',
          display: 'flex',
          alignItems: 'center',
          padding: '0 10px',
          gap: '8px'
        }}
      >
        <button 
          onClick={handleReload}
          className="action-btn"
          style={{ width: '28px', height: '28px', borderRadius: '4px' }}
          title="Reload"
        >
          <RotateCw size={14} />
        </button>

        {/* Address Bar */}
        <form onSubmit={handleNavigate} style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
          <div 
            style={{
              width: '100%',
              height: '28px',
              backgroundColor: 'var(--win-surface)',
              border: '1px solid var(--win-border)',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              padding: '0 10px',
              gap: '6px'
            }}
          >
            <Lock size={12} style={{ color: '#22c55e', flexShrink: 0 }} />
            <input
              type="text"
              value={inputUrl}
              onChange={(e) => setInputUrl(e.target.value)}
              style={{
                flex: 1,
                border: 'none',
                outline: 'none',
                background: 'transparent',
                fontSize: '12px',
                color: 'var(--win-text)'
              }}
            />
          </div>
        </form>

        <a
          href={currentUrl}
          target="_blank"
          rel="noreferrer"
          className="action-btn"
          style={{ width: '28px', height: '28px', borderRadius: '4px', textDecoration: 'none' }}
          title="Open in new browser tab"
        >
          <ExternalLink size={14} />
        </a>
      </div>

      {/* Browser Viewport */}
      <div style={{ flex: 1, position: 'relative', backgroundColor: '#ffffff', overflow: 'hidden' }}>
        <iframe
          key={iframeKey}
          src={currentUrl}
          title={title || "Embedded Browser"}
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            backgroundColor: '#ffffff'
          }}
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
        />

        {/* Floating Fallback Bar for X-Frame-Options restricted sites */}
        <div style={{
          position: 'absolute',
          bottom: 12,
          right: 12,
          backgroundColor: 'rgba(20, 20, 20, 0.85)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          padding: '6px 12px',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '11px',
          color: '#ffffff',
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
          zIndex: 10
        }}>
          <span>Site blocked by iframe security?</span>
          <a
            href={currentUrl}
            target="_blank"
            rel="noreferrer"
            style={{
              color: '#38bdf8',
              fontWeight: 600,
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            <span>Open Direct</span>
            <ExternalLink size={11} />
          </a>
        </div>
      </div>
    </WindowContainer>
  );
}
