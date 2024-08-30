import React from "react";
import Hero from "@/components/about/hero";
import Philosophy from "@/components/about/philosophy";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="">
        <Hero />
      </div>
      <div className="flex-grow">
        <Philosophy />
      </div>
    </div>
  );
};

export default About;