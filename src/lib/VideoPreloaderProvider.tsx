"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";

const VideoContext = createContext<{ videoUrl: string | null }>({ videoUrl: null });

export const VideoProvider = ({ children }: { children: React.ReactNode }) => {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  useEffect(() => {
    const videoSrc = "/video/spring_v_4.mp4"; // Ensure video is in `public/video/`
    setVideoUrl(videoSrc);
  }, []);

  return <VideoContext.Provider value={{ videoUrl }}>{children}</VideoContext.Provider>;
};

export const useVideo = () => useContext(VideoContext);

const VideoComponent = ({ cachedHome }: { cachedHome: boolean}) => {
  const { videoUrl } = useVideo();

  return (
    <motion.video
      src={videoUrl ? videoUrl : "/video/spring_v_4.mp4"}
      className="w-full h-full scale-90 blur-none z-[900] 
                max-[640px]:-translate-y-8  max-[420px]:translate-y-18 
                max-[440px]:translate-y-8 max-[500px]:translate-y-4"
      autoPlay
      preload="auto"
      muted
      playsInline
      style={{
        objectFit: "cover",
        backgroundColor: "transparent",
        mixBlendMode: "lighten",
        willChange: "transform, opacity",
      }}
      initial={cachedHome ? { y: 20, opacity: 1 } : { y: 800, opacity: 0 }}
      animate={{ opacity: 1, y: 20 }}
      exit={{ opacity: 0, y: 0 }}
      transition={!cachedHome ? { delay: 0, duration: 3, ease: [0, 0.55, 0.45, 1] } : {}}
      width={500}
      height={800}
    />
  );
};

export default VideoComponent;
