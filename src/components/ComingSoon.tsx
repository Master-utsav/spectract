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
    <div className="text-3xl text-white font-light z-[999] py-2 min-w-fit overflow-visible h-fit text-center flex justify-center items-center gap-2">
      {/* "7th" */}
      <motion.span
        initial={{ y: 50, opacity: 0, scale: 1.0 }}
        animate={
          show
            ? { y: 0, opacity: 1, scale: 1.3 }
            : { y: 50, opacity: 0, scale: 1.0 }
        }
        transition={{ type: "spring", stiffness: 180, damping: 12, delay: 0.2 }}
        whileHover={{ scale: 1.4 }}
        className="relative flex items-start font-[family-name:var(--font-salsa)]
        bg-gradient-to-r from-amber-400 via-pink-300 to-yellow-700 
        bg-clip-text text-transparent drop-shadow-[0px_0px_10px_rgba(255,165,0,0.6)]"
      >
        7
        <sup className="text-sm font-light text-white/40 ml-1 mt-[2px] font-[family-name:var(--font-maven-pro)]">
          th
        </sup>
      </motion.span>

      {/* "-" (Dash) */}
      <motion.span
        initial={{ y: 50, opacity: 0, scale: 1.0 }}
        animate={
          show
            ? { y: 0, opacity: 1, scale: 1.3 }
            : { y: 50, opacity: 0, scale: 1.0 }
        }
        transition={{
          type: "spring",
          stiffness: 180,
          damping: 12,
          delay: 0.25,
        }}
        whileHover={{ scale: 1.4 }}
        className="font-[family-name:var(--font-assistant)] text-white/70 mx-1"
      >
        -
      </motion.span>

      {/* "9th" */}
      <motion.span
        initial={{ y: 50, opacity: 0, scale: 1.0 }}
        animate={
          show
            ? { y: 0, opacity: 1, scale: 1.3 }
            : { y: 50, opacity: 0, scale: 1.0 }
        }
        transition={{ type: "spring", stiffness: 180, damping: 12, delay: 0.3 }}
        whileHover={{ scale: 1.4 }}
        className="relative flex items-start font-[family-name:var(--font-salsa)]
        bg-gradient-to-r from-amber-400 via-pink-300 to-yellow-700 
        bg-clip-text text-transparent drop-shadow-[0px_0px_10px_rgba(255,165,0,0.6)]"
      >
        9
        <sup className="text-sm font-light text-white/40 ml-1 mt-[2px] font-[family-name:var(--font-maven-pro)]">
          th
        </sup>
      </motion.span>

      {/* "April" */}
      <motion.span
        initial={{ y: -50, opacity: 0, rotate: -10 }}
        animate={
          show
            ? { y: 0, opacity: 1, rotate: 0 }
            : { y: -50, opacity: 0, rotate: -10 }
        }
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 10,
          delay: 0.35,
        }}
        whileHover={{ scale: 1.1 }}
        className="font-[family-name:var(--font-dancing-script)] w-fit px-1 text-4xl  
        bg-gradient-to-r from-cyan-500 to-purple-400 bg-clip-text text-transparent 
        drop-shadow-[0px_0px_10px_rgba(59,130,246,0.6)] min-w-fit  text-center flex "
      >
        April
      </motion.span>
    </div>
  );
}
