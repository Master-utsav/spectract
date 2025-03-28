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
    if (cachedHome === null) {
      const timer = setTimeout(() => {
        setIsIntroComplete(true);
      }, 4500);

      return () => clearTimeout(timer);
    } else {
      setIsIntroComplete(true);
    }
  }, [cachedHome]);

  return (
    <AnimatePresence mode="wait">
    {cachedHome === null && !isIntroComplete ? (
      <IntroPage key="intro" />
    ) : cachedHome === null && isIntroComplete ? (
      <ContentPage key="content" />
    ) : (
      cachedHome && <div key="cached">{cachedHome}</div>
    )}
  </AnimatePresence>
  );
}