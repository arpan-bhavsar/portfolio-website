import { useState } from 'react';
import { 
  Wifi, Bluetooth, Moon, Sun, Volume2, SunMedium, BatteryCharging, 
  Settings, Plane, Shield, Sparkles 
} from 'lucide-react';

export default function QuickSettings({ darkMode, setDarkMode, onClose }) {
  const [wifi, setWifi] = useState(true);
  const [bluetooth, setBluetooth] = useState(true);
  const [airplane, setAirplane] = useState(false);
  const [nightLight, setNightLight] = useState(false);
  const [volume, setVolume] = useState(80);
  const [brightness, setBrightness] = useState(90);

  const toggleBtnStyle = (active) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '12px 8px',
    borderRadius: '6px',
    border: '1px solid var(--win-border)',
    backgroundColor: active ? 'var(--win-accent)' : 'var(--win-surface)',
    color: active ? '#ffffff' : 'var(--win-text)',
    cursor: 'pointer',
    gap: '6px',
    transition: 'all 0.15s ease'
  });

  return (
    <>
      {/* Backdrop overlay to close when clicking outside */}
      <div 
        style={{ position: 'fixed', inset: 0, zIndex: 190 }} 
        onClick={onClose} 
      />

      <div
        className="quick-settings"
        style={{
          position: 'fixed',
          bottom: '56px',
          right: '12px',
          width: '340px',
          backgroundColor: 'var(--win-surface)',
          backdropFilter: 'blur(30px) saturate(180%)',
          WebkitBackdropFilter: 'blur(30px) saturate(180%)',
          border: '1px solid var(--win-border)',
          borderRadius: '10px',
          boxShadow: 'var(--win-shadow)',
          padding: '18px',
          zIndex: 200,
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          fontFamily: "'Segoe UI', system-ui, sans-serif",
          animation: 'windowOpen 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Quick Toggles Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
          <button 
            style={toggleBtnStyle(wifi)} 
            onClick={() => setWifi(!wifi)}
          >
            <Wifi size={18} />
            <span style={{ fontSize: '11px', fontWeight: 500 }}>Wi-Fi</span>
          </button>

          <button 
            style={toggleBtnStyle(bluetooth)} 
            onClick={() => setBluetooth(!bluetooth)}
          >
            <Bluetooth size={18} />
            <span style={{ fontSize: '11px', fontWeight: 500 }}>Bluetooth</span>
          </button>

          <button 
            style={toggleBtnStyle(darkMode)} 
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <Moon size={18} /> : <Sun size={18} />}
            <span style={{ fontSize: '11px', fontWeight: 500 }}>{darkMode ? 'Dark' : 'Light'}</span>
          </button>

          <button 
            style={toggleBtnStyle(airplane)} 
            onClick={() => setAirplane(!airplane)}
          >
            <Plane size={18} />
            <span style={{ fontSize: '11px', fontWeight: 500 }}>Airplane</span>
          </button>

          <button 
            style={toggleBtnStyle(nightLight)} 
            onClick={() => setNightLight(!nightLight)}
          >
            <Sparkles size={18} />
            <span style={{ fontSize: '11px', fontWeight: 500 }}>Night light</span>
          </button>

          <button 
            style={toggleBtnStyle(true)} 
            onClick={() => alert('Arpan Portfolio OS v2.0 - All Services Online')}
          >
            <Shield size={18} />
            <span style={{ fontSize: '11px', fontWeight: 500 }}>Security</span>
          </button>
        </div>

        {/* Sliders Area */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {/* Brightness Slider */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <SunMedium size={18} style={{ color: 'var(--win-text-muted)', flexShrink: 0 }} />
            <input
              type="range"
              min="10"
              max="100"
              value={brightness}
              onChange={(e) => setBrightness(Number(e.target.value))}
              style={{
                flex: 1,
                accentColor: 'var(--win-accent)',
                height: '4px',
                cursor: 'pointer'
              }}
            />
            <span style={{ fontSize: '11px', color: 'var(--win-text-muted)', width: '28px', textAlign: 'right' }}>
              {brightness}%
            </span>
          </div>

          {/* Volume Slider */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Volume2 size={18} style={{ color: 'var(--win-text-muted)', flexShrink: 0 }} />
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              style={{
                flex: 1,
                accentColor: 'var(--win-accent)',
                height: '4px',
                cursor: 'pointer'
              }}
            />
            <span style={{ fontSize: '11px', color: 'var(--win-text-muted)', width: '28px', textAlign: 'right' }}>
              {volume}%
            </span>
          </div>
        </div>

        {/* Bottom Bar: Battery & Settings */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderTop: '1px solid var(--win-border)',
          paddingTop: '12px',
          fontSize: '11px',
          color: 'var(--win-text-muted)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <BatteryCharging size={16} style={{ color: '#22c55e' }} />
            <span>100% (Plugged in)</span>
          </div>

          <button
            onClick={() => alert('Windows Fluent OS Settings - Configured for Portfolio Showcase')}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--win-text-muted)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              padding: '4px',
              borderRadius: '4px'
            }}
            title="All Settings"
          >
            <Settings size={16} />
          </button>
        </div>
      </div>
    </>
  );
}
