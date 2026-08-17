import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import * as THREE from 'three';

export default function GalaxyCameraController({ onEnterOS }) {
  const scroll = useScroll();
  const hasEntered = useRef(false);

  useFrame((state) => {
    // Scroll offset goes from 0 to 1
    const offset = scroll.offset;

    // We start at z = 15, and fly into the center (z = 0 and beyond)
    // The curve is exponential so it gets faster at the end
    const targetZ = 15 - Math.pow(offset, 2.5) * 20; 
    
    // Smoothly interpolate the camera position
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, targetZ, 0.1);

    // As we enter the center, the FOV increases for a warp effect
    const targetFov = 50 + Math.pow(offset, 4) * 80;
    state.camera.fov = THREE.MathUtils.lerp(state.camera.fov, targetFov, 0.1);
    state.camera.updateProjectionMatrix();

    // Trigger entry when scroll is fully at the bottom
    if (offset > 0.999 && !hasEntered.current) {
      hasEntered.current = true;
      // Slight delay for dramatic effect
      setTimeout(() => {
        onEnterOS();
      }, 500);
    }
  });

  return null;
}
