export const colorMap: Record<string, string> = {
  cyan: "border-cyan-500 before:border-cyan-500 after:border-cyan-500",
  purple: "border-purple-500 before:border-purple-500 after:border-purple-500",
  amber: "border-amber-400 before:border-amber-400 after:border-amber-400",
  blue: "border-blue-300 before:border-blue-300 after:border-blue-300",
  pink: "border-pink-400 before:border-pink-400 after:border-pink-400",
  yellow: "border-yellow-700 before:border-yellow-700 after:border-yellow-700",
  cyan_text_code: "text-cyan-500 ",
  purple_text_code: "text-purple-500",
  amber_text_code: "text-amber-400",
  blue_text_code: "text-blue-300",
  pink_text_code: "text-pink-400",
  yellow_text_code: "text-yellow-700",
  cyan_header_text_code: "text-cyan-300 ",
  purple_header_text_code: "text-purple-300",
  amber_header_text_code: "text-amber-200",
  blue_header_text_code: "text-blue-300",
  pink_header_text_code: "text-pink-200",
  yellow_header_text_code: "text-yellow-500",
  cyan_btn_hover: "border-cyan-500 hover:bg-cyan-50",
  purple_btn_hover: "border-purple-500 hover:bg-purple-50",
  amber_btn_hover: "border-amber-400 hover:bg-amber-50",
  blue_btn_hover: "border-blue-300 hover:bg-blue-50",
  pink_btn_hover: "border-pink-400 hover:bg-pink-50",
  yellow_btn_hover: "border-yellow-700 hover:bg-yellow-50",  
  cyan_btn: "bg-gradient-to-r from-cyan-500 to-cyan-600",
  purple_btn: "bg-gradient-to-r from-purple-500 to-purple-600",
  amber_btn: "bg-gradient-to-r from-amber-400 to-amber-500",
  blue_btn: "bg-gradient-to-r from-blue-300 to-blue-400",
  pink_btn: "bg-gradient-to-r from-pink-400 to-pink-500",
  yellow_btn: "bg-gradient-to-r from-yellow-700 to-yellow-800",
  text_cyan: "hover:text-cyan-500/80",
  text_purple: "hover:text-purple-500/80",
  text_amber: "hover:text-amber-400/80",
  text_blue: "hover:text-blue-300/80",
  text_pink: "hover:text-pink-400/80",
  text_yellow: "hover:text-yellow-700/80",
  cyan_gr: "bg-gradient-to-r from-transparent via-cyan-500 to-transparent",
  purple_gr: "bg-gradient-to-r from-transparent via-purple-500 to-transparent",
  amber_gr: "bg-gradient-to-r from-transparent via-amber-400 to-transparent",
  blue_gr: "bg-gradient-to-r from-transparent via-blue-300 to-transparent",
  pink_gr: "bg-gradient-to-r from-transparent via-pink-400 to-transparent",
  yellow_gr: "bg-gradient-to-r from-transparent via-yellow-700 to-transparent",
  cyan_gr_side: "bg-gradient-to-t from-cyan-500/30 from-10% via-transparent via-50% to-cyan-500/30 to-90%",
  yellow_gr_side: "bg-gradient-to-t from-yellow-700/30 from-10% via-transparent via-50% to-yellow-700/30 to-90%",
  amber_gr_side: "bg-gradient-to-t from-amber-400/30 from-10% via-transparent via-50% to-amber-400/30 to-90%",
  blue_gr_side: "bg-gradient-to-t from-blue-300/30 from-10% via-transparent via-50% to-blue-300/30 to-90%",
  pink_gr_side: "bg-gradient-to-t from-pink-400/30 from-10% via-transparent via-50% to-pink-400/30 to-90%",
  purple_gr_side: "bg-gradient-to-t from-purple-500/30 from-10% via-transparent via-50% to-purple-500/30 to-90%",
  cyan_gr_rd:
    "bg-gradient-radial from-cyan-500 via-cyan-300 to-transparent bg-center bg-[radial-gradient(circle_at_bottom,rgba(6,182,212,0.4),rgba(103,232,249,0.1),transparent)]",
  purple_gr_rd:
    "bg-gradient-radial from-purple-500 via-purple-300 to-transparent bg-center bg-[radial-gradient(circle_at_bottom,rgba(168,85,247,0.4),rgba(233,213,255,0.1),transparent)]",
  amber_gr_rd:
    "bg-gradient-radial from-amber-400 via-amber-200 to-transparent bg-center bg-[radial-gradient(circle_at_bottom,rgba(251,191,36,0.4),rgba(254,243,199,0.1),transparent)]",
  blue_gr_rd:
    "bg-gradient-radial from-blue-300 via-blue-200 to-transparent bg-center bg-[radial-gradient(circle_at_bottom,rgba(147,197,253,0.4),rgba(219,234,254,0.1),transparent)]",
  pink_gr_rd:
    "bg-gradient-radial from-pink-400 via-pink-200 to-transparent bg-center bg-[radial-gradient(circle_at_bottom,rgba(244,114,182,0.4),rgba(252,231,243,0.1),transparent)]",
  yellow_gr_rd:
    "bg-gradient-radial from-yellow-700 via-yellow-400 to-transparent bg-center bg-[radial-gradient(circle_at_bottom,rgba(202,138,4,0.4),rgba(253,224,71,0.1),transparent)]",
};

export const get_colors = (data: string): string => {
  if (data == "tech-spardha") {
    return "cyan";
  } else if (data === "rang-utsav") {
    return "purple";
  } else if (data === "kalaa-utsav") {
    return "blue";
  } else if (data === "fashion-show") {
    return "pink";
  } else if (data === "rang-riwaaz") {
    return "amber";
  } else if (data === "thrill-arena") {
    return "yellow";
  } else {
    return "";
  }
};
