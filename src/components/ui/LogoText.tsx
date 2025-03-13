"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LogoText() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="text-3xl text-white font-light min-w-fit  overflow-visible h-fit text-center flex justify-center items-center">
      {/* "April" with Gradient & Animation */}
      {/* <motion.span
        initial={{ y: 50, opacity: 0, scale: 1.0 }}
        animate={
          show
            ? { y: 0, opacity: 1, scale: 1.3 }
            : { y: 50, opacity: 0, scale: 1.0 }
        }
        transition={{ type: "spring", stiffness: 180, damping: 12, delay: 0.2 }}
        whileHover={{ scale: 1.4 }} // Subtle hover effect
        className="flex items-start font-[family-name:var(--font-salsa)]
         bg-gradient-to-r from-amber-400 via-pink-300 to-yellow-700 
             bg-clip-text text-transparent 
             drop-shadow-[0px_0px_10px_rgba(255,165,0,0.6)]"
      >
        L
      </motion.span> */}
      <div className="text-4xl text-white font-light min-w-fit h-full text-center flex">
        {"Lnct".split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ y: index % 2 === 0 ? -50 : 50, opacity: 0 }} // Odd from top, even from bottom
            animate={
              show
                ? { y: 0, opacity: 1 }
                : { y: index % 2 === 0 ? -50 : 50, opacity: 0 }
            }
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 10,
              delay: index * 0.1,
            }} // Staggered effect
            whileHover={{ scale: 1.4 }}
            className="font-[family-name:var(--font-salsa)] 
             bg-gradient-to-br from-amber-400 via-cyan-500 to-purple-500 py-1 bg-clip-text text-transparent 
             drop-shadow-[0px_0px_10px_rgba(59,130,246,0.6)]"
          >
            {char}
          </motion.span>
        ))}
      </div>
      {/* <div
        className="text-4xl font-light min-w-fit h-full text-center flex font-[family-name:var(--font-maven-pro)] 
         bg-gradient-to-br from-amber-400 via-cyan-500 to-purple-500
         py-1 bg-clip-text text-transparent 
         drop-shadow-[0px_0px_10px_rgba(255,165,0,0.2)]"
      >
        {"Tejanta".split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ y: index % 2 === 0 ? -50 : 50, opacity: 0 }} // Odd from top, even from bottom
            animate={
              show
                ? { y: 0, opacity: 1 }
                : { y: index % 2 === 0 ? -50 : 50, opacity: 0 }
            }
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 12,
              delay: index * 0.1,
            }} // Staggered effect
            whileHover={{ scale: 1.2 }}
            className=""
          >
            {char}
          </motion.span>
        ))}
      </div>
      &nbsp; */}
      {/* <div
        className="text-4xl font-light min-w-fit h-full text-center flex font-[family-name:var(--font-maven-pro)] 
         bg-gradient-to-br from-amber-400 via-cyan-500 to-purple-500
         py-1 bg-clip-text text-transparent 
         drop-shadow-[0px_0px_10px_rgba(255,165,0,0.2)]"
      >
        {"Lnct".split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ y: index % 2 === 0 ? -50 : 50, opacity: 0 }} // Odd from top, even from bottom
            animate={
              show
                ? { y: 0, opacity: 1 }
                : { y: index % 2 === 0 ? -50 : 50, opacity: 0 }
            }
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 12,
              delay: index * 0.1,
            }} // Staggered effect
            whileHover={{ scale: 1.2 }}
            className=""
          >
            {char}
          </motion.span>
        ))}
      </div>
      &nbsp;
      <div
        className="text-4xl  font-light min-w-fit h-full text-center flex font-[family-name:var(--font-maven-pro)] 
         bg-gradient-to-br from-amber-400 via-cyan-500 to-purple-500
         py-1 bg-clip-text text-transparent 
         drop-shadow-[0px_0px_10px_rgba(255,165,0,0.2)]"
      >
        {"Fest".split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ y: index % 2 === 0 ? -50 : 50, opacity: 0 }} // Odd from top, even from bottom
            animate={
              show
                ? { y: 0, opacity: 1 }
                : { y: index % 2 === 0 ? -50 : 50, opacity: 0 }
            }
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 12,
              delay: index * 0.1,
            }} // Staggered effect
            whileHover={{ scale: 1.2 }}
            className=""
          >
            {char}
          </motion.span>
        ))}
      </div> */}
    </div>
  );
}
