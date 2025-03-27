// app/events/[event]/page.tsx
import { notFound } from "next/navigation";
import { EVENT_DETAILS } from "@/constants/event";
import { EventDetailsComponent } from "@/components/EventDetails";
import CategoryName from "@/components/ui/CategoryName";
import BlinkDot from "@/components/BlinkDot";
import Gradient from "@/components/Gradient";
import { colorMap, get_colors } from "@/constants/colors";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image"
import BackButton from "@/components/BackButton";

export async function generateStaticParams() {
  return EVENT_DETAILS.map((event) => ({
    event: event.event,
  }));
}

export default async function EventPage({
  params,
}: {
  params: Promise<{ eventId: string , category:string}>;
}) {
  const { eventId, category } = await params;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const eventDetails:any = EVENT_DETAILS.filter((e) => e.event === eventId);
  if ((!eventDetails) || (eventDetails.length === 0) || (category.trim() !== eventDetails[0].category)) {
    notFound();
  }
  return (
    <Gradient>
      <nav className="fixed top-0 left-1/2 -translate-x-1/2 w-full min-sm:max-w-7xl backdrop-blur-md sm:px-6 px-2 py-4 flex items-center justify-between z-[1200] bg-transparent">
        <BackButton color={get_colors(category)} />
        <Link
          href={"/"}
          className="font-[family-name:var(--font-salsa)] text-3xl text-emerald-300  relative w-[22vw] sm:w-[15vw] md:w-[10vw] lg:w-[8vw] aspect-[16/9] flex justify-center items-center group"
        >
          <Image
            src="/img/tejanta_1.png"
            alt="Logo"
            width={1600}
            height={900}
            className="absolute inset-0 w-full h-full object-cover blur-[20px] "
          />
          {/* Main Logo */}
          <Image
            src="/img/tejanta_1.png"
            alt="Logo"
            width={1600}
            height={900}
            className="absolute inset-0 w-full h-full object-cover mix-blend-color-dodge  hover:scale-105 hover:transition-transform group-hover:delay-150 hover:duration-300"
          />
        </Link>
        <div className="relative w-1/3 max-sm:hidden">
          <span
            className={cn(
              "absolute inset-x-0 top-px h-[1.5px] w-full mx-auto ",
              colorMap[get_colors(category) + "_gr"]
            )}
          />
          <span
            className={cn(
              "absolute inset-x-0 opacity-80  bottom-[4px] h-[6px] w-[100%] blur-md mx-auto ",
              colorMap[get_colors(category) + "_gr"]
            )}
          />
        </div>

        <CategoryName category={category} name={eventId.replaceAll("-" , " ")} className="max-sm:hidden capitalize" />

        <div className="relative w-1/3 max-sm:hidden ">
          <span
            className={cn(
              "absolute inset-x-0 top-px h-[1.5px] w-full mx-auto",
              colorMap[get_colors(category) + "_gr"]
            )}
          />
          <span
            className={cn(
              "absolute inset-x-0 opacity-80  bottom-[4px] h-[6px] w-[100%] blur-md mx-auto",
              colorMap[get_colors(category) + "_gr"]
            )}
          />
        </div>
        <BlinkDot />
      </nav>

      <div className="flex-1 overflow-y-auto pt-20 sm:px-6 px-2 hide-scrollbar bg-black/50 z-[1100] ">
        <CategoryName category={category} name={eventId.replaceAll("-" , " ")} className="pt-8 min-sm:hidden" />
        <div className="w-full min-h-screen mx-auto rounded-md sm:py-10 py-5 flex flex-col">
        <EventDetailsComponent event={eventDetails[0]} />
        </div>
      </div>
    </Gradient>
  )
}
