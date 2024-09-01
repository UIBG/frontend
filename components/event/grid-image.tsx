"use client";
import Image from 'next/image';

const images = [
  '/images/event/grid-image/DSC_0034.svg',
  '/images/event/grid-image/DSC_0158.svg',
  '/images/event/grid-image/DSC_0260.svg',
  '/images/event/grid-image/DSC_0429.svg',
  '/images/event/grid-image/DSC_0453.svg',
  '/images/event/grid-image/DSC_0462.svg',
  '/images/event/grid-image/DSC_0466.svg',
  '/images/event/grid-image/DSC_0474.svg',
];

export default function ImageGrid() {
  return (
    <div className="gridContainer">
      {images.map((image, index) => (
        <div key={index} className="gridItem">
          <Image 
            src={image} 
            alt={`Event Image ${index + 1}`} 
            width={200}
            height={150}
            className="gridImage
              sm:w-[200px] sm:h-auto 
              md:w-[300px] md:h-auto 
              lg:w-[400px] lg:h-auto
            " 
          />
        </div>
      ))}
    </div>
  );
}