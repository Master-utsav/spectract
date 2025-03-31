/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import TejantaLogo from "./TejantaLogo";
import { ChevronDown, ChevronUp, Clock } from "lucide-react";
import { eventCategories, navItems } from "@/constants/sidebar_data";
import { colorMap, get_colors } from "@/constants/colors";

const Sidebar = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [activeEventCategory, setActiveEventCategory] = useState<string | null>(
    null
  );

  const toggleSection = (sectionName: string) => {
    if (activeSection === sectionName) {
      setActiveSection(null);
    } else {
      setActiveSection(sectionName);
    }
  };

  const toggleEventCategory = (categoryName: string) => {
    if (activeEventCategory === categoryName) {
      setActiveEventCategory(null);
    } else {
      setActiveEventCategory(categoryName);
    }
  };

  const sidebarVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        when: "afterChildren",
        staggerDirection: -1,
      },
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  // Animation variants for child elements
  const childVariants = {
    closed: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const AccordionSection = ({
    title,
    children,
    icon: Icon,
    sectionName,
    date,
  }: any) => {
    const isActive = activeEventCategory === sectionName;
    const color = get_colors(sectionName);
    return (
      children && (
        <motion.div initial={false} className=" py-2">
          <motion.button
            onClick={() => toggleEventCategory(sectionName)}
            className="w-full flex justify-between items-center cursor-pointer"
            whileHover={{ opacity: 0.8 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center gap-2">
              <Icon className={`size-4 ${colorMap[color + "_text_code"]}`} />
              <h4
                className={`text-base font-medium ${
                  colorMap[color + "_text_code"]
                } font-[family-name:var(--font-assistant)]`}
              >
                {title}
              </h4>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-white/60 font-[family-name:var(--font-salsa)]">{date}</span>
              {children &&
                (isActive ? (
                  <ChevronUp className="text-white/70 size-4" />
                ) : (
                  <ChevronDown className="text-white/70 size-4" />
                ))}
            </div>
          </motion.button>

          {isActive && children && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: 1,
                height: "auto",
                transition: { duration: 0.3 },
              }}
              className="mt-2 pl-4 text-white/80 space-y-1"
            >
              {children}
            </motion.div>
          )}
        </motion.div>
      )
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-[3000]"
            onClick={onClose}
          />

          {/* Sidebar */}
          <motion.div
            className="fixed top-0 right-0 h-full bg-white/20 backdrop-blur-2xl dark:bg-gray-900/20 w-full sm:w-80  p-6 py-2 shadow-lg flex flex-col min-h-screen overflow-y-auto hide-scrollbar z-[3001]"
            variants={sidebarVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {/* Close button */}
            <motion.div className="self-end mb-0" variants={childVariants}>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </motion.div>

            {/* Logo */}
            <motion.div
              className="mb-4 flex justify-center"
              variants={childVariants}
            >
              <TejantaLogo height={120} width={300} name="head" />
            </motion.div>

            {/* Navigation items */}
            <nav className="flex flex-col  relative">
              {navItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={childVariants}
                  className="border-b border-white/20 font-[family-name:var(--font-salsa)]"
                >
                  {item.hasDropdown ? (
                    <div>
                      <motion.button
                        onClick={() => toggleSection("events")}
                        className="w-full py-4 flex justify-between items-center cursor-pointer"
                        whileHover={{ opacity: 0.8 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center gap-3">
                          <item.icon className="size-5 text-blue-500" />
                          <span className="text-lg font-medium text-white">
                            {item.text}
                          </span>
                        </div>
                        {activeSection === "events" ? (
                          <ChevronUp className="text-white/70" />
                        ) : (
                          <ChevronDown className="text-white/70" />
                        )}
                      </motion.button>

                      {activeSection === "events" && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{
                            opacity: 1,
                            height: "auto",
                            transition: { duration: 0.3 },
                          }}
                          className="mt-2 pl-2 pr-2 pb-4 text-white/80 space-y-1 divide-white/10 divide-y-[1px]"
                        >
                          {eventCategories.map((category, idx) => (
                            <AccordionSection
                              key={idx}
                              title={category.name}
                              sectionName={category.slug}
                              icon={category.icon}
                              date={category.date}
                            >
                              {category.events.length > 0
                                ? category.events.map((event, eventIdx) => (
                                    <Link
                                      href={`/${category.slug}/${event.slug}`}
                                      key={eventIdx}
                                      className="flex items-center w-full relative justify-between py-1 hover:bg-white/5 rounded px-2 transition-colors "
                                      onClick={onClose}
                                    >
                                      <div className="flex justify-start items-center gap-2 w-2/3">
                                        <span className={` text-sm ${colorMap[get_colors(category.slug) + "_text_code"]}`}>
                                          •
                                        </span>
                                        <span className="text-sm font-[family-name:var(--font-assistant)]">
                                          {event.name}
                                        </span>
                                      </div>
                                      <div className="flex items-center gap-1 text-white/50 w-1/3">
                                        <Clock className="size-3" />
                                        <span className="text-xs font-[family-name:var(--font-salsa)]">
                                          {event.time}
                                        </span>
                                      </div>
                                    </Link>
                                  ))
                                : null}
                            </AccordionSection>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="py-4 flex items-center gap-3 hover:text-blue-400 transition-colors"
                      onClick={onClose}
                    >
                      <item.icon className="size-5 text-blue-500" />
                      <span className="text-lg font-medium text-white font-[family-name:var(--font-salsa)]">
                        {item.text}
                      </span>
                    </Link>
                  )}
                </motion.div>
              ))}
            </nav>

            {/* Footer content */}
            <motion.div className="mt-auto" variants={childVariants}>
              <div className="pt-6 border-t border-gray-200 dark:border-gray-700 flex-col justify-center items-center gap-3 text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  © 2025 TEJANTA LNCT FEST | LNCT Group of Colleges, Indore
                </p>
                <div className="w-fit flex flex-wrap gap-2 py-2">
                  <Link
                    href={"https://lnctgroup.in/"}
                    target="_blank"
                    className="w-full mx-auto flex justify-center items-center"
                  >
                    <Image
                      src="/img/skc_logo.png"
                      alt=""
                      width={450}
                      height={160}
                      className="h-auto w-40 px-2 bg-blend-hard-light filter brightness-120 flex justify-center items-center "
                    />
                  </Link>
                  <Link
                    href={"https://lnctgroup.in/"}
                    target="_blank"
                    className="w-fit rounded-full mx-auto flex justify-center items-center"
                  >
                    <Image
                      src="/img/lnct_logo.png"
                      alt=""
                      width={450}
                      height={160}
                      className="h-auto w-32 px-2 flex justify-center items-center filter brightness-300 drop-shadow-md"
                    />
                  </Link>
                  <Link
                    href={"https://lnctgroup.in/"}
                    target="_blank"
                    className="w-fit rounded-full mx-auto flex justify-center items-center"
                  >
                    <Image
                      src="/img/lncts_logo.png"
                      alt=""
                      width={450}
                      height={160}
                      className="h-auto w-32 px-2 flex justify-center items-center filter brightness-300 drop-shadow-md"
                    />
                  </Link>
                  <Link
                    href={"https://lnctgroup.in/"}
                    target="_blank"
                    className="w-fit rounded-full mx-auto flex justify-center items-center"
                  >
                    <Image
                      src="/img/lncp_logo.png"
                      alt=""
                      width={450}
                      height={160}
                      className="h-auto w-32 px-2 flex justify-center items-center filter brightness-300 drop-shadow-md"
                    />
                  </Link>
                </div>
                <Link
                  href={"https://masterutsav.in"}
                  target="_blank"
                  className="inline-block hover:border-b-[1px] border-b-emerald-400 sm:w-32 font-[family-name:var(--font-maven-pro)] text-sm  text-emerald-100 "
                >
                  masterxdevs
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
