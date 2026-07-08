import React from 'react';

export default function ContextMenu({ x, y, onClose, onToggleTheme }) {
  return (
    <div className="context-menu" style={{ top: y, left: x }} onClick={onClose}>
      <button className="context-item" onClick={() => window.location.reload()}>Refresh System</button>
      <button className="context-item" onClick={onToggleTheme}>Toggle Color Theme</button>
    </div>
  );
}