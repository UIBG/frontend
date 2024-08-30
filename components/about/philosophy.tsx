import React from "react";
import Image from 'next/image';

const Philosophy = () => {
  return (
    <div className="relative w-full bg-primary">
      <div className="flex justify-center">
        <Image 
          src="/images/about/philosophy.svg" 
          alt="Logo Philosophy"
          width={1470}
          height={833}
        />
      </div>
    </div>
  );
};

export default Philosophy;