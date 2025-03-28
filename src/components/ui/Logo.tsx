"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ComingSoon from "../ComingSoon";
import { usePageCache } from "@/lib/pageChacheProvider";
import TejantaLogo from "../TejantaLogo";


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
    <div className="absolute left-1/2 -translate-x-1/2 max-[440px]:top-14 max-[500px]:top-10 top-0 sm:top-4 md:top-0 flex flex-col justify-center items-center max-[440px]:w-[40vw] w-[28vw] sm:w-[24vw] lg:w-[14vw] md:w-[18vw] z-[1200] group space-y-0">
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
         
          className="relative w-full aspect-[16/9] flex justify-center items-center h-fit"
        >
          {/* Blurred Background (Creates Depth Effect) */}
          <TejantaLogo  height={80} name="head" className="sm:scale-115 md:scale-110 scale-125"/>
          
        </motion.div>
      )}
      <div className="absolute left-1/2 -translate-x-1/2 max-[440px]:top-32 max-[500px]:top-24 top-22 sm:top-22 md:top-24 flex flex-col justify-center items-center max-[440px]:w-[40vw] w-[28vw] sm:w-[24vw] lg:w-[14vw] md:w-[18vw] z-[1200] group space-y-0">
        <ComingSoon/>
      </div>
    </div>
  );
};

export default Logo;
