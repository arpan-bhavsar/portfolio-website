import { useState, useEffect, useRef } from 'react';

export default function WindowContainer({ defaultWidth, defaultHeight, title, icon, isMinimized, zIndex, onFocus, onMinimize, onClose, children }) {
  const [size, setSize] = useState({ width: defaultWidth, height: defaultHeight });
  const [pos, setPos] = useState(() => ({
    x: Math.max(20, Math.round((window.innerWidth - defaultWidth) / 2)),
    y: Math.max(20, Math.round((window.innerHeight - defaultHeight) / 2))
  }));
  const [isMaximized, setIsMaximized] = useState(false);
  
  const stateRef = useRef({ isDragging: false, isResizing: false, resizeType: null, startX: 0, startY: 0, startW: 0, startH: 0, startXPos: 0, startYPos: 0 });

  const handleMouseDown = (e) => {
    onFocus(); // Bring window to front
    if (isMaximized) return;
    if (e.target.closest('.win-titlebar') && !e.target.closest('.win-actions')) {
      stateRef.current.isDragging = true;
      stateRef.current.startX = e.clientX;
      stateRef.current.startY = e.clientY;
      stateRef.current.startXPos = pos.x;
      stateRef.current.startYPos = pos.y;
    }
  };

  const handleResizeMouseDown = (e, type) => {
    e.preventDefault();
    onFocus(); // Bring window to front
    if (isMaximized) return;
    stateRef.current.isResizing = true;
    stateRef.current.resizeType = type;
    stateRef.current.startX = e.clientX;
    stateRef.current.startY = e.clientY;
    stateRef.current.startW = size.width;
    stateRef.current.startH = size.height;
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (stateRef.current.isDragging) {
        setPos({ x: stateRef.current.startXPos + (e.clientX - stateRef.current.startX), y: stateRef.current.startYPos + (e.clientY - stateRef.current.startY) });
      } else if (stateRef.current.isResizing) {
        let newW = stateRef.current.resizeType === 'right' || stateRef.current.resizeType === 'corner' ? Math.max(400, stateRef.current.startW + (e.clientX - stateRef.current.startX)) : stateRef.current.startW;
        let newH = stateRef.current.resizeType === 'bottom' || stateRef.current.resizeType === 'corner' ? Math.max(300, stateRef.current.startH + (e.clientY - stateRef.current.startY)) : stateRef.current.startH;
        setSize({ width: newW, height: newH });
      }
    };
    const handleMouseUp = () => { stateRef.current.isDragging = false; stateRef.current.isResizing = false; };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => { window.removeEventListener('mousemove', handleMouseMove); window.removeEventListener('mouseup', handleMouseUp); };
  }, [pos, size, isMaximized]);

  return (
    <div 
      className={`win-window backdrop-blur-[40px] ${isMaximized ? 'maximized' : ''} animate-in fade-in zoom-in-98 duration-150`}
      style={{ 
        display: isMinimized ? 'none' : 'flex',
        left: isMaximized ? 0 : pos.x, top: isMaximized ? 0 : pos.y, 
        width: isMaximized ? '100vw' : size.width, height: isMaximized ? 'calc(100vh - 48px)' : size.height, 
        zIndex: zIndex 
      }}
      onMouseDown={onFocus}
    >
      <div className="win-titlebar" onMouseDown={handleMouseDown}>
        <div className="win-title-info">{icon}<span>{title}</span></div>
        <div className="win-actions">
          <button className="action-btn" onClick={(e) => { e.stopPropagation(); onMinimize(); }}>─</button>
          <button className="action-btn" onClick={(e) => { e.stopPropagation(); onFocus(); setIsMaximized(!isMaximized); }}>{isMaximized ? '🗗' : '🗖'}</button>
          <button onClick={(e) => { e.stopPropagation(); onClose(); }} className="action-btn btn-close">✕</button>
        </div>
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', position: 'relative' }}>{children}</div>
      {!isMaximized && (
        <>
          <div className="win-resize-handle right" onMouseDown={(e) => handleResizeMouseDown(e, 'right')} />
          <div className="win-resize-handle bottom" onMouseDown={(e) => handleResizeMouseDown(e, 'bottom')} />
          <div className="win-resize-handle bottom-right" onMouseDown={(e) => handleResizeMouseDown(e, 'corner')} />
        </>
      )}
    </div>
  );
}