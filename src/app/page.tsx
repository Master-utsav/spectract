"use client";

import { useRef } from "react";
import BlinkDot from "@/components/BlinkDot";
import ButtonContainer from "@/components/ButtonContainer";
import Footer from "@/components/Footer";
import SpectractBackground from "@/components/SpectractBackground";
import Link from "next/link";

export default function Home() {
  const playCountRef = useRef(0); 


  return (
    <SpectractBackground playCount={playCountRef.current}>
      <div className="container mx-auto py-2 relative flex flex-col">
        <nav className="flex px-4 flex-row w-full justify-between items-center relative max-w-7xl mx-auto">
          <Link href={"/"} className="font-[family-name:var(--font-salsa)] text-3xl text-emerald-300">
            Logo
          </Link>
          <BlinkDot />
        </nav>
        <ButtonContainer playcount={playCountRef.current} />
        <Footer />
      </div>
    </SpectractBackground>
  );
}
