"use client";

import { motion } from "framer-motion";

const BlinkDot = () => {
  return (
    <div className="relative size-6 flex justify-center items-center rounded-full cursor-pointer">
      <div className="absolute inset-0 flex items-center justify-center pulse-effect" />
      <motion.div
        className="absolute size-6 inset-0 rounded-full "
        animate={{
          opacity: [0.8, 1, 0.8],
          scale: [0.9 , 1 , 0.9],
          backgroundColor: ["#3498db", "#9b59b6", "#3498db"],
        }}
      />
    </div>
    // <motion.div
    //   className="absolute size-8 inset-0 rounded-full animate-ping"
    // />
    //  <motion.div
    //   className="absolute size-8 inset-0 rounded-full "
    //   animate={{
    //     opacity: [0.2, 1, 0.2],
    //     backgroundColor: ["#3498db", "#9b59b6", "#3498db"],
    //   }}
    // />
    // <motion.div
    //   className="absolute w-4 h-4 rounded-full blur-3xl "
    //   initial={{scale:0}}
    //   animate={{
    //       opacity: [0.2, 1, 0.2],
    //       scale: 120,
    //       backgroundColor: ["#3498db", "#9b59b6", "#3498db"],
    //     }}
    //     transition={{
    //         duration: 1.5,
    //         repeat: Infinity,
    //         ease: "easeInOut",
    //     }}
    //     />
  );
};

export default BlinkDot;
