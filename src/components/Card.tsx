"use client";

import { colorMap, get_colors } from "@/constants/colors";
import { EventDataInterface } from "@/constants/data";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import {
  CalendarDays,
  Clock,
  IndianRupee,
  MapPin,
  Rocket,
  ScrollText,
  User,
} from "lucide-react";

const Card = ({ data }: { data: EventDataInterface }) => {
  const color: string = get_colors(data.event_category);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{
        rotateX: 15,
        rotateY: 8,
        scale: 1.02,
        boxShadow: "0px 15px 30px rgba(0,0,0,0.3)",
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className={cn(
        "relative overflow-hidden rounded-lg p-6 w-full max-w-md border-2 pointer-events-auto",
        "perspective-1000 transform-style-preserve-3d group",
        colorMap[color],
        colorMap[color + "_gr_rd"]
      )}
    >
      {/* Event Details */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start w-full">
        {/* Event Name */}
        <h1
          className={cn(
            "text-2xl font-semibold break-words text-start w-full sm:w-auto capitalize font-[family-name:var(--font-maven-pro)]",
            colorMap[color + "_header_text_code"]
          )}
        >
          {data.event_name.replace("-", " ")}
        </h1>

        {/* Date-Time Chip */}
        <div
          className={cn(
            "flex flex-col justify-center items-start gap-2 px-3 py-1 rounded-sm text-base font-[family-name:var(--font-salsa)] font-medium shadow-md w-fit whitespace-nowrap",
            colorMap[color + "_gr_side"]
          )}
        >
          <span className="flex justify-center items-center gap-2 ">
            <CalendarDays className="size-4 " />
            {data.event_date}
          </span>

          <span className="flex justify-center items-center gap-2">
            {" "}
            <Clock className="size-4" />
            {data.event_time}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-white mt-2 text-base font-[family-name:var(--font-assistant)] line-clamp-3">
        {data.event_description}
      </p>

      {/* Location & Organizer */}
      <div className="flex flex-row justify-between items-center mt-4 p-3 rounded-lg bg-white/10 backdrop-blur-md shadow-md">
        {/* Location & Organizer Info */}
        <div className="flex flex-col justify-start items-start gap-1 text-white">
          <span className="flex justify-center items-center gap-2 font-semibold">
            {" "}
            <MapPin className="size-5 text-rose-400" /> {data.event_location}
          </span>

          <span className="flex justify-center items-center gap-2 text-sm">
            <User
              className={cn(
                "size-5 text-blue-300 rounded-full border-dashed border-[1px]",
                colorMap[color]
              )}
            />
            {data.event_organizer}
          </span>
        </div>

        {/* Entry Fee */}
        <div className="flex flex-col items-end gap-1 text-white relative">
          <span className="text-sm font-medium text-gray-300 font-[family-name:var(--font-assistant)]">
            Entry Fee
          </span>
          <span className="flex justify-center items-center text-lg font-[family-name:var(--font-salsa)] text-emerald-200">
            <IndianRupee className="size-4 text-emerald-300" />
            {data.entry_fees}
          </span>
          <span
            className={cn(
              "absolute inset-x-0 bottom-px h-[1.5px] w-full mx-auto",
              colorMap[`${color}_gr`]
            )}
          />
        </div>
      </div>

      {/* Buttons & Image */}
      <div className="flex flex-row justify-between items-start mt-6">
        <div className="flex flex-col justify-start items-start gap-3 font-[family-name:var(--font-maven-pro)]">
          {/* Read Guidelines Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
              "w-full px-4 py-2.5 bg-white text-black font-medium rounded-lg shadow-md flex items-center gap-2 transition-all duration-300 border active:scale-95",
              colorMap[color + "_btn_hover"]
            )}
          >
            <ScrollText
              className={cn("size-5", colorMap[color + "_text_code"])}
            />
            Read Guidelines
          </motion.button>

          {/* Register Now CTA */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
              "w-full px-4 py-2.5 text-white font-semibold rounded-lg shadow-lg flex items-center gap-2 transition-all duration-300 hover:brightness-110 active:scale-95",
              colorMap[color + "_btn"]
            )}
          >
            <Rocket className="size-5 text-white" />
            Register Now
          </motion.button>
        </div>
        {/* <div>
          <Image
            src={"/img/beauty.jpeg"}
            alt={data.event_name + "_image"}
            width={200}
            height={100}
            className="rounded-md shadow-lg aspect-[9/16]"
          />
        </div> */}
        {/* Prize Money */}
        <div className="flex flex-col justify-center items-start gap-3 p-4 rounded-lg shadow-lg border border-white/30 bg-gradient-to-b from-white/20 to-transparent font-[family-name:var(--font-salsa)] font-bold">
          {/* First Prize */}
          <span className="text-2xl font-bold text-yellow-400 drop-shadow-lg flex items-center gap-3">
            <Image
              width={40}
              height={40}
              src="/img/award_1.png"
              alt="First Prize"
              loading="eager"
              className="w-8 h-8 object-contain mix-blend-lighten"
            />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500">
              {data.prize_money.first}
            </span>
          </span>

          {/* Second Prize */}
          <span className="text-xl font-semibold text-yellow-300 drop-shadow-md flex items-center gap-3">
            <Image
              width={40}
              height={40}
              src="/img/award_2.png"
              alt="Second Prize"
              loading="eager"
              className="w-8 h-8 object-contain mix-blend-lighten"
            />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-300 to-gray-500">
              {data.prize_money.second}
            </span>
          </span>

          {/* Third Prize */}
          <span className="text-lg font-medium text-yellow-200 drop-shadow-sm flex items-center gap-3">
            <Image
              width={40}
              height={40}
              src="/img/award_3.png"
              alt="Third Prize"
              loading="eager"
              className="w-8 h-8 object-contain mix-blend-lighten"
            />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-300 to-orange-500">
              {data.prize_money.third}
            </span>
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
