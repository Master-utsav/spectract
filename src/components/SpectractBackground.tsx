"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { usePageCache } from "@/lib/pageChacheProvider";
import { useVideo } from "@/lib/VideoPreloaderProvider";

const SpectractBackground: React.FC = () => {
  const [show, setShow] = useState(false);
  const { videoUrl } = useVideo();
  const { cachedHome } = usePageCache();

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (cachedHome === null) {
      timer = setTimeout(() => {
        setShow(true);
      }, 5000);
    } else {
      setShow(true);
    }

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="absolute inset-0 w-[100vw] min-h-screen overflow-hidden bg-gradient-to-br 
      from-[#10121E] via-[#2A1443] to-[#5B1D5C] z-[100] [perspective:1000px] [transform-style:preserve-3d]"
    >
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
      {show && (
        <>
          {/* Light ray left 1 */}

          <motion.span
            className="absolute top-0 left-0 sm:w-[30%] sm:h-[15%] max-sm:hidden overflow-hidden
          bg-gradient-to-r from-[#2b1346] via-[#571483] via-25% to-transparent 
          blur-[20px] opacity-80 mix-blend-screen"
            initial={{ opacity: 0.6, rotate: 0, y: -150 }}
            animate={{ opacity: 0.8, rotate: 45, y: 0 }}
            transition={{
              delay: 0,
              duration: 2,
              repeatType: "mirror",
            }}
          />
          {/* Light ray left 2 */}
          <motion.span
            className="absolute top-16 -left-10 rotate-45 sm:w-[30%] sm:h-[18%] max-sm:hidden overflow-hidden
          bg-gradient-to-r from-[#2b1346] via-[#571483] via-25% to-transparent 
          blur-[20px] opacity-80 mix-blend-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{
              delay: 2,
              duration: 6,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />
          {/* light ray right 1 */}
          <motion.span
            className="absolute top-0 right-0  sm:w-[30%] sm:h-[15%] overflow-hidden max-sm:hidden
          bg-gradient-to-r  from-[#02246e] via-[#5B1D5C] via-25% to-transparent 
          blur-[20px] opacity-80 mix-blend-screen"
            initial={{ opacity: 0.6, rotate: 0, y: -150 }}
            animate={{ opacity: 0.8, rotate: 135, y: 0 }}
            transition={{
              delay: 0,
              duration: 2,
              repeatType: "mirror",
            }}
          />
          {/* Light ray right 2 */}
          <motion.span
            className="absolute top-12 -right-10 rotate-135 sm:w-[30%] sm:h-[18%]  overflow-hidden
          bg-gradient-to-r from-[#02236a] via-[#5B1D5C] via-25% to-transparent max-sm:hidden
          blur-[20px] opacity-80 mix-blend-screen"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{
              delay: 2,
              duration: 6,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />
          {/* small screen light */}
          <motion.span
            className="absolute top-0 left-0 w-[20%] h-[50%] sm:hidden overflow-hidden
          bg-gradient-to-t from-[#2b1346] via-[#571483] via-25% to-transparent 
          blur-[15px] opacity-80 mix-blend-screen"
            initial={{ opacity: 0.6, rotate: 150, y: 10 }}
            animate={{ opacity: 0.8, rotate: 45, y: 10 }}
            transition={{
              delay: 1,
              duration: 2,
              repeatType: "mirror",
            }}
          />
          {/* Light ray left 2 */}
          <motion.span
            className="absolute top-8 -left-10 w-[20%] h-[60%]  sm:hidden overflow-hidden
          bg-gradient-to-t from-[#2b1346] via-[#571483] via-25% to-transparent 
          blur-[15px] opacity-80 mix-blend-screen"
            initial={{ opacity: 0.6, rotate: 150, y: 10 }}
            animate={{ opacity: 0.8, rotate: 45, y: 10 }}
            transition={{
              delay: 1,
              duration: 2,
              repeatType: "mirror",
            }}
          />
          {/* light ray right 1 */}
          <motion.span
            className="absolute top-0 right-0  w-[20%] h-[50%] overflow-hidden sm:hidden
          bg-gradient-to-b  from-[#02246e] via-[#5B1D5C] via-25% to-transparent 
          blur-[15px] opacity-80 mix-blend-screen"
            initial={{ opacity: 0.6, rotate: 45, y: 10 }}
            animate={{ opacity: 0.8, rotate: 135, y: 10 }}
            transition={{
              delay: 1,
              duration: 2,
              repeatType: "mirror",
            }}
          />
          {/* Light ray right 2 */}
          <motion.span
            className="absolute top-8 -right-10  w-[20%] h-[60%]  overflow-hidden
          bg-gradient-to-b from-[#02236a] via-[#5B1D5C] via-25% to-transparent sm:hidden
          blur-[15px] opacity-80 mix-blend-screen"
            initial={{ opacity: 0.6, rotate: 45, y: 10 }}
            animate={{ opacity: 0.8, rotate: 135, y: 10 }}
            transition={{
              delay: 1,
              duration: 2,
              repeatType: "mirror",
            }}
          />
        </>
      )}

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
          src={videoUrl ? videoUrl : "/video/spring_v_4.mp4"}
          className="w-full h-full scale-90  blur-none z-[900] max-[640px]:-translate-y-8  max-[420px]:translate-y-18 max-[440px]:translate-y-8 max-[500px]:translate-y-4"
          autoPlay
          preload="auto"
          muted
          playsInline
          style={{
            objectFit: "cover",
            backgroundColor: "transparent",
            mixBlendMode: "lighten",
            willChange: "transform, opacity",
          }}
          initial={
            cachedHome !== null ? { y: 20, opacity: 1 } : { y: 800, opacity: 0 }
          }
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
          perspective: 1200, // Enhancing 3D depth
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
          {/* Stand Image */}
          <Image
            src="/img/stand_img.png"
            alt="Stand Image"
            width={500}
            height={500}
            className="relative w-full h-auto md:scale-105 drop-shadow-xl"
          />

          {/* Circle Aura (Aligned to Stand) */}
          {show && cachedHome !== null && (
            <motion.div
              initial={{ scale: 1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 5,
                ease: "easeInOut",
              }}
            >
              <motion.span
                className="absolute bottom-[6rem] left-1/2 transform -translate-x-1/2 w-[50%] h-[50%] bg-radial bg-gradient-radial from-transparent via-yellow-500 to-purple-500 blur-[50px] opacity-75 mix-blend-screen"
                animate={{ opacity: 0.5, scale: [0.8, 1, 0.8] }}
                transition={{
                  delay: 0,
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
              />
              <motion.span
                className="absolute bottom-[18rem] left-1/2 transform -translate-x-1/2 w-[50%] h-[50%] bg-radial bg-gradient-radial from-transparent via-pink-500 to-purple-500 blur-[50px] opacity-75 mix-blend-screen"
                animate={{ opacity: 0.5, scale: [0.8, 1, 0.8] }}
                transition={{
                  delay: 0,
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
              />
              <motion.span
                className="absolute bottom-[24rem] left-1/2 transform -translate-x-1/2 w-[50%] h-[50%] bg-radial bg-gradient-radial from-transparent via-blue-400-500 to-cyan-500 blur-[50px] opacity-75 mix-blend-screen"
                animate={{ opacity: 0.5, scale: [0.8, 1, 0.8] }}
                transition={{
                  delay: 0,
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
              />
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SpectractBackground;
