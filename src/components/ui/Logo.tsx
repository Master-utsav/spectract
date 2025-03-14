"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ComingSoon from "../ComingSoon";
import { usePageCache } from "@/lib/pageChacheProvider";


const Logo = () => {
 const [show, setShow] = useState(false);
   const { cachedHome } = usePageCache();
 
   useEffect(() => {
     let timer: NodeJS.Timeout;
 
     if (cachedHome === null) {
       timer = setTimeout(() => {
         setShow(true);
       }, 6500);
     } else {
       setShow(true);
     }
 
     return () => clearTimeout(timer);
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

  return (
    <div className="absolute left-1/2 -translate-x-1/2 max-[440px]:top-14 max-[500px]:top-10 top-0 sm:top-4 md:top-0 flex flex-col justify-center items-center max-[440px]:w-[40vw] w-[28vw] sm:w-[24vw] lg:w-[14vw] md:w-[18vw] z-[1200] group">
      {show && (
        <motion.div
          initial={{ y: 0, opacity: 0, scale: 0.8 }}
          animate={{ y: 0, opacity: 1, scale: 1.0 }}
          transition={{
            duration: 1.5,
            ease: [0.15, 1.2, 0.15, 1],
            type: "spring",
            stiffness: 250, // Balanced stiffness for smooth drop
            damping: 18, // Reduced damping for softer impact
            mass: 2, // Keeps a heavy, realistic effect
          }}
         
          className="relative w-full aspect-[16/9] flex justify-center items-center"
        >
          {/* Blurred Background (Creates Depth Effect) */}
          <Image
            src="/img/tejanta_1.png"
            alt="Logo"
            width={1600}
            height={900}
            className="absolute inset-0 w-full h-full object-cover blur-[20px] opacity-80"
          />
          {/* Main Logo */}
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.15, 1] }} // Quick bounce effect on impact
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Image
              src="/img/tejanta_1.png"
              alt="Logo"
              width={1600}
              height={900}
              className="absolute inset-0 w-full h-full object-cover mix-blend-color-dodge hover:mix-blend-plus-lighter hover:scale-105 transition-transform delay-150 duration-300"
            />
          </motion.div>
        </motion.div>
      )}
      <ComingSoon/>
    </div>
  );
};

export default Logo;
