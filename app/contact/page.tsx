import React from "react";
import Image from "next/image";
import GoogleMap from "@/components/contact/gmap";

const Contact = () => {
  return (
    <div className="contact-background">
      <div className="flex flex-col items-center pt-20">
        <Image 
          src="/images/contact/contact-us.svg"
          alt="Contact Us"
          width={300}
          height={75}
          className="
            sm:w-[300px] sm:h-[75px] 
            md:w-[400px] md:h-[100px] 
            lg:w-[400px] lg:h-[100px]
          "
        />
      </div>
      <div className="mt-10 container mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-start">
          <div className="w-3/4 md:w-5/6 mx-14 md:mx-10 lg:mr-10">
            <h2 className="text-md md:text-xl lg:text-3xl font-bold mb-4 md:mb-4 lg:mb-8">Contact Information</h2>
            <p className="font-bold text-sm md:text-md lg:text-lg md:mb-px lg:mb-2">Abiyu</p>
            <p className="text-sm md:text-md lg:text-lg md:mb-px lg:mb-2">Phone: +62-877-8440-1390</p>
            <p className="text-sm md:text-md lg:text-lg mb-4 md:mb-8 lg:mb-16">Line: @rafiabiyyu</p>
            <p className="text-sm md:text-md lg:text-lg md:mb-px lg:mb-px">Your enthusiasm and questions fuel our passion! Don’t hesitate to reach out—our team at UI Battlegrounds is here to ensure you have an epic experience in the competition.</p>
          </div>
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:mr-8 mt-10 lg:mt-0">
            <GoogleMap />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;