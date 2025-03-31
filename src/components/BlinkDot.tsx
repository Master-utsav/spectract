import FireAnimatedSvg from "./FireAnimatedSvg";

const BlinkDot = ({ click , height , width}: { click: () => void , height : number , width: number}) => {
  return (
    <button
      className="relative w-16 h-fit flex justify-center items-center rounded-full cursor-pointer"
      onClick={click}
    >
      {/* <div className="absolute inset-0 flex items-center justify-center pulse-effect" /> */}
      {/* <motion.div
        className="absolute size-6 inset-0 rounded-full "
        animate={{
          opacity: [0.8, 1, 0.8],
          scale: [0.9 , 1 , 0.9],
          backgroundColor: ["#3498db", "#9b59b6", "#3498db"],
        }}
      /> */}
      <div className="absolute inset-0 flex items-center justify-center ">
      <div className="absolute h-[50px] w-[50px] rounded-full bg-gradient-radial-glow opacity-60 blur-3xl animate-fireGlow"></div>
        <FireAnimatedSvg height={height} width={width} />
      </div>
    </button>
  );
};

export default BlinkDot;
