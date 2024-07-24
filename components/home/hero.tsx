import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative w-full h-screen bg-primary overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/home/hero-home.svg"
          alt="The Countdown Begins!"
          fill
          style={{ objectFit: 'cover', opacity: 1 }}
        />
      </div>

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
        <div className="pt-24 pb-2 lg:pb-10">
          <Image
            src="/images/home/hero-countdown.svg"
            alt=""
            width={800}
            height={200}
          />
        </div>
        <div className="flicker">
          <Image
            src="/images/home/hero-prodigy.svg"
            alt="Unleash the Prodigy Within You"
            width={800}
            height={150}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
