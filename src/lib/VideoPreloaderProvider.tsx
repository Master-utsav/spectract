"use client";

import { createContext, useContext, useEffect, useState } from "react";

const VideoContext = createContext<{ videoUrl: string | null }>({ videoUrl: null });

export const VideoProvider = ({ children }: { children: React.ReactNode }) => {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  useEffect(() => {
    // Preload video by creating a hidden video element
    const video = document.createElement("video");
    video.src = "/video/spring_v_4.mp4"; // Replace with your actual video path in `public/videos/`
    video.preload = "auto";
    video.muted = true;
    video.load();

    setVideoUrl(video.src);
  }, []);

  return <VideoContext.Provider value={{ videoUrl }}>{children}</VideoContext.Provider>;
};

export const useVideo = () => useContext(VideoContext);
