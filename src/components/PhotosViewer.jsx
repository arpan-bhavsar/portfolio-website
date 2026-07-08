import React, { useState } from 'react';
import WindowContainer from './WindowContainer';
import { Image, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

export default function PhotosViewer({ image, isMinimized, zIndex, onFocus, onMinimize, onClose }) {
  const [zoom, setZoom] = useState(100);

  return (
    <WindowContainer 
      defaultWidth={640} defaultHeight={500} title={`Photos - ${image.name}`} 
      icon={<Image size={15} style={{ color: '#22c55e' }} />} 
      isMinimized={isMinimized} zIndex={zIndex} onFocus={onFocus} onMinimize={onMinimize} onClose={onClose}
    >
      <div style={{ height: '40px', background: '#252526', display: 'flex', alignItems: 'center', padding: '0 16px', gap: '16px', borderBottom: '1px solid #333' }}>
        <button onClick={() => setZoom(p => Math.min(p + 20, 200))} style={{ color: '#fff', background: 'none', border: 'none', cursor: 'pointer' }}><ZoomIn size={16} /></button>
        <span style={{ color: '#fff', fontSize: '11px', fontWeight: 600 }}>{zoom}%</span>
        <button onClick={() => setZoom(p => Math.max(p - 20, 40))} style={{ color: '#fff', background: 'none', border: 'none', cursor: 'pointer' }}><ZoomOut size={16} /></button>
        <button onClick={() => setZoom(100)} style={{ color: '#fff', background: 'none', border: 'none', cursor: 'pointer' }}><RotateCcw size={15} /></button>
      </div>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'auto', padding: '20px', background: '#1e1e1e' }}>
        <div style={{ transition: 'transform 0.1s ease', transform: `scale(${zoom / 100})`, margin: 'auto' }}>
          <img src={image.url} alt={image.name} style={{ maxWidth: '100%', maxHeight: '340px', objectFit: 'contain', borderRadius: '4px', boxShadow: '0 8px 24px rgba(0,0,0,0.4)' }} />
        </div>
      </div>
    </WindowContainer>
  );
}