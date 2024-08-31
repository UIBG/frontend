"use client";
import React from "react";
import Hero from "@/components/event/hero";
import PastEvents from "@/components/event/past-events";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Event = () => {
  const router = useRouter();

  const handleRSVPClick = () => {
    router.push("event/mini-games-faculty/rsvp");
  };
  return (
    <div>
      <div>
        <Hero />
      </div>
      <div className="relative">
        <Image 
          src="/images/event/mini-games.svg"
          alt="RSVP Mini Games in Faculty Now!"
          width={1470}
          height={600} 
        />
      </div>
      <div className="flex justify-center mt-2 md:mt-4 lg:mt-6">
        <button
          onClick={handleRSVPClick}
          className="bg-red_primary text-white text-xs font-bold py-1 px-2 md:text-base md:py-2 md:px-6 lg:text-2xl lg:py-4 lg:px-10 rounded"
        >
          RSVP Now
        </button>
      </div>
      <div >
        <PastEvents />
      </div>
    </div>
  );
};

export default Event;