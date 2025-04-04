"use client";

import { colorMap } from "@/constants/colors";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

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
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className={cn(className, isRight ? "relative rotate-y-180" : "")}>
      {isHovered && (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: -150, y: -50 }}
          animate={{
            x: position.x - 150,
            y: position.y - 50,
            scale: 1,
            opacity: 1,
          }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className={cn(
            "fixed pointer-events-none z-[1000] rounded-lg p-[2px] border-[1px]",
            colorMap[color]
          )}
        >
          <Image
            src={`/img/${btnName === "Fashionista Ada" ? "fashionista_ada_flyer.jpg" : btnName === "Kalaa Utsav" ? "kalaa_utsav_flyer.jpg" : btnName === "Tech Spardha" ? "tech_spardha_flyer.jpg" : btnName === "E-Sports" ? "e_sports_flyer.jpg" : btnName === "Thrill Arena" ? "thrill_arena_flyer" : "rang_riwaaz_flyer.jpg"}`}
            alt="Floating Image"
            width={150}
            height={200}
            className={cn(
              "rounded-lg shadow-lg object-cover",
              colorMap[color],
              isRight ? "rotate-y-180" : ""
            )}
          />
        </motion.div>
      )}
      <Link href={`/${btnName.toLowerCase().replace(" ", "-")}`}>
        <motion.button
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.1, ease: "easeInOut" },
          }}
          whileTap={{
            scale: 0.95
          }}
          onHoverStart={(e) => {
            setIsHovered(true);
            setPosition({ x: e.clientX, y: e.clientY });
          }}
          onHoverEnd={() => setIsHovered(false)}
          onMouseMove={(e) =>
            setPosition({ x: e.clientX % 10, y: e.clientY % 10 })
          }
          className={cn(
            `relative md:px-3 px-0 py-3 w-full text-sm md:text-xl font-semibold text-white duration-300 flex justify-center items-center md:text-center group cursor-pointer z-[999] transition-color ease-in-out delay-150 bg-transparent`,
            "before:absolute max-sm:before:block before:hidden before:right-0 before:top-1 before:-z-10 before:border-r-2 before:border-t-2 before:size-8 before:rounded-tr-sm before:rotate-45 before:p-1 before:translate-x-4 before:translate-y-1",
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
