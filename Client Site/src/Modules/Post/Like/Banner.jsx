import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <div
      className="bg-center bg-no-repeat bg-cover h-[60vh] sm:h-[65vh] md:h-[70vh] lg:h-[80vh]"
      style={{
        backgroundImage:
          'url("https://i.ibb.co/LhNQgMGH/A-softly-lit-gallery-wall-with-elegant-aged-cards-pinned-or-hanging-each-card-displays-a-small-image.png")',
      }}
    >
      <div className="w-full h-full bg-black/50 flex flex-col justify-center items-center text-white px-4 py-10 sm:py-12 md:py-16 lg:py-20 text-center">
        <h2
          className="title-font text-white/80 font-bold mb-4 
                       text-3xl sm:text-4xl md:text-6xl lg:text-7xl"
        >
          Your heart is drawn to
        </h2>

        <div
          className="text-white/80 title-font font-medium 
                        text-2xl sm:text-4xl md:text-6xl lg:text-7xl"
        >
          <Typewriter
            words={[
              "timeless wonders...",
              "sacred relics...",
              "ancient elegance...",
              "buried memories...",
              "eternal beauty...",
              "forgotten treasures...",
              "crafted legends",
              "lost artistry...",
              "divine artifacts...",
              "historical echoes...",
            ]}
            loop={0}
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={2000}
            cursor
            cursorStyle="|"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
