
import BlinkDot from "@/components/BlinkDot";
import Card, { get_colors } from "@/components/Card";
import Gradient from "@/components/Gradient";
import CategoryName from "@/components/ui/CategoryName";
import { colorMap } from "@/constants/colors";
import { EVENT_DATA } from "@/constants/data";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default async function CategoryCard({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  return (
    <Gradient>
      <nav className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl backdrop-blur-md px-6 py-4 flex items-center justify-between z-[1200] bg-transparent">
        <Link
          href={"/"}
          className="font-[family-name:var(--font-salsa)] text-3xl text-emerald-300"
        >
          Logo
        </Link>
        <div className="relative w-1/3 ">
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

        <CategoryName category={category} />

        <div className="relative w-1/3 ">
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

      <div className="flex-1 overflow-y-auto pt-20 px-6 hide-scrollbar bg-black/50 z-[1100] ">
        <div className="w-full min-h-screen mx-auto rounded-md py-10 flex flex-col">
          <div className="max-w-7xl mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 overflow-y-auto ">
            {EVENT_DATA.filter((data) => data.event_category === category).map(
              (val, index) => (
                <Card data={val} key={index} />
              )
            )}
          </div>
        </div>
      </div>
    </Gradient>
  );
}
