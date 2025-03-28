// app/events/[event]/page.tsx
import { notFound } from "next/navigation";
import { EVENT_DETAILS } from "@/constants/event";
import { EventDetailsComponent } from "@/components/EventDetails";
import Gradient from "@/components/Gradient";


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
      <div className="flex-1 overflow-y-auto  sm:px-6 px-2 hide-scrollbar bg-black/50 z-[1100] ">
        {/* <CategoryName category={category} name={eventId.replaceAll("-" , " ")} className="pt-8 min-sm:hidden" /> */}
        <div className="w-full min-h-screen mx-auto rounded-md sm:py-10 py-5 flex flex-col">
        <EventDetailsComponent event={eventDetails[0]} />
        </div>
      </div>
    </Gradient>
  )
}
