"use client";

import { usePageCache } from "@/lib/pageChacheProvider";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ComingSoon() {
  const { cachedHome } = usePageCache();
  const [show, setShow] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (cachedHome === null) {
      timer = setTimeout(() => {
        setShow(true);
      }, 7000);
    } else {
      setShow(true);
    }
    return () => clearTimeout(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    show && (
      <div className="text-4xl text-white font-light z-[999] py-0 min-w-full relative overflow-visible text-center flex justify-center items-center gap-3">
        {/* "7th" */}
        <motion.span
          initial={{ rotateY: 270, opacity: 0, scale: 1 }}
          animate={{ rotateY: 0, opacity: 1, scale: 1.2 }}
          transition={{ type: "spring", stiffness: 200, damping: 6, delay: 0 }}
          className="relative flex items-start font-[family-name:var(--font-salsa)]
            bg-gradient-to-r from-amber-400 via-pink-300 to-yellow-700 
            bg-clip-text text-transparent drop-shadow-[0px_0px_10px_rgba(255,165,0,0.6)] group-hover:scale-[1.2] transition-transform group-hover:delay-150 group-hover:duration-300"
        >
          7
          <sup className="text-sm font-light text-white/50 ml-[2px] mt-[2px] font-[family-name:var(--font-maven-pro)] ">
            th
          </sup>
        </motion.span>

        {/* "to" */}
        <motion.span
          initial={{ rotateY: 270, opacity: 0, scale: 1 }}
          animate={{ rotateY: 0, opacity: 1, scale: 1.0 }}
          transition={{ type: "spring", stiffness: 200, damping: 6, delay: 0.3 }} // Delay adjusted
          className="font-[family-name:var(--font-assistant)] text-white/70 text-lg sm:text-2xl "
        >
          to
        </motion.span>

        {/* "9th" */}
        <motion.span
          initial={{ rotateY: 270, opacity: 0, scale: 1 }}
          animate={{ rotateY: 0, opacity: 1, scale: 1.2 }}
          transition={{ type: "spring", stiffness: 200, damping: 6, delay: 0.6 }} // Delay adjusted
          className="relative flex items-start font-[family-name:var(--font-salsa)]
            bg-gradient-to-r from-amber-400 via-pink-300 to-yellow-700 
            bg-clip-text text-transparent drop-shadow-[0px_0px_10px_rgba(255,165,0,0.6)] group-hover:scale-[1.2] transition-transform group-hover:delay-150 group-hover:duration-300"
        >
          9
          <sup className="text-sm font-light text-white/50 ml-[2px] mt-[2px] font-[family-name:var(--font-maven-pro)]">
            th
          </sup>
        </motion.span>

        {/* "April" */}
        <motion.span
          initial={{ rotateY: 270, opacity: 0, scale: 1 }}
          animate={{ rotateY: 0, opacity: 1, scale: 1.2 }}
          transition={{ type: "spring", stiffness: 160, damping: 6, delay: 0.9 }} // Delay adjusted
          className="font-[family-name:var(--font-dancing-script-bold)] px-2 py-3 text-5xl  
            bg-gradient-to-r from-cyan-400 via-pink-300 to-yellow-700 bg-clip-text text-transparent 
            drop-shadow-[0px_0px_15px_rgba(59,130,246,0.7)] font-bold group-hover:scale-[1.2] transition-transform group-hover:delay-150 group-hover:duration-300"
        >
          April
        </motion.span>

        {/* Gradient Lines & Effects */}
        <motion.span
          initial={{ x: 80 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15, delay: 1.6 }} // Delay adjusted
          className="absolute inset-x-0 bottom-3 h-[1.6px] rounded-e-md w-full mx-auto bg-gradient-to-r from-transparent via-yellow-500 to-transparent"
        />
        <motion.span
          initial={{ opacity: 0, scale: 1.0 }}
          animate={{ opacity: 1, scale: 1.2 }}
          transition={{ type: "spring", stiffness: 200, damping: 15, delay: 1.4 }} // Delay adjusted
          className="absolute inset-x-0 bottom-2 h-[10px] opacity-80 blur-md rounded-e-md w-full mx-auto bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
        />
        <motion.span
          initial={{ x: -80 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15, delay: 1.2 }} // Delay adjusted
          className="absolute inset-x-0 bottom-4 h-[1.6px] rounded-e-md w-full mx-auto bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
        />
        <motion.span
          initial={{ opacity: 0, scale: 1.0 }}
          animate={{ opacity: 1, scale: 1.2 }}
          transition={{ type: "spring", stiffness: 200, damping: 15, delay: 1.5 }} // Delay adjusted
          className="absolute inset-x-0 bottom-3 h-[10px] opacity-80 blur-md rounded-e-md w-full mx-auto bg-gradient-to-r from-transparent via-yellow-500 to-transparent"
        />
      </div>
    )
  );
}
