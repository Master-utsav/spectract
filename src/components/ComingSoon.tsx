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
      }, 6000);
    } else {
      setShow(true);
    }
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    show && (
      <div className="text-4xl text-white font-light z-[999] py-0 min-w-full overflow-visible text-center flex justify-center items-center gap-3">
        {/* "7th" */}
        <motion.span
          initial={{ y: 50, opacity: 0, scale: 1 }}
          animate={{ y: 0, opacity: 1, scale: 1.2 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: 0.2,
          }}
          whileHover={{ scale: 1.3 }}
          className="relative flex items-start font-[family-name:var(--font-salsa)]
      bg-gradient-to-r from-amber-400 via-pink-300 to-yellow-700 
      bg-clip-text text-transparent drop-shadow-[0px_0px_10px_rgba(255,165,0,0.6)]"
        >
          7
          <sup className="text-sm font-light text-white/50 ml-[2px] mt-[2px] font-[family-name:var(--font-maven-pro)]">
            th
          </sup>
        </motion.span>

        {/* "to" (Subtle Transition) */}
        <motion.span
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: 0.25,
          }}
          className="font-[family-name:var(--font-assistant)] text-white/70 text-lg sm:text-2xl"
        >
          to
        </motion.span>

        {/* "9th" */}
        <motion.span
          initial={{ y: 50, opacity: 0, scale: 1 }}
          animate={{ y: 0, opacity: 1, scale: 1.2 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: 0.3,
          }}
          whileHover={{ scale: 1.3 }}
          className="relative flex items-start font-[family-name:var(--font-salsa)]
      bg-gradient-to-r from-amber-400 via-pink-300 to-yellow-700 
      bg-clip-text text-transparent drop-shadow-[0px_0px_10px_rgba(255,165,0,0.6)]"
        >
          9
          <sup className="text-sm font-light text-white/50 ml-[2px] mt-[2px] font-[family-name:var(--font-maven-pro)]">
            th
          </sup>
        </motion.span>

        {/* "April" (More Emphasis & Larger Gradient) */}
        <motion.span
          initial={{ y: -50, opacity: 0, rotate: -10 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 160,
            damping: 12,
            delay: 0.35,
          }}
          whileHover={{ scale: 1.1 }}
          className="font-[family-name:var(--font-dancing-script)] px-2 text-5xl  
      bg-gradient-to-r  from-cyan-400  via-pink-300 to-yellow-700  bg-clip-text text-transparent 
      drop-shadow-[0px_0px_15px_rgba(59,130,246,0.7)] font-bold"
        >
          April
        </motion.span>
        <span
          className={
            "absolute inset-x-0 bottom-px h-[1.6px] rounded-e-md w-full mx-auto bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
          }
        />
      </div>
    )
  );
}
