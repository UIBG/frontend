import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
        <Image 
            src="/images/event/hero-event.svg"
            alt="Conquer The Battlegrounds"
            width={1470}
            height={600}
        />
    </div>
  );
};

export default Hero;