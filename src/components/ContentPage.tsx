"use client";
import { VideoProvider } from '@/lib/VideoPreloaderProvider';
import { motion } from 'framer-motion';
import React from 'react'
import BlinkDot from './BlinkDot';
import ButtonContainer from './ButtonContainer';
import Footer from './Footer';
import SpectractBackground from './SpectractBackground';
import Logo from './ui/Logo';
import LogoText from './ui/LogoText';

const ContentPage = () => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <VideoProvider>
          <SpectractBackground />
          <div className="container mx-auto py-1 relative flex flex-col z-[999]">
            <nav className="flex px-4 flex-row w-full justify-between items-center relative max-w-7xl mx-auto">
              <LogoText />
              <BlinkDot />
            </nav>
            <Logo />
            <ButtonContainer />
            <Footer />
          </div>
          <div className="hidden"></div>
        </VideoProvider>
      </motion.div>
    );
  };

export default ContentPage
