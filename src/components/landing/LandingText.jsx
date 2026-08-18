import React from 'react';
import { Scroll } from '@react-three/drei';
import { motion } from 'framer-motion';
import TextAnimation from '../ui/staggerText';

export default function LandingText() {
  return (
    <Scroll html style={{ width: '100%', height: '100vh' }}>

      {/* 
        Page 1: Elegant Title
      */}
      <div style={{ position: 'absolute', top: '35vh', width: '100%', textAlign: 'center', pointerEvents: 'none' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 6rem)',
            margin: 0,
            fontWeight: 300,
            color: '#ffffff',
            letterSpacing: '0.15em',
            fontFamily: '"Inter", sans-serif',
            textShadow: '0 4px 30px rgba(0,0,0,0.8)' // Subtle dark shadow for readability over stars
          }}>
            ARPAN BHAVSAR
          </h1>
          <p style={{
            fontSize: 'clamp(0.8rem, 1.5vw, 1rem)',
            margin: 0,
            color: 'rgba(255,255,255,0.7)',
            textTransform: 'uppercase',
            letterSpacing: '0.5em',
            marginTop: '1.5rem',
            fontWeight: 400
          }}>
            Full Stack Developer
          </p>
        </motion.div>
      </div>

      <div style={{ position: 'absolute', top: '85vh', width: '100%', display: 'flex', justifyContent: 'center', pointerEvents: 'none' }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1.5 }}
          className="flex flex-col items-center"
        >
          <p style={{ color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '10px', margin: 0 }}>
            Scroll to Explore
          </p>
          {/* Elegant thin line instead of harsh gradient */}
          <div style={{ width: '1px', height: '50px', background: 'rgba(255,255,255,0.2)', marginTop: '15px', position: 'relative' }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '1px',
              height: '15px',
              background: '#fff',
              animation: 'scroll-line 2s infinite ease-in-out'
            }} />
          </div>
        </motion.div>
      </div>

      <div style={{ position: 'absolute', top: '120vh', width: '100%', pointerEvents: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <TextAnimation
          divideBy="word"
          delay={0.3}
          className="text-white drop-shadow-2xl text-center"
          style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)", fontFamily: '"Inter", sans-serif', fontWeight: 800 }}
          wordColors={["#ffffff", "#ffffff", "#ffffff", "#00e5ff"]} // "Welcome to My Portfolio" has 4 words
        >
          Welcome to My Portfolio
        </TextAnimation>
      </div>

      <style>{`
        @keyframes scroll-line {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(35px); opacity: 0; }
        }
      `}</style>
    </Scroll>
  );
}
