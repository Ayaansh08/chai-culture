import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function IntroCinematic() {
  const [showSequence, setShowSequence] = useState(false); // Single state for CHAI+CULTURE
  const [showDivider, setShowDivider] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timeline = [
      () => setTimeout(() => setShowSequence(true), 600),   // CHAI + CULTURE together
      () => setTimeout(() => setShowDivider(true), 1400),   // Divider
      () => setTimeout(() => setShowText(true), 2000),      // Text
    ];

    timeline.forEach(fn => fn());
    return () => timeline.forEach(fn => clearTimeout(fn()));
  }, []);

  return (
    <section className="intro-section">
      <div className="intro-content">
        {/* CHAI - Triggers with sequence */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ 
            opacity: showSequence ? 1 : 0, 
            y: showSequence ? 0 : 60 
          }}
          transition={{ 
            duration: 1.2, 
            ease: "easeOut" 
          }}
          className="intro-title"
        >
          CHAI
        </motion.h1>

        {/* CULTURE - SAME TIME as CHAI */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ 
            opacity: showSequence ? 1 : 0, 
            scale: showSequence ? 1 : 0.75 
          }}
          transition={{ 
            duration: 1.2, 
            ease: "easeOut" 
          }}
          className="intro-subtitle"
        >
          CULTURE
        </motion.h2>

        {/* DIVIDER */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: showDivider ? '55%' : 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="intro-divider"
        />

        {/* TEXT */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ 
            opacity: showText ? 1 : 0, 
            y: showText ? 0 : 30 
          }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="intro-text"
        >
          Brew the Royal Tradition
        </motion.p>
      </div>
      
      <div className="intro-vignette" />
    </section>
  );
}
