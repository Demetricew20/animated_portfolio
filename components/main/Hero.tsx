import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute opacity-20 top-[-545px] md:top-[-450px] lg:top-[-375px] md:right-0 right-2 z-[1] w-full h-full"
      >
        <source src="/blackhole_light.mp4" type="video/mp4"></source>
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;
