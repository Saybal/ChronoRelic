import React, { useEffect, useState } from "react";
import TimeLine_Card from "./TimeLine_Card";
import axios from "axios";
import Marquee from "react-fast-marquee";

// ⚡ OPTIONAL: slow the marquee down a bit on very small screens
const useMarqueeSpeed = () => {
  const [speed, setSpeed] = useState(40);

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
    
      setSpeed(w < 640 ? 25 : 40);
    };
    handleResize();                  
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return speed;
};

const TimeLine = () => {
  const [timeline, setTimeline] = useState([]);
  const marqueeSpeed = useMarqueeSpeed();

  useEffect(() => {
    axios.get('https://artifacts-tracker-sable.vercel.app/timeline').then((res) => setTimeline(res.data));
  }, []);

  return (
    <section className="bg-[#003153] text-white">
      
      <div className="bg-black/40 h-full px-4 sm:px-10 lg:px-20 pt-20 sm:pt-24 lg:pt-32 pb-16 sm:pb-24 lg:pb-32">
       
        <h2 className="title-font font-medium text-lg sm:text-xl lg:text-2xl">
          Journey Through Civilizations
        </h2>

        <h1 className="font-bold title-font leading-tight mt-2
                       text-3xl sm:text-4xl lg:text-5xl">
          Footprints of the Ancients Across the <br className="hidden md:block" />
          Dust of History
        </h1>

       
        <Marquee
          pauseOnHover
          speed={marqueeSpeed}
          gradient={false}
          className="mt-10 sm:mt-10 overflow-hidden"
        >
          {timeline.map((time, i) => (
            <TimeLine_Card
              key={i}
              time={time}
             
              className="mx-2 sm:mx-4 lg:mx-6 flex-shrink-0"
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default TimeLine;
