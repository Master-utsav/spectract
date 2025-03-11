"use client";

import { useEffect } from "react";

import Link from "next/link";
import BlinkDot from "@/components/BlinkDot";
import ButtonContainer from "@/components/ButtonContainer";
import Footer from "@/components/Footer";
import SpectractBackground from "@/components/SpectractBackground";
import { usePageCache } from "@/lib/pageChacheProvider";
import ComingSoon from "@/components/ComingSoon";

export default function Home() {
  const { cachedHome, setCachedHome } = usePageCache();

  if (cachedHome) {
    return cachedHome;
  }

  const homeContent = (
    <>
      <SpectractBackground />
      <div className="container mx-auto py-2 relative flex flex-col z-[999]">
        <nav className="flex px-4 flex-row w-full justify-between items-center relative max-w-7xl mx-auto">
          <Link
            href="/"
            className="font-[family-name:var(--font-salsa)] text-3xl text-emerald-300"
          >
            Logo
          </Link>
          <BlinkDot />
        </nav>
        <ComingSoon />
        <ButtonContainer />
        <Footer />
      </div>
    </>
  );

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    setCachedHome(homeContent);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return homeContent;
}
