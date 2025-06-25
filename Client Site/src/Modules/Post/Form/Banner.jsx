import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <div
      className="bg-left bg-no-repeat bg-cover h-[60vh] sm:h-[65vh] md:h-[70vh] lg:h-[80vh]"
      style={{
        backgroundImage:
          'url("https://i.ibb.co/4wmtPHZ8/060920-14-History-Ancient-Religion-India-Hindu.jpg")',
      }}
    >
      <div className="w-full h-full bg-black/50 flex flex-col justify-center items-center text-white px-4 py-10 sm:py-12 md:py-16 lg:py-20 text-center">
        <h2 className="title-font text-white/80 text-4xl md:text-7xl lg:text-8xl font-bold mb-4">
          Be the voice that will
        </h2>
        <div className=" text-white/80 title-font text-4xl md:text-7xl lg:text-8xl font-medium h-10">
          <Typewriter
            words={[
              "Preserve History...",
              "Record Time...",
              "Explore Civilizations...",
              "Reveal Secrets...",
              "Protect Legacy...",
              "Document Antiquity...",
            ]}
            loop={false}
            typeSpeed={60}
            deleteSpeed={50}
            delaySpeed={3000}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
