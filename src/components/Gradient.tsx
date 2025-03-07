"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

const Gradient = ({ children }: { children: React.ReactNode }) => {
  return (
    <main
      className="relative w-[100vw] min-h-screen overflow-hidden hide-scrollbar  bg-gradient-to-br 
      from-[#10121E] via-[#2A1443] to-[#5B1D5C] z-[100] [perspective:1000px] [transform-style:preserve-3d]"
    >
      {/* Bottom Sunrise Effect */}
      <div
        className="absolute bottom-0 left-0 w-full h-[50%] 
        bg-gradient-to-t from-[#193F66] via-[#5B1D5C] to-transparent opacity-90"
      />
      {/* Left Purple Light Rays (Animated) */}
      <motion.div
        className="absolute top-0 left-0 w-[40%] h-[100%] 
          bg-gradient-to-br from-[#A000FF] to-transparent 
          blur-[120px] opacity-80 mix-blend-screen"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{
          delay: 1,
          duration: 4,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />
      {/* Right Blue Light Rays (Animated) */}
      <motion.div
        className="absolute top-0 right-0 w-[40%] h-[100%] 
          bg-gradient-to-bl from-[#0050FF] to-transparent 
          blur-[120px] opacity-80 mix-blend-screen"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{
          delay: 2,
          duration: 4,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />
      <div className="w-[90vw] rounded-full h-[85%] md:scale-100 max-w-[500px] bottom-[6rem] sm:bottom-4 absolute  transform -translate-x-1/2 left-1/2 z-[900]  overflow-hidden mix-blend-lighten">
        <Image
          src="/img/spring_st.png"
          alt="MKBC"
          className="w-full h-full  scale-110 absolute inset-0 blur-none z-[900] "
          width={500}
          height={800}
        />
        <Image
          src="/img/spring_st.png"
          alt="MKBC"
          className="w-full h-full scale-110 absolute inset-0 blur-sm z-[910] "
          width={500}
          height={800}
        />
      </div>

      <motion.div
        className="absolute sm:bottom-0 bottom-16 left-1/2 transform -translate-x-1/2 z-[700]"
        style={{
          perspective: 1000,
        }}
      >
        <motion.div className="relative w-[90vw] max-w-[500px] h-auto z-[700]">
          <Image
            src="/img/stand_img.png"
            alt="Stand Image"
            width={500}
            height={500}
            className="relative w-full h-auto md:scale-105 drop-shadow-xl"
          />
        </motion.div>
      </motion.div>
      <div className="relative h-screen flex flex-col ">
       {children}
      </div>
    </main>
  );
};

export default Gradient;
