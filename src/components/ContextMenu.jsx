export default function ContextMenu({ x, y, onClose, onToggleTheme }) {
  return (
    <div className="context-menu" style={{ top: y, left: x }} onClick={onClose}>
      <button className="context-item" onClick={() => window.location.reload()}>Refresh System</button>
      <div style={{ height: '1px', background: 'var(--win-border)', margin: '4px 0' }} />
      <button className="context-item" onClick={onToggleTheme}>Toggle Color Theme</button>
      <div style={{ height: '1px', background: 'var(--win-border)', margin: '4px 0' }} />
      <button className="context-item" onClick={() => window.open('https://github.com/arpan-bhavsar/portfolio-website', '_blank')}>View Source Code</button>
    </div>
  );
}