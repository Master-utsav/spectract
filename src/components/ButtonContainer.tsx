/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Button from "./ui/Button";
import { usePageCache } from "@/lib/pageChacheProvider";

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.5, y: 50 }, // Start hidden
  visible: (delay: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: "easeOut" }, // Smooth pop-up effect
  }),
};

const ButtonContainer = () => {
  const [show, setShow] = useState(false);
  const { cachedHome } = usePageCache();

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (cachedHome === false) {
      timer = setTimeout(() => {
        setShow(true);
      }, 3500);
    } else {
      setShow(true);
    }

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: show ? 1 : 0 }}
      transition={{ duration: 1 }}
      className="w-full h-[80vh] flex sm:justify-center justify-end items-center z-[999] "
    >
      {show && (
        <>
          <div className="w-full h-full flex flex-col justify-center items-center relative">
            {[
              {
                key: "1",
                className:
                  "absolute sm:right-44 max-[640px]:right-[50%] max-[420px]:right-[45%] sm:top-32 max-[640px]:top-[15%] max-[500px]:top-[25%] max-[420px]:top-[40%]",
                color: "cyan",
                btnName: "Tech Spardha",
              },
              {
                key: "3",
                className:
                  "absolute sm:right-36 max-[640px]:right-[50%] max-[420px]:right-[50%] sm:top-68 max-[640px]:top-[40%] max-[500px]:top-[50%] max-[420px]:top-[60%]",
                color: "purple",
                btnName: "Rang Riwaaz",
              },
              {
                key: "5",
                className:
                  "absolute sm:right-44 max-[640px]:right-[45%] max-[420px]:right-[50%] max-[500px]:right-[55%] sm:bottom-28 max-[640px]:bottom-[25%] max-[500px]:botom-[12%] max-[420px]:bottom-[15%]",
                color: "amber",
                btnName: "E-Sports",
              },
            ].map(({ key, className, color, btnName }, index) => (
              <motion.div
                key={key}
                className={className}
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                custom={index * 0.3}
              >
                <Button
                  className=""
                  color={color}
                  isRight={false}
                  btnName={btnName}
                />
              </motion.div>
            ))}
          </div>

          <div className="w-full h-full flex flex-col justify-center items-center relative ">
            {[
              {
                key: "2",
                className:
                  "absolute max-[640px]:left-[50%] max-[420px]:left-[60%] sm:left-44 sm:top-48 max-[640px]:top-[30%] max-[500px]:top-[40%] max-[420px]:top-[50%]",
                color: "blue",
                btnName: "Kalaa Utsav",
              },
              {
                key: "4",
                className:
                  "absolute max-[640px]:left-[50%] max-[420px]:left-[45%] sm:left-36 sm:bottom-44 max-[640px]:top-[50%] max-[500px]:top-[60%] max-[420px]:top-[70%]",
                color: "pink",
                btnName: "Fashionista Ada",
              },
              {
                key: "6",
                className:
                  "absolute max-[640px]:left-[50%] max-[420px]:left-[50%] sm:left-44 sm:bottom-8 max-[640px]:bottom-[20%] max-[500px]:bottom-[8%]",
                color: "yellow",
                btnName: "Thrill Arena",
              },
            ].map(({ key, className, color, btnName }, index) => (
              <motion.div
                key={key}
                className={className}
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                custom={index * 0.3 + 0.15}
              >
                <Button
                  className=""
                  color={color}
                  isRight={true}
                  btnName={btnName}
                />
              </motion.div>
            ))}
          </div>
        </>
      )}
    </motion.div>
  );
};

export default ButtonContainer;
