"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { usePageCache } from "@/lib/pageChacheProvider";

const SpectractBackground: React.FC = () => {
  const {cachedHome} = usePageCache();
  return (
    <div
      className="absolute inset-0 w-[100vw] min-h-screen overflow-hidden bg-gradient-to-br 
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
      {/* 🔷 Responsive 3D Grid (Perspective Effect) */}
      <div className="absolute rotate-x-60 bottom-8 sm:-bottom-10 left-0 w-full h-[50vw] sm:h-[50%] z-[50] overflow-hidden">
        <svg
          className="w-full min-w-[2000px] sm:min-w-[100%] h-full"
          viewBox="0 0 3000 700"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern
              id="grid"
              width="calc(3vw + 60px)"
              height="calc(3vw + 60px)"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 100 0 L 0 0 0 100"
                fill="none"
                stroke="rgba(154, 227, 252, 0.2)"
                strokeWidth="3"
              />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#grid)"
            transform="skewX(-10) rotateX(50deg)"
          />
        </svg>
      </div>

      {/* video of the spiral  */}
      <div className="w-[90vw] rounded-full sm:h-[85%] h-[80vh] md:scale-100 max-w-[500px] bottom-[8rem] sm:bottom-24 absolute  transform -translate-x-1/2 left-1/2 z-[900]  overflow-hidden mix-blend-lighten">
        <motion.video
          src="/video/spring_v_4.mp4"
          className="w-full h-full scale-90  blur-none z-[900] max-[640px]:-translate-y-8  max-[420px]:translate-y-18 max-[440px]:translate-y-8 max-[500px]:translate-y-4"
          autoPlay
          preload="auto"
          muted
          playsInline
          poster="/img/spring_st.png"
          style={{
            objectFit: "cover",
            backgroundColor: "transparent",
            mixBlendMode: "lighten",
            willChange: "transform, opacity",
          }}
          initial={cachedHome !== null ? { y: 20, opacity: 1 } : { y: 800, opacity: 0 }}
          animate={{ opacity: 1, y: 20 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ delay: 0, duration: 5, ease: [0, 0.55, 0.45, 1] }}
          width={500}
          height={800}
        />
      </div>

      <motion.div
        className="absolute sm:bottom-0 bottom-16 left-1/2 transform -translate-x-1/2 z-[800]"
        initial={
          cachedHome !== null
            ? { scale: 1, opacity: 1, rotateX: 0 }
            : { scale: 0.2, opacity: 0, rotateX: 50 }
        }
        animate={{ scale: 1, opacity: 1, rotateX: 0 }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 10,
          mass: 1,
        }}
        style={{
          perspective: 1000,
        }}
      >
        <motion.div
          initial={
            cachedHome !== null
              ? { scale: 1, opacity: 1, rotateY: 0, rotateX: 0 }
              : { scale: 0.2, opacity: 0.5, rotateY: -15, rotateX: 10 }
          }
          animate={{ scale: 1, opacity: 1, rotateY: 0, rotateX: 0 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 12,
          }}
          className="relative w-[90vw] max-w-[500px] h-auto z-[900]"
        >
          <Image
            src="/img/stand_img.png"
            alt="Stand Image"
            width={500}
            height={500}
            className="relative w-full h-auto md:scale-105 drop-shadow-xl"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SpectractBackground;
