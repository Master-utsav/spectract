"use client";

import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { colorMap } from "@/constants/colors";
import { ChevronLeft } from "lucide-react";

export default function BackButton({ color }: { color: string }) {
  const router = useRouter();

  return (
    <button
      className={cn(
        "relative flex items-center justify-center text-white px-1 py-2 rounded-lg transition-all duration-300 hover:bg-white/20 active:scale-95 min-sm:hidden"
      )}
      onClick={() => router.back()}
    >
      {/* Back Text */}
      <span
        className={cn(
          "text-base font-medium flex justify-center items-center",
          colorMap[`${color}_text_code`]
        )}
      >
        {" "}
        <ChevronLeft className="size-6" />
      </span>
    </button>
  );
}
