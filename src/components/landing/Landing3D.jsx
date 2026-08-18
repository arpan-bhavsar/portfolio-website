import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ScrollControls } from '@react-three/drei';
import { ErrorBoundary } from './ErrorBoundary';
import ParticleGalaxy from './ParticleGalaxy';
import GalaxyCameraController from './GalaxyCameraController';
import LandingText from './LandingText';

export default function Landing3D({ onEnterOS }) {
  return (
    <div style={{ width: '100vw', height: '100vh', backgroundColor: '#000', position: 'absolute', top: 0, left: 0, zIndex: 9999 }}>
      <Canvas camera={{ position: [0, 0, 15], fov: 50 }}>
        {/* We don't need lights for Particle/Points with vertex colors, but ambient is fine */}
        <ambientLight intensity={0.5} />

        {/* 3 pages of scroll length to make the experience smooth but shorter */}
        <ScrollControls pages={2.5} damping={0.15}>

          <Suspense fallback={null}>
            <ErrorBoundary fallback={null}>
              <ParticleGalaxy count={12000} />
            </ErrorBoundary>
          </Suspense>

          <LandingText />
          <GalaxyCameraController onEnterOS={onEnterOS} />

        </ScrollControls>
      </Canvas>
    </div>
  );
}
