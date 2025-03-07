import { colorMap } from "@/constants/colors";
import { EventDataInterface } from "@/constants/data";
import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";

const Card = ({ data }: { data: EventDataInterface }) => {
  const color: string = get_colors(data.event_category);
  return (
    <div
      className={cn(
        "container rounded-md  border-2 w-full h-[50vh] z-[800] relative overflow-visible pointer-events-auto",
        colorMap[color],
        colorMap[color + "_gr_rd"]
      )}
    >
      <div className="flex flex-row justify-between items-start">
        <h1>{data.event_name}</h1>
        <div className="flex flex-row justify-center items-center gap-2">
          <span>{data.event_date}</span>
          <span>{data.event_time}</span>
        </div>
      </div>
      <p>{data.event_description}</p>
      <div className="flex flex-row justify-between items-start">
        <div className="flex flex-col justify-center items-center">
          <span>{data.event_location}</span>
          <span>{data.event_organizer}</span>
        </div>
        <div>{data.entry_fees}</div>
      </div>
      <div className="flex flex-row justify-between items-start">
        <div className="flex flex-col justify-center items-center gap-2">
          <button>{"Read Guidlines"}</button>
          <button>{"Register Now"}</button>
          <div>
            <Image
              src={"/img/beauty.jpeg"}
              alt={data.event_name + "_image"}
              width={200}
              height={100}
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <span>{data.prize_money.first}</span>
          <span>{data.prize_money.second}</span>
          <span>{data.prize_money.third}</span>
        </div>
      </div>
    </div>
  );
};

export const get_colors = (data: string): string => {
  if (data == "tech-spardha") {
    return "cyan";
  } else if (data === "rang-utsav") {
    return "purple";
  } else if (data === "kala-utsav") {
    return "blue";
  } else if (data === "fashion-show") {
    return "pink";
  } else if (data === "rang-riwaaz") {
    return "amber";
  } else if (data === "thrill-arena") {
    return "yellow";
  } else {
    return "";
  }
};

export default Card;
