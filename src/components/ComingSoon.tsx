"use client";

import { usePageCache } from "@/lib/pageChacheProvider";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const text = "Coming Soon";

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
    <div className="absolute left-1/2 -translate-x-1/2 top-24 max-[640px]:top-16  max-[420px]:top-44 text-2xl text-white/80 w-fit h-fit text-center font-light flex gap-1 font-[family-name:var(--font-assistant)]">
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ y: index % 2 === 0 ? -50 : 50, opacity: 0 }}
          animate={
            show
              ? { y: 0, opacity: 1 }
              : { y: index % 2 === 0 ? -50 : 50, opacity: 0 }
          }
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 10,
            delay: index * 0.1, // Each letter appears with a delay
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </div>
  );
}
