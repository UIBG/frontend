import React from 'react';

const GoogleMap = () => {
  return (
    <div className="google-map-container flex flex-col items-center">
      <iframe
        width="400"
        height="400"
        className="
            sm:w-[400px] sm:h-[400px] 
            md:w-[700px] md:h-[380px] 
            lg:w-[700px] lg:h-[500px]
        "
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCdReeBWb4AtCTuaIPZtlJSIucmpGQ1JhM&q=Universitas+Indonesia,Depok,Jawa+Barat`}>
      </iframe>
    </div>
  );
};

export default GoogleMap;
