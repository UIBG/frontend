'use client';

import React from 'react';
import Image from 'next/image';
import {useRouter} from "next/navigation";

const Hero = () => {
    const router = useRouter();

  return (
      <div className="relative w-full h-screen bg-primary overflow-hidden">
          <div className="absolute inset-0 z-0">
              <Image
                  src="/images/home/hero-home.svg"
                  alt="The Countdown Begins!"
                  fill
                  style={{objectFit: 'cover', opacity: 1}}
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
              <div className="flex justify-center mt-2 md:mt-4 lg:mt-6">
                  <button
                      onClick={() => router.push('/event/')}
                      className="bg-red_primary text-white text-xs font-bold py-2 px-6 md:text-base md:py-2 md:px-6 lg:text-2xl lg:py-4 lg:px-10 rounded"
                  >
                      Register Now
                  </button>
              </div>
          </div>
      </div>

  );
};

export default Hero;
