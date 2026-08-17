import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function ParticleGalaxy({ count = 4000 }) {
  const pointsRef = useRef();

  // Create a very soft, tiny glow texture
  const particleTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(0.2, 'rgba(255, 255, 255, 0.4)');
    gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.05)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 32, 32);
    return new THREE.CanvasTexture(canvas);
  }, []);

  // Generate particles in a beautiful, sparse, wide cylinder/sphere
  const [positions, colors, speeds] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const speeds = new Float32Array(count); // Individual drift speeds
    const color = new THREE.Color();

    for (let i = 0; i < count; i++) {
      // Wide spread, avoiding the absolute dead center so text is readable
      const radius = 2 + Math.random() * 40; 
      const theta = Math.random() * 2 * Math.PI;
      const ySpread = (Math.random() - 0.5) * 15; // Vertical spread

      const x = Math.cos(theta) * radius;
      const y = ySpread;
      const z = Math.sin(theta) * radius + (Math.random() - 0.5) * 10;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      speeds[i] = 0.05 + Math.random() * 0.1;

      // Soft, elegant monochromatic palette (mostly white, hints of silver/blue)
      const base = new THREE.Color('#ffffff');
      const tint = new THREE.Color(Math.random() > 0.8 ? '#a8c0ff' : '#ffffff');
      
      const mixedColor = color.copy(base).lerp(tint, Math.random());
      
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }
    return [positions, colors, speeds];
  }, [count]);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    
    const time = state.clock.getElapsedTime();
    const positions = pointsRef.current.geometry.attributes.position.array;

    // Slowly drift particles and rotate the entire field
    pointsRef.current.rotation.y += delta * 0.03;
    pointsRef.current.rotation.z = Math.sin(time * 0.05) * 0.05;

    // Gentle organic floating motion for each particle
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3 + 1] += Math.sin(time * speeds[i] + positions[i3]) * 0.005;
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        map={particleTexture}
        size={0.15}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}
