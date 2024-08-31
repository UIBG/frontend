import React from "react";
import Image from "next/image";
import ImageGrid from "./grid-image";

const PastEvents = () => {
  return (
    <div>
        <div className="flex flex-col justify-center items-center mt-4 md:mt-8 lg:mt-10">
            <Image 
                src="images/event/past-events.svg"
                alt="Past Events"
                width={350}
                height={70}
            />
            <div className="max-w-sm text-center text-sm my-2 md:max-w-full lg:max-w-full md:my-4 lg:my-4 md:text-base lg:text-base">
                <p>
                Catch the buzz from our past events! Dive into photos that capture the excitement and competition!
                </p>
            </div>
        </div>
        <div>
            <ImageGrid />
        </div>
    </div>
  );
};

export default PastEvents;