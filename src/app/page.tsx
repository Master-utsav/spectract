"use client";

import { useEffect } from "react";
import BlinkDot from "@/components/BlinkDot";
import ButtonContainer from "@/components/ButtonContainer";
import Footer from "@/components/Footer";
import SpectractBackground from "@/components/SpectractBackground";
import { usePageCache } from "@/lib/pageChacheProvider";
import Logo from "@/components/ui/Logo";
import { VideoProvider } from "@/lib/VideoPreloaderProvider";
import LogoText from "@/components/ui/LogoText";


export default function Home() {
  const { cachedHome, setCachedHome } = usePageCache();

  if (cachedHome) {
    return cachedHome;
  }

  const homeContent = (
    <VideoProvider>
      <SpectractBackground />
      <div className="container mx-auto py-1 relative flex flex-col z-[999]">
        <nav className="flex px-4 flex-row w-full justify-between items-center relative max-w-7xl mx-auto">
          <LogoText/>
          {/* <ComingSoon/> */}
          <BlinkDot />
        </nav>
        <Logo />
        <ButtonContainer />
        <Footer />
      </div>
      <div className="hidden">

      </div>
    </VideoProvider>
  );

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    setCachedHome(homeContent);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return homeContent;
}
