"use client";

import { motion } from "framer-motion";
import React from "react";
import { get_colors } from "../Card";

const CategoryName = ({ category }: { category: string }) => {
  const colorCategoryName = get_colors(category);

  return (
    <motion.h1
      animate={{
        textShadow:
          colorCategoryName === "cyan"
            ? TechSpardhaTS
            : colorCategoryName === "blue"
            ? KalaUtsavTS
            : colorCategoryName === "purple"
            ? RangUtsavTS
            : colorCategoryName === "pink"
            ? FashionShowTS
            : colorCategoryName === "amber"
            ? RangRiwaazTS
            : ThrillArenaTS,
        WebkitTextStroke:
          colorCategoryName === "cyan"
            ? TechSpardhaWTS
            : colorCategoryName === "blue"
            ? KalaUtsavWTS
            : colorCategoryName === "purple"
            ? RangUtsavWTS
            : colorCategoryName === "pink"
            ? FashionShowWTS
            : colorCategoryName === "amber"
            ? RangRiwaazWTS
            : ThrillArenaWTS,
      }}
      transition={{
        textShadow: {
          duration: 1.5,
          repeat: Infinity,
          repeatType: "mirror",
        },
        WebkitTextStroke: {
          duration: 2,
          repeat: Infinity,
          repeatType: "mirror",
        },
      }}
      className="flex capitalize justify-center items-center text-center font-[family-name:var(--font-assistant)]  text-transparent bg-clip-text relative"
    >
      {category
        .replace("-", " ")
        .split(" ")
        .map((word, index) => (
          <span key={index} className="flex justify-end items-center ">
            <span className="font-[family-name:var(--font-salsa)] text-center text-6xl">
              {word.charAt(0)}
            </span>
            <span className="font-[family-name:var(--font-assistant)] lowercase text-center text-5xl">
              {word.slice(1)}
            </span>
            &nbsp;&nbsp;&nbsp;
          </span>
        ))}
    </motion.h1>
  );
};

const FashionShowTS = [
  "0 0 60px rgba(255, 20, 147, 0.7), 0 0 60px rgba(138, 43, 226, 0.7)",
  "0 0 60px rgba(255, 20, 147, 0.9), 0 0 60px rgba(138, 43, 226, 0.9)",
  "0 0 60px rgba(255, 20, 147, 0.7), 0 0 60px rgba(138, 43, 226, 0.7)",
];
const FashionShowWTS = [
  "1px rgba(255, 20, 147, 1)",
  "1px rgba(138, 43, 226, 1)",
  "1px rgba(255, 20, 147, 1)",
];

const TechSpardhaTS = [
  "0 0 60px rgba(6, 182, 212, 0.7), 0 0 60px rgba(59, 130, 246, 0.7)",
  "0 0 60px rgba(6, 182, 212, 0.9), 0 0 60px rgba(59, 130, 246, 0.9)",
  "0 0 60px rgba(6, 182, 212, 0.7), 0 0 60px rgba(59, 130, 246, 0.7)",
];

const TechSpardhaWTS = [
  "1px rgba(6, 182, 212, 1)", // cyan-500
  "1px rgba(59, 130, 246, 1)", // blue-300
  "1px rgba(6, 182, 212, 1)",
];
const KalaUtsavTS = [
  "0 0 60px rgba(168, 85, 247, 0.7), 0 0 60px rgba(59, 130, 246, 0.7)", // purple-500 & blue-300
  "0 0 60px rgba(168, 85, 247, 0.9), 0 0 60px rgba(59, 130, 246, 0.9)",
  "0 0 60px rgba(168, 85, 247, 0.7), 0 0 60px rgba(59, 130, 246, 0.7)",
];

const KalaUtsavWTS = [
  "1px rgba(168, 85, 247, 1)", // purple-500
  "1px rgba(59, 130, 246, 1)", // blue-300
  "1px rgba(168, 85, 247, 1)",
];
const RangUtsavTS = [
  "0 0 60px rgba(243, 232, 255, 0.7), 0 0 60px rgba(168, 85, 247, 0.7)", // purple-100 & purple-500
  "0 0 60px rgba(243, 232, 255, 0.9), 0 0 60px rgba(168, 85, 247, 0.9)",
  "0 0 60px rgba(243, 232, 255, 0.7), 0 0 60px rgba(168, 85, 247, 0.7)",
];

const RangUtsavWTS = [
  "1px rgba(243, 232, 255, 1)", // purple-100
  "1px rgba(168, 85, 247, 1)", // purple-500
  "1px rgba(243, 232, 255, 1)",
];
const RangRiwaazTS = [
  "0 0 60px rgba(245, 158, 11, 0.7), 0 0 60px rgba(254, 215, 170, 0.7)", // amber-500 & orange-200
  "0 0 60px rgba(245, 158, 11, 0.9), 0 0 60px rgba(254, 215, 170, 0.9)",
  "0 0 60px rgba(245, 158, 11, 0.7), 0 0 60px rgba(254, 215, 170, 0.7)",
];

const RangRiwaazWTS = [
  "1px rgba(245, 158, 11, 1)", // amber-500 (Deep warm orange)
  "1px rgba(254, 215, 170, 1)", // orange-200 (Soft pastel orange)
  "1px rgba(245, 158, 11, 1)",
];
const ThrillArenaTS = [
  "0 0 60px rgba(202, 138, 4, 0.7), 0 0 60px rgba(146, 64, 14, 0.7)", // yellow-700 & amber-800
  "0 0 60px rgba(202, 138, 4, 0.9), 0 0 60px rgba(146, 64, 14, 0.9)",
  "0 0 60px rgba(202, 138, 4, 0.7), 0 0 60px rgba(146, 64, 14, 0.7)",
];

const ThrillArenaWTS = [
  "1px rgba(202, 138, 4, 1)", // yellow-700 (deep golden yellow)
  "1px rgba(146, 64, 14, 1)", // amber-800 (dark rich amber)
  "1px rgba(202, 138, 4, 1)",
];

export default CategoryName;
