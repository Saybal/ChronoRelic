// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper/modules";
import "./style.css";

export default function Slider_Banner({children}) {
  return (
    <div className="relative min-h-screen">
      <Swiper className="h-full w-full" loop={true} // enables infinite loop
        autoplay={{
          delay: 3000, // time between slides in ms
          disableOnInteraction: false, // keeps autoplay even after user interaction
        }}
        modules={[Autoplay]} >
              <SwiperSlide>
                  <img className="h-screen w-full object-cover"  src="https://i.ibb.co/d0xzV2F1/A-stunning-close-up-of-ancient-hieroglyphics-and-inscriptions-carved-into-beautifully-aged-Indian-ar.png" alt="" />
        </SwiperSlide>
              <SwiperSlide> 
                  <img className="h-screen w-full object-cover" src="https://i.ibb.co/CsBRGpRJ/Aesthetic-images-featuring-an-array-of-exquisite-artifacts-set-against-a-deep-black-background-Each.png" alt="" />
        </SwiperSlide>
        <SwiperSlide><img className="h-screen w-full object-cover" src="https://i.ibb.co/h1Mg7YMZ/A-series-of-aesthetically-pleasing-illustrations-featuring-ancient-Indian-science-artifacts-displaye.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className="h-screen w-full object-cover" src="https://i.ibb.co/Fqzr9bNg/A-series-of-aesthetically-pleasing-illustrations-featuring-ancient-Indian-science-artifacts-displaye.png" alt="" /></SwiperSlide>
       
          </Swiper>
          <div className="absolute inset-0 z-5">
        {children}
      </div>
    </div>
  );
}
