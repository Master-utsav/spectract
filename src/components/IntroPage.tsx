"use client";

import React from 'react'
import { motion } from 'framer-motion'
import TejantaLogo from './TejantaLogo'

const IntroPage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0.8 }}
      animate={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        scale: 1.2,
        transition: { 
          duration: 0.3,
          ease: "easeInOut"
        }
      }}
      className='fixed inset-0 h-screen w-full bg-black flex items-center justify-center z-[2000] mx-auto'
    >
      <motion.div
        initial={{ 
          scale: 0.5, 
          opacity: 0 
        }}
        animate={{ 
          scale: 1, 
          opacity: 1,
          transition: {
            type: "spring",
            stiffness: 120,
            damping: 10,
            duration: 1
          }
        }}
        exit={{
          scale: 1.5,
          opacity: 0,
          transition: {
            duration: 0.5
          }
        }}
      >
        <TejantaLogo  />
      </motion.div>
    </motion.div>
  )
}

export default IntroPage