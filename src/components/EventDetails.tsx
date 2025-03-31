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
import { useRouter } from "next/navigation";
import { GoArrowLeft } from "react-icons/go";
import Link from "next/link";

export const EventDetailsComponent = ({ event }: { event: any }) => {
  const [activeSection, setActiveSection] = useState(null);
  const color = get_colors(event.category);
  const router = useRouter();

  const toggleSection = (section: React.SetStateAction<null>) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const AccordionSection = ({
    title,
    children,
    icon: Icon,
    sectionName,
  }: any) => {
    const isActive = activeSection === sectionName;

    return children ? (
      <motion.div
        initial={false}
        className={cn(
          "border-b border-white/20 py-4",
          "font-[family-name:var(--font-maven-pro)] "
        )}
      >
        <motion.button
          onClick={() => toggleSection(sectionName)}
          className="w-full flex justify-between items-center cursor-pointer"
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
        "relative overflow-hidden rounded-lg  sm:p-6 p-4 w-full max-w-4xl mx-auto border-2 perspective-1000 transform-style-preserve-3d",
        colorMap[color],
        colorMap[color + "_gr_rd_event"]
      )}
    >
      {/* Event Header */}
      <div className="flex flex-row justify-between items-center mb-6 font-[family-name:var(--font-salsa)]">
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className={cn(
            "px-4 py-2.5 text-white font-semibold rounded-lg shadow-lg flex items-center gap-2",
            colorMap[color + "_btn"]
          )}
          onClick={() => router.back()}
        >
          <GoArrowLeft className="size-5 text-white" />
        </motion.button>
        <h1
          className={cn(
            "md:text-4xl sm:text-3xl text-2xl font-semibold capitalize  text-center w-full",
            colorMap[color + "_header_text_code"]
          )}
        >
          {event.eventName}
        </h1>
      </div>

      {/* Basic Event Details */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 sm:p-6 p-2 rounded-lg bg-white/10 backdrop-blur-md shadow-md md:gap-6">
        {/* Left Column: Location & Entry Fee */}
        <div className="flex flex-col gap-3 w-full md:w-1/2 justify-start items-start">
          <p className="text-white font-[family-name:var(--font-assistant)]">
            {event.description}
          </p>
          <div className="flex sm:flex-row flex-col gap-3 w-full md:w-1/2">
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
              <span className="flex items-center whitespace-nowrap gap-2 text-white text-sm sm:text-base">
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
              <div className="w-full whitespace-nowrap flex items-center justify-center gap-1 text-white text-lg font-semibold">
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
      {event.rounds && (
        <div className="mb-8">
          <h3
            className={cn(
              "text-xl font-semibold mb-4 flex items-center gap-2",
              colorMap[`${color}_header_text_code`]
            )}
          >
            <Rocket className={cn("size-5", colorMap[`${color}_text_code`])} />
            Event Rounds
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {event.rounds.map((round: any, index: any) => (
              <div
                key={index}
                className={cn(
                  "flex flex-col h-full rounded-lg p-4 transition-transform hover:translate-y-1 border border-dashed border-white/20 backdrop-blur-sm",
                  colorMap[color],
                  "shadow-lg"
                )}
              >
                {/* Round Number */}
                <div className="flex items-center gap-2 mb-3 font-[family-name:var(--font-assistant)]">
                  <div
                    className={cn(
                      "w-8 h-8 rounded-full flex border border-dashed items-center justify-center text-lg font-bold",
                      colorMap[`${color}`],
                      colorMap[`${color}_gr_rd`]
                    )}
                  >
                    {index + 1}
                  </div>
                  <h4 className="text-lg font-semibold text-white">
                    {round.name}
                  </h4>
                </div>

                {/* Theme section */}
                {round.theme && (
                  <div className="mb-2">
                    <span className="text-sm text-gray-300">Theme:</span>
                    <p className="text-white font-medium">{round.theme}</p>
                  </div>
                )}

                {/* Themes array if present */}
                {round.themes && (
                  <div className="mb-2 font-[family-name:var(--font-assistant)]">
                    <span className="text-sm text-gray-300">Themes:</span>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {round.themes.map((theme: any, themeIndex: any) => (
                        <span
                          key={themeIndex}
                          className={cn(
                            "px-2 py-1 rounded-md text-sm font-medium",
                            colorMap[`${color}_btn`]
                          )}
                        >
                          {theme}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Description */}
                {round.description && (
                  <div className="mt-auto pt-2 font-[family-name:var(--font-maven-pro)]">
                    <p className="text-white/80 text-sm">{round.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {event.awards_And_Prizes &&
        Object.keys(event.awards_And_Prizes).length !== 0 && (
          <>
            <h3
              className={cn(
                "text-xl font-semibold mb-4 flex items-center gap-2",
                colorMap[`${color}_header_text_code`]
              )}
            >
              <Trophy
                className={cn("size-5", colorMap[`${color}_text_code`])}
              />
              Awards and Prizes
            </h3>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              {Object.entries(event.awards_And_Prizes).map(
                ([category, prizes]) => (
                  <div
                    key={category}
                    className={cn("bg-transparent rounded-lg p-4 flex-1 border border-solid border-white/20 backdrop-blur-sm relative", 
                      colorMap[`${color}`])
                    }
                  >
                    <h4 className="text-xl font-semibold mb-4 capitalize flex items-center relative justify-center pb-3">
                      <User className="mr-2 text-pink-400 size-5" />
                      {category} Category
                    </h4>

                    <span
                      className={cn(
                        "absolute inset-x-0 bottom-px h-[1.5px] w-full mx-auto",
                        colorMap[`${color}_gr`]
                      )}
                    />
                    <div className="gap-3 flex flex-row ">
                      {Object.entries(prizes as any).map(([prize, amount]) => {
                        const isPrize1 = prize.includes("1st");
                        const isPrize2 = prize.includes("2nd");
                        const isPrize3 = prize.includes("3rd");

                        return (
                          <div
                            key={prize}
                            className={cn(
                              "flex items-center relative w-full  px-4 flex-col justify-center gap-1 rounded-md border border-dashed border-white/20 bg-white/10 backdrop-blur-sm",
                              colorMap[color]
                            )}
                          >
                            <div className="flex items-center justify-center size-16">
                              {isPrize1 ? (
                                <Image
                                  width={100}
                                  height={100}
                                  src="/img/award_1.png"
                                  alt="First Prize"
                                  className="object-contain mix-blend-lighten"
                                />
                              ) : isPrize2 ? (
                                <Image
                                  width={100}
                                  height={100}
                                  src="/img/award_2.png"
                                  alt="Second Prize"
                                  className="object-contain mix-blend-lighten"
                                />
                              ) : isPrize3 ? (
                                <Image
                                  width={100}
                                  height={100}
                                  src="/img/award_3.png"
                                  alt="Third Prize"
                                  className="object-contain mix-blend-lighten"
                                />
                              ) : (
                                <Trophy className="text-yellow-400 size-6" />
                              )}
                            </div>

                            <div className="flex justify-center items-center w-fit mx-auto text-center">
                              <p
                                className={`text-xl font-semibold bg-clip-text text-transparent font-[family-name:var(--font-salsa)] flex items-center ${
                                  isPrize1
                                    ? "bg-gradient-to-r from-yellow-300 to-yellow-500"
                                    : isPrize2
                                    ? "bg-gradient-to-r from-gray-300 to-gray-500"
                                    : ""
                                }`}
                              >
                                <IndianRupee
                                  className={`size-4  ${
                                    isPrize1
                                      ? "text-yellow-300"
                                      : isPrize2
                                      ? "text-gray-300"
                                      : ""
                                  }`}
                                />
                                {(amount as string).replace("Rs. ", "")}
                              </p>
                            </div>
                            <span
                              className={cn(
                                "absolute inset-x-0 bottom-px h-[1.5px] w-full mx-auto",
                                colorMap[`${color}_gr`]
                              )}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )
              )}
            </div>
          </>
        )}

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

        {event.additional_Guidelines &&
          event.additional_Guidelines?.[0] !== null && (
            <AccordionSection
              title="Additional Guidelines"
              icon={Users}
              sectionName="additional_Guidelines"
            >
              {renderListSection(event.additional_Guidelines)}
            </AccordionSection>
          )}

        {/* Rules */}
        {event.rules && (
          <AccordionSection title="Rules" icon={ScrollText} sectionName="rules">
            {renderListSection(event.rules)}
          </AccordionSection>
        )}

        {event.language && (
          <AccordionSection
            title="Language"
            icon={LanguagesIcon}
            sectionName="language"
          >
            {renderListSection(event.language)}
          </AccordionSection>
        )}

        {event.language_And_Song_Selection && (
          <AccordionSection
            title="Language and song Selection"
            icon={LassoSelectIcon}
            sectionName="language_And_Song_Selection"
          >
            {renderListSection(event.language_And_Song_Selection)}
          </AccordionSection>
        )}

        {event.music_And_Accompaniment && (
          <AccordionSection
            title="Music & accompaniment"
            icon={Music3}
            sectionName="music_And_Accompaniment"
          >
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
                    <strong>{key.replace(/_/g, " ")}:</strong>{" "}
                    {value as ReactNode}
                  </li>
                ))}
              </ul>
            </AccordionSection>
          )}

        {event.performance_Rules &&
          Object.keys(event.performance_Rules).length !== 0 && (
            <AccordionSection
              title="Performance Rules"
              icon={ScrollText}
              sectionName="performanceRules"
            >
              <ul className="list-disc pl-5 space-y-1">
                {Object.entries(event.performance_Rules).map(([key, value]) => (
                  <li key={key}>
                    <strong>{key.replace(/_/g, " ")}:</strong>{" "}
                    {value as ReactNode}
                  </li>
                ))}
              </ul>
            </AccordionSection>
          )}

        {event.costume_Rules && Object.keys(event.costume_Rules).length !== 0 && (
          <AccordionSection
            title="Costume Rules"
            icon={ScrollText}
            sectionName="costumeRules"
          >
            <ul className="space-y-4">
              {Object.entries(event.costume_Rules).map(([category, rules]) => (
                <li key={category} className="text-white/80">
                  <strong className="text-white capitalize">
                    {category.replace(/_/g, " ")}:
                  </strong>
                  <ul className="list-disc pl-5 space-y-1 mt-1">
                    {Array.isArray(rules) &&
                      rules.map((rule, index) => <li key={index}>{rule}</li>)}
                  </ul>
                </li>
              ))}
            </ul>
          </AccordionSection>
        )}

        {event.theme_Rules && (
          <AccordionSection
            title="Theme Rules"
            icon={ScrollText}
            sectionName="themeRules"
          >
            {renderListSection(event.theme_Rules)}
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
        {/* {event.performance_Rules && (
          <AccordionSection
            title="Performance Rules"
            icon={ScrollText}
            sectionName="performanceRules"
          >
            {renderListSection(event.performance_Rules)}
          </AccordionSection>
        )} */}

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
                    <strong>{key.replace(/_/g, " ")}:</strong>{" "}
                    {value as ReactNode}
                  </li>
                ))}
              </ul>
            </AccordionSection>
          )}

        {event.restrictions && (
          <AccordionSection
            title="Restrictions"
            icon={Ban}
            sectionName="restrictions"
          >
            {renderListSection(event.restrictions)}
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
        <Link
          href={event.link}
          target="_blank"
          className="w-full mx-auto justify-center items-center flex"
        >
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
              "px-4 w-full sm:w-auto py-2.5 text-white sm:justify-start justify-center font-semibold rounded-lg shadow-lg flex items-center gap-2",
              colorMap[color + "_btn"]
            )}
          >
            <Rocket className="size-5 text-white" />
            Register Now
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default EventDetailsComponent;
