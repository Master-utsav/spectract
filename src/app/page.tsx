"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { usePageCache } from "@/lib/pageChacheProvider";
import IntroPage from "@/components/IntroPage";
import { useVideo } from "@/lib/VideoPreloaderProvider";
import ContentPage from "@/components/ContentPage";

export default function Home() {
  const { cachedHome } = usePageCache();
  const [isIntroComplete, setIsIntroComplete] = useState(false);
  useVideo();

  useEffect(() => {
    if (!cachedHome) {
      const timer = setTimeout(() => {
        setIsIntroComplete(true);
      }, 3500);

      return () => clearTimeout(timer);
    } else {
      setIsIntroComplete(true);
    }
  }, [cachedHome]);

  return (
    <AnimatePresence mode="wait">
      {!cachedHome && !isIntroComplete ? (
        <IntroPage key="intro" />
      ) : (
        <ContentPage key="content" />
      )}
    </AnimatePresence>
  );
}