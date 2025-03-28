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
    const timer = setTimeout(() => {
      setIsIntroComplete(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);


  return (
    <AnimatePresence mode="wait">
      {!isIntroComplete ? (
        <IntroPage key="intro" />
      ) : cachedHome && (
        cachedHome
      )}
      {
        !cachedHome &&
        <ContentPage/>
      }
    </AnimatePresence>
  );
}
