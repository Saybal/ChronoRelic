import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <div
      className="bg-center bg-no-repeat bg-cover h-[60vh] sm:h-[65vh] md:h-[70vh] lg:h-[80vh]"
      style={{
        backgroundImage:
          'url("https://i.ibb.co/Mx6XQy1L/An-elegant-digital-dashboard-showcasing-user-submitted-Indian-artifacts-Each-artifact-card-features.png")',
      }}
    >
      <div className="w-full h-full bg-black/50 flex flex-col justify-center items-center text-white px-4 py-10 sm:py-12 md:py-16 lg:py-20 text-center">
        <h2
          className="title-font text-white/80 font-bold mb-4 
                       text-3xl sm:text-4xl md:text-6xl lg:text-7xl"
        >
          You’ve contributed to the legacy of
        </h2>

        <div
          className="text-white/80 title-font font-medium 
                        text-2xl sm:text-4xl md:text-6xl lg:text-7xl"
        >
          <Typewriter
            words={[
              "ancient empires...",
              "lost civilizations...",
              "global heritage...",
              "sacred lands...",
              "timeless wonders...",
              "forgotten realms...",
              "human history...",
              "cultural treasures...",
              "distant ages...",
              "vanished worlds...",
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
