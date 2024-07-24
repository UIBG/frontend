import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative w-full h-screen bg-primary overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/event/mini-games-faculty/hero-bg.svg"
          alt="Tekken"
          fill
          style={{ objectFit: 'cover', opacity: 0.7 }}
        />
      </div>

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
        <div className="pt-12 flicker">
          <Image
            src="/images/event/mini-games-faculty/hero-text.svg"
            alt="Mini Games in Faculty"
            width={1200}
            height={150}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;