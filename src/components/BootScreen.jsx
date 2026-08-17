import { useEffect } from 'react';
import { motion } from 'framer-motion';

import KineticTextLoader from './KineticTextLoader';

export default function BootScreen({ onComplete }) {
  useEffect(() => {
    // Setting 4 seconds so the user can actually see the awesome kinetic loader animation
    const timer = setTimeout(onComplete, 5000);
    return () => clearTimeout(timer);
  }, []); // Empty dependency array prevents the timer from resetting on every App.jsx clock tick

  return (
    <div
      className="boot-screen"
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: '#000000',
        color: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        cursor: 'pointer',
        fontFamily: '"Inter", sans-serif'
      }}
      onClick={onComplete}
    // title="Click anywhere to skip boot"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}
      >
        <KineticTextLoader text="Loading" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          style={{ fontSize: '12px', color: '#666', letterSpacing: '0.2em', marginTop: '10px' }}
        >
          Entering to the Portfolio OS...
        </motion.div>
      </motion.div>
    </div>
  );
}
