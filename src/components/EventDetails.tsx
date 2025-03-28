/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { ReactNode, useState } from "react";
import { motion } from "framer-motion";
import {
  CalendarDays,
  Clock,
  MapPin,
  ScrollText,
  Rocket,
  User,
  ChevronDown,
  ChevronUp,
  IndianRupee,
  Mail,
  Phone,
  ListMusic,
  ClipboardCheck,
  Ban,
  Wrench,
  Gavel,
  Users,
  Star,
  BookOpen,
  LassoSelectIcon,
  Music3,
  Trophy,
  LanguagesIcon,
} from "lucide-react";
import Image from "next/image";
import { colorMap, get_colors } from "@/constants/colors";
import { cn } from "@/lib/utils";

export const EventDetailsComponent = ({ event } : {event : any}) => {
  const [activeSection, setActiveSection] = useState(null);
  const color = get_colors(event.category);

  const toggleSection = (section: React.SetStateAction<null>) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const AccordionSection = ({ title, children, icon: Icon, sectionName } : any) => {
    const isActive = activeSection === sectionName;

    return children ? (
      <motion.div
        initial={false}
        className={cn(
          "border-b border-white/20 py-4",
          "font-[family-name:var(--font-maven-pro)]"
        )}
      >
        <motion.button
          onClick={() => toggleSection(sectionName)}
          className="w-full flex justify-between items-center"
          whileHover={{ opacity: 0.8 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center gap-3">
            <Icon className={cn("size-6", colorMap[`${color}_text_code`])} />
            <h3
              className={cn(
                "text-xl font-semibold capitalize",
                colorMap[`${color}_header_text_code`]
              )}
            >
              {title}
            </h3>
          </div>
          {isActive ? (
            <ChevronUp className="text-white/70" />
          ) : (
            <ChevronDown className="text-white/70" />
          )}
        </motion.button>

        {isActive && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: 1,
              height: "auto",
              transition: { duration: 0.3 },
            }}
            className="mt-4 pl-9 text-white/80 space-y-2"
          >
            {typeof children === "function" ? children() : children}
          </motion.div>
        )}
      </motion.div>
    ) : null;
  };

  const renderListSection = (items: any[]) => {
    return (
      Array.isArray(items) &&
      items?.map((item, index) => (
        <div key={index} className="flex items-start gap-2">
          <span className="text-yellow-300 text-sm">•</span>
          <span>{item}</span>
        </div>
      ))
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className={cn(
        "relative overflow-hidden rounded-lg  p-6 w-full max-w-4xl mx-auto border-2 perspective-1000 transform-style-preserve-3d",
        colorMap[color],
        colorMap[color + "_gr_rd"]
      )}
    >
      {/* Event Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 font-[family-name:var(--font-salsa)]">
        <h1
          className={cn(
            "text-4xl font-semibold capitalize mb-4 sm:mb-0",
            colorMap[color + "_header_text_code"]
          )}
        >
          {event.eventName}
        </h1>
      </div>

      {/* Basic Event Details */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 p-6 rounded-lg bg-white/10 backdrop-blur-md shadow-md md:gap-6">
        {/* Left Column: Location & Entry Fee */}
        <div className="flex flex-col gap-3 w-full md:w-1/2 justify-start items-start">
          <p className="text-white font-[family-name:var(--font-assistant)]">
            {event.description}
          </p>
          <div className="flex sm:flex-row flex-col gap-6 w-full md:w-1/2">
            {/* Date & Time */}
            <div
              className={cn(
                "flex sm:flex-col flex-row justify-center w-full items-center gap-3 px-4 py-2 rounded-lg  font-medium shadow-md border-[1px] border-dashed font-[family-name:var(--font-salsa)] text-lg",
                colorMap[color]
              )}
            >
              <span className="flex items-center gap-2 text-white text-sm sm:text-base">
                <CalendarDays className="size-5 text-yellow-400" />
                {event.date}
              </span>
              <span className="flex items-center gap-2 text-white text-sm sm:text-base">
                <Clock className="size-5 text-blue-400" />
                {event.time}
              </span>
            </div>

            {/* Venue */}
            <div
              className={cn(
                "flex flex-col  justify-center w-full items-center gap-3 px-4 sm:py-2 rounded-lg  font-medium shadow-md border-[1px] border-dashed font-[family-name:var(--font-salsa)] text-lg",
                colorMap[color]
              )}
            >
              <div className="w-full whitespace-nowrap flex items-center justify-center gap-3 text-white text-lg font-semibold">
                <MapPin className="size-6 text-rose-400" />
                <span>{event.venue}</span>
              </div>

              {/* Entry Fee */}
              <div className="w-full flex flex-col items-center justify-center text-white">
                <span className="text-sm font-medium text-gray-300">
                  Entry Fee
                </span>
                <span className="flex items-center text-xl font-semibold text-emerald-300">
                  <IndianRupee className="size-5 text-emerald-400 mr-1" />
                  {event.entry_Fee}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Faculty & Student Coordinators */}
        <div className="flex flex-col gap-6 w-full md:w-1/2 max-md:my-6">
          {/* Faculty Coordinator */}
          {event.faculty_Coordinator && (
            <div
              className={cn(
                "flex flex-col gap-2 text-white border-[1px] border-dashed rounded-lg py-2 px-3",
                colorMap[color]
              )}
            >
              <span className="flex items-center gap-2 text-lg font-semibold">
                <User className="size-6 text-blue-300 rounded-full border-dashed border-[1px]" />
                Faculty Coordinator:
              </span>
              <p className="pl-8 text-base">{event.faculty_Coordinator.name}</p>

              {event.faculty_Coordinator.contact && (
                <div className="flex items-center gap-2 text-sm pl-8 text-white/70">
                  <Phone className="size-5 text-blue-400" />
                  <a
                    href={`tel:${event.faculty_Coordinator.contact}`}
                    className="hover:text-white/90 transition-colors"
                  >
                    {event.faculty_Coordinator.contact}
                  </a>
                </div>
              )}

              {event.faculty_Coordinator.email && (
                <div className="flex items-center gap-2 text-sm pl-8 text-white/70">
                  <Mail className="size-5 text-red-400" />
                  <a
                    href={`mailto:${event.faculty_Coordinator.email}`}
                    className="hover:text-white/90 transition-colors"
                  >
                    {event.faculty_Coordinator.email}
                  </a>
                </div>
              )}
            </div>
          )}

          {/* Student Coordinator */}
          {event.student_Coordinator && (
            <div
              className={cn(
                "flex flex-col gap-2 text-white border-[1px] border-dashed rounded-lg py-2 px-3",
                colorMap[color]
              )}
            >
              <span className="flex items-center gap-2 text-lg font-semibold">
                <User className="size-6 text-blue-300 rounded-full border-dashed border-[1px]" />
                Student Coordinator:
              </span>
              <p className="pl-8 text-base">{event.student_Coordinator.name}</p>

              {event.student_Coordinator.contact && (
                <div className="flex items-center gap-2 text-sm pl-8 text-white/70">
                  <Phone className="size-5 text-blue-400" />
                  <a
                    href={`tel:${event.student_Coordinator.contact}`}
                    className="hover:text-white/90 transition-colors"
                  >
                    {event.student_Coordinator.contact}
                  </a>
                </div>
              )}

              {event.student_Coordinator.email && (
                <div className="flex items-center gap-2 text-sm pl-8 text-white/70">
                  {/* Ensure the icon size remains fixed */}
                  <Mail className="size-5 text-red-400 flex-shrink-0" />

                  {/* Text container to clip long email */}
                  <div className="overflow-hidden text-ellipsis whitespace-nowrap min-w-0">
                    <a
                      href={`mailto:${event.student_Coordinator.email}`}
                      className="hover:text-white/90 transition-colors block"
                    >
                      {event.student_Coordinator.email}
                    </a>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Expandable Sections */}

      <div className="space-y-2 mb-6 text-sm sm:text-base">
        {/* Eligibility */}
        {event.eligibility?.[0] !== null && (
          <AccordionSection
            title="Eligibility"
            icon={Users}
            sectionName="eligibility"
          >
            {renderListSection(event.eligibility)}
          </AccordionSection>
        )}

        {/* Rules */}
        {event.rules && (
          <AccordionSection title="Rules" icon={ScrollText} sectionName="rules">
            {renderListSection(event.rules)}
          </AccordionSection>
        )}

        {event.language && (
          <AccordionSection title="Language" icon={LanguagesIcon} sectionName="language">
            {renderListSection(event.language)}
          </AccordionSection>
        )}

        {event.language_And_Song_Selection && (
          <AccordionSection title="Language and song Selection" icon={LassoSelectIcon} sectionName="language_And_Song_Selection">
            {renderListSection(event.language_And_Song_Selection)}
          </AccordionSection>
        )}

        {event.music_And_Accompaniment && (
          <AccordionSection title="Music & accompaniment" icon={Music3} sectionName="music_And_Accompaniment">
            {renderListSection(event.music_And_Accompaniment)}
          </AccordionSection>
        )}

        {event.performance_Time &&
          Object.keys(event.performance_Time).length !== 0 && (
            <AccordionSection
              title="Performance Time"
              icon={Clock}
              sectionName="performanceTime"
            >
              <ul className="list-disc pl-5 space-y-1">
                {Object.entries(event.performance_Time).map(([key, value]) => (
                  <li key={key}>
                    <strong>{key.replace(/_/g, " ")}:</strong> {value as ReactNode}
                  </li>
                ))}
              </ul>
            </AccordionSection>
          )}

        {event.content_Guidelines &&
          Object.keys(event.content_Guidelines).length !== 0 && (
            <AccordionSection
              title="Content Guidelines"
              icon={BookOpen}
              sectionName="contentGuidelines"
            >
              <ul className="list-disc pl-5 space-y-3">
                {Object.entries(event.content_Guidelines).map(
                  ([key, values]) => (
                    <li key={key}>
                      <strong>{key.replace(/_/g, " ")}:</strong>
                      <ul className="list-disc pl-5 space-y-1">
                        {Array.isArray(values) ? (
                          values.map((point, index) => (
                            <li key={index}>{point}</li>
                          ))
                        ) : (
                          <li>{values as ReactNode}</li>
                        )}
                      </ul>
                    </li>
                  )
                )}
              </ul>
            </AccordionSection>
          )}

        {/* Dance Categories */}
        {event.categories && (
          <AccordionSection
            title="Categories"
            icon={ListMusic}
            sectionName="categories"
          >
            {renderListSection(event.categories)}
          </AccordionSection>
        )}

        {/* Registration */}
        {event.registration && (
          <AccordionSection
            title="Registration"
            icon={ClipboardCheck}
            sectionName="registration"
          >
            {renderListSection(event.registration)}
          </AccordionSection>
        )}

        {/* Performance Rules */}
        {event.performance_Rules && (
          <AccordionSection
            title="Performance Rules"
            icon={ScrollText}
            sectionName="performanceRules"
          >
            {renderListSection(event.performance_Rules)}
          </AccordionSection>
        )}

        {/* Judging Criteria */}
        {event.judging_Criteria &&
          Object.keys(event.judging_Criteria).length !== 0 && (
            <AccordionSection
              title="Judging Criteria"
              icon={Star}
              sectionName="judgingCriteria"
            >
              <ul className="list-disc pl-5 space-y-1">
                {Object.entries(event.judging_Criteria).map(([key, value]) => (
                  <li key={key}>
                    <strong>{key.replace(/_/g, " ")}:</strong> {value as ReactNode}
                  </li>
                ))}
              </ul>
            </AccordionSection>
          )}

        {/* Disqualification */}
        {event.disqualification && (
          <AccordionSection
            title="Disqualification"
            icon={Ban}
            sectionName="disqualification"
          >
            {renderListSection(event.disqualification)}
          </AccordionSection>
        )}

        {event.decision_And_Disqualification && (
          <AccordionSection
            title="Decision & disqualification"
            icon={Ban}
            sectionName="decision_And_Disqualification"
          >
            {renderListSection(event.decision_And_Disqualification)}
          </AccordionSection>
        )}

        {/* Technical Requirements */}
        {event.technical_Requirements && (
          <AccordionSection
            title="Technical Requirements"
            icon={Wrench}
            sectionName="technicalRequirements"
          >
            {renderListSection(event.technical_Requirements)}
          </AccordionSection>
        )}

        {/* Code of Conduct */}
        {event.code_Of_Conduct && (
          <AccordionSection
            title="Code of Conduct"
            icon={Gavel}
            sectionName="codeOfConduct"
          >
            {renderListSection(event.code_Of_Conduct)}
          </AccordionSection>
        )}

        {event.awards_And_Certificates && (
          <AccordionSection
            title="Awards and Certificates"
            icon={Trophy}
            sectionName="awards_And_Certificates"
          >
            {renderListSection(event.awards_And_Certificates)}
          </AccordionSection>
        )}
      </div>

      {/* Prize Money Section */}
      {event.prize_Money && (
        <div className="flex flex-col justify-center items-center gap-3 p-4 rounded-lg shadow-lg border border-white/30 bg-gradient-to-b from-white/20 to-transparent font-[family-name:var(--font-salsa)] backdrop-blur-3xl">
          <span className="text-2xl font-bold text-yellow-400 drop-shadow-lg flex items-center gap-3">
            <Image
              width={40}
              height={40}
              src="/img/award_1.png"
              alt="First Prize"
              className="w-8 h-8 object-contain mix-blend-lighten"
            />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500 flex items-center">
              <IndianRupee className="size-5 text-yellow-300" />
              {event.prize_Money?.first}
            </span>
          </span>
          {/* Second Prize */}
          <span className="text-xl font-semibold text-yellow-300 drop-shadow-md flex items-center lg:gap-3 gap-1">
            <Image
              width={40}
              height={40}
              src="/img/award_2.png"
              alt="Second Prize"
              loading="eager"
              className="w-8 h-8 object-contain mix-blend-lighten"
            />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-300 to-gray-500 flex justify-center items-center">
              <IndianRupee className="size-4 text-gray-300 " />
              {event.prize_Money.second}
            </span>
          </span>

          {/* Third Prize */}
          <span className="text-lg font-medium text-yellow-200 drop-shadow-sm flex items-center lg:gap-3 gap-1">
            <Image
              width={40}
              height={40}
              src="/img/award_3.png"
              alt="Third Prize"
              loading="eager"
              className="w-8 h-8 object-contain mix-blend-lighten"
            />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-300 to-orange-500 flex justify-center items-center">
              <IndianRupee className="size-3 text-orange-300 " />
              {event.prize_Money.third}
            </span>
          </span>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex justify-center items-center gap-4 mt-6">
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className={cn(
            "px-4 py-2.5 text-white font-semibold rounded-lg shadow-lg flex items-center gap-2",
            colorMap[color + "_btn"]
          )}
        >
          <Rocket className="size-5 text-white" />
          Register Now
        </motion.button>
      </div>
    </motion.div>
  );
};

export default EventDetailsComponent;
