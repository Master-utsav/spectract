"use client";
import { useVideo, VideoProvider } from '@/lib/VideoPreloaderProvider';
import { motion } from 'framer-motion';
import React, { useState } from 'react'
import BlinkDot from './BlinkDot';
import ButtonContainer from './ButtonContainer';
import Footer from './Footer';
import SpectractBackground from './SpectractBackground';
import Logo from './ui/Logo';
import LogoText from './ui/LogoText';
import Sidebar from './Sidebar';

const ContentPage = () => {
    const [isSideBarOpen , setIsSideBarOpen] = useState<boolean>(false);
    useVideo();
    const handleSideBarClick =  () => {
      setIsSideBarOpen(!isSideBarOpen);
    }
    
    const closeSidebar = () => {
      setIsSideBarOpen(false);
    }

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
              <BlinkDot click={handleSideBarClick} height={80} width={60}/>
            </nav>
            <Logo />
            <ButtonContainer />
            <Footer />
          </div>
          <Sidebar isOpen={isSideBarOpen} onClose={closeSidebar} />
        </VideoProvider>
      </motion.div>
    );
  };

export default ContentPage
