"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePageCache } from "@/lib/pageChacheProvider";


const SmallLogo = () => {
  const [show, setShow] = useState(false);
    const { cachedHome } = usePageCache();
  
    useEffect(() => {
      let timer: NodeJS.Timeout;
  
      if (cachedHome === false) {
        timer = setTimeout(() => {
          setShow(true);
        }, 6500);
      } else {
        setShow(true);
      }
  
      return () => clearTimeout(timer);
   // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  if (!show) return null; 

  return (
    <motion.div
      initial={{ y: 0, opacity: 0, scale: 0.8 }}
      animate={{ y: 0, opacity: 1, scale: 1.0 }}
      transition={{
        duration: 1.5,
        ease: [0.15, 1.2, 0.15, 1],
        type: "spring",
        stiffness: 250,
        damping: 18,
        mass: 2,
      }}
      className="relative w-[22vw] sm:w-[15vw] md:w-[10vw] lg:w-[5vw] aspect-[16/9] flex justify-center items-center"
    >
      <Link href="/" className="relative w-full h-full">
        {/* Blurred Background */}
        <Image
          src="/img/tejanta_2.png"
          alt="Logo"
          width={1600}
          height={900}
          className="absolute inset-0 w-full h-full object-cover blur-[20px]"
        />
        {/* Main Logo */}
        <Image
          src="/img/tejanta_2.png"
          alt="Logo"
          width={1600}
          height={900}
          className="absolute inset-0 w-full h-full object-cover  mix-blend-color-dodge"
        />
      </Link>
    </motion.div>
  );
};

export default SmallLogo;
