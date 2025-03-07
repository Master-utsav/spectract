"use client";

import { colorMap } from "@/constants/colors";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const Button = ({
  className,
  isRight,
  color,
  btnName,
}: {
  className?: string;
  isRight?: boolean;
  btnName: string;
  color: keyof typeof colorMap;
}) => {

  console.log(btnName.toLowerCase().replace(" ", '-'))
  return (
    <div className={cn(className, isRight ? "rotate-y-180" : "")}>
      <Link href={`/${btnName.toLowerCase().replace(" " , "-")}`}>
      <motion.button
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.1, ease: "easeInOut" },
        }}
        className={cn(
          `relative md:px-3 px-0 py-3 w-full text-sm md:text-xl text-pretty font-semibold text-white   duration-300 flex justify-center items-center md:text-center group cursor-pointer z-[999] transition-color ease-in-out delay-150 bg-transparent`,
          "before:absolute max-sm:before:block before:hidden  before:right-0 before:top-1 before:-z-10 before:border-r-2 before:border-t-2 before:size-8 before:rounded-tr-sm before:rotate-45 before:p-1 before:translate-x-4 before:translate-y-1 ",
          colorMap[color] || "border-white",
          colorMap["text_" + color]
        )}
        style={{ transformOrigin: "center" }}
      >
        <span
          className={cn(
            "absolute inset-x-0 bottom-px h-[1.6px] rounded-e-md w-3/4 mx-auto",
            colorMap[`${color}_gr`]
          )}
        />
      
          {/* Upper Diagonal Line */}
          <span
            className={cn(
              "absolute hidden sm:block md:top-20 top-16 -right-10 md:w-[50%] w-[60%] h-[1.6px] bg-white rotate-45",
              colorMap[`${color}_gr`]
            )}
          />

          {/* Lower Diagonal Line */}
          <span
            className={cn(
              "absolute  hidden sm:block md:bottom-20 bottom-16 -right-10 md:w-[50%] w-[60%] h-[1.6px] bg-white -rotate-45",
              colorMap[`${color}_gr`]
            )}
          />
 

        <span
          className={cn(
            "absolute inset-x-0 top-px h-[1.5px] w-full mx-auto",
            colorMap[`${color}_gr`]
          )}
        />
        <span
          className={cn(
            "absolute inset-x-0 opacity-80  bottom-[4px] h-[6px] w-[100%] blur-md mx-auto",
            colorMap[`${color}_gr`]
          )}
        />
        <span className={isRight ? "rotate-y-180 " : ""}>{btnName}</span>
      </motion.button>
      </Link>

    </div>
  );
};

export default Button;
