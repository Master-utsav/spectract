import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="sm:mt-12 mt-8 px-4 w-full relative text-center flex sm:flex-row flex-col-reverse sm:justify-between justify-center items-center font-[family-name:var(--font-assistant)]">
      <Link href={"https://masterutsav.in"} target="_blank" className="inline-block hover:border-b-[1px] border-b-emerald-400 sm:w-32 font-[family-name:var(--font-maven-pro)] text-sm  justify-start items-start text-emerald-100 ">
        masterxdevs
      </Link>
      <span className="text-white/90  flex justify-center items-center text-center sm:text-base text-sm">
        <p>© 2025 TEJANTA LNCT FEST | LNCT Group of Colleges, Indore</p>
      </span>
      <Link href={"https://lnctgroup.in/"} target="_blank">
        <Image
          src="/img/skc_logo.png"
          alt=""
          width={450}
          height={160}
          className="h-auto w-32 px-2 bg-blend-hard-light sm:flex justify-end items-center hidden"
        />
      </Link>
    </footer>
  );
};

export default Footer;
