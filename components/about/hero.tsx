import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col items-center mt-20 about-background">
      <Image 
        src="/images/about/gettoknow-title.svg"
        alt="Get To Know UIBG"
        width={664}
        height={153}
      />
      
      <div className="flex flex-col justify-center mt-4 w-full max-w-sm md:max-w-2xl lg:max-w-7xl text-justify font-medium">
        <div className="w-full p-2">
          <p className="text-xs md:text-base lg:text-lg">
            UI BATTLEGROUNDS merupakan kompetisi esports taraf nasional yang akan diikuti oleh mahasiswa se-Indonesia dan pelajar SMA/Sederajat se-Jabodetabek dalam 3 cabang esports, yaitu PUBG Mobile, Mobile Legends, dan Valorant. UI Battlegrounds berperan sebagai wadah kompetisi bagi mahasiswa dan pelajar SMA/Sederajat yang bergabung sebagai peserta UI Battlegrounds 2024 untuk mengembangkan minat dan bakat terhadap dunia esports.
          </p>
        </div>
        <div className="py-8 flex flex-col justify-center items-center">
          <Image 
            src="/images/about/prodigy.svg"
            alt="Unleash The Prodigy Within You"
            width={600}
            height={20}
          />
        </div>
        <div className="w-full p-2">
          <p className="text-xs md:text-base lg:text-lg">
            UI Battlegrounds 2024 mendorong seluruh mahasiswa dan pelajar SMA/Sederajat pegiat esports di Indonesia untuk menunjukkan potensi diri secara kompetitif, sportif, dan berkelanjutan dalam upaya menyalurkan semangat dalam mencapai aktualisasi diri untuk melampaui diri dan ekspektasi dalam mencapai cita-cita, khususnya di bidang olahraga esports.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
