"use client";
import Image from 'next/image';

const images = [
  '/images/event/grid-image/DSC_0034.jpg',
  '/images/event/grid-image/DSC_0158.jpg',
  '/images/event/grid-image/DSC_0260.jpg',
  '/images/event/grid-image/DSC_0429.jpg',
  '/images/event/grid-image/DSC_0453.jpg',
  '/images/event/grid-image/DSC_0462.jpg',
  '/images/event/grid-image/DSC_0466.jpg',
  '/images/event/grid-image/DSC_0474.jpg',
];

export default function ImageGrid() {
  return (
    <div className="gridContainer">
      {images.map((image, index) => (
        <div key={index} className="gridItem">
          <Image 
            src={image} 
            alt={`Event Image ${index + 1}`} 
            width={400} 
            height={300} 
            className="gridImage" 
          />
        </div>
      ))}
    </div>
  );
}