"use client";

import { EVENT_DATA } from "@/constants/data";
import { motion } from "framer-motion";

import React from "react";
import Card from "./Card";

const CardsContainer = ({category}: {category : string}) => {
  const containerVariants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -200 },
    show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };
  return (
    <motion.div
      className="max-w-7xl mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 py-10 px-5 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {EVENT_DATA.filter((data) => data.event_category === category).map(
        (val, index) => (
          <motion.div key={index} variants={cardVariants}>
            <Card data={val} />
          </motion.div>
        )
      )}
    </motion.div>
  );
};

export default CardsContainer;
