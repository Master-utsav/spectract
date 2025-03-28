// app/events/[event]/not-found.tsx
"use client";
import Gradient from "@/components/Gradient";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { FaBackward } from "react-icons/fa6";

export default function NotFound() {
  const router = useRouter();
  return (
    <Gradient>
      <div className="flex-1 overflow-y-auto  sm:px-6 px-2 hide-scrollbar bg-black/50 z-[1100] ">
        {/* <CategoryName category={category} name={eventId.replaceAll("-" , " ")} className="pt-8 min-sm:hidden" /> */}
        <div className="w-full min-h-screen mx-auto rounded-md sm:py-10 py-5 flex flex-col">
          <h1
            className={cn(
              "text-4xl font-semibold capitalize mb-4 sm:mb-0 text-center bg-clip-text text-transparent bg-gradient-to-b from-cyan-400 via-purple-500 to-amber-300"
            )}
          >
            Page Not Found
          </h1>
          <div className="flex justify-center items-center gap-4 mt-6">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "px-4 py-2.5 text-white font-semibold rounded-lg shadow-lg flex items-center gap-2",
                "bg-gradient-to-r from-cyan-500 to-cyan-600"
              )}
              onClick={() => router.back()}
            >
              <FaBackward className="size-5 text-white" />
            </motion.button>
          </div>
        </div>
      </div>
    </Gradient>
  );
}
