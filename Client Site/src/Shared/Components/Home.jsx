import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Slider_Banner from "./Slider/Slider_Banner";
import SearchBar from "./Search Bar/SearchBar";
import SuggestionList from "./Search Bar/SuggestionList";
import Featured_sec from "./Featured Section/Featured_sec";
import TimeLine from "./TimeLine Section/TimeLine";
import Curator_Body from "./Curators Pick/Curator_Body";

const Home = () => {
  const [suggestion, setSuggestion] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        document.title = "ChronoRelic";
      }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`min-h-screen ${currentTheme === 'acid' ? "bg-[#ECE7E1]" : "bg-[#1E1B18]"} `}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Slider_Banner>
            <div className="w-full h-full flex justify-center items-center bg-[#00000075] text-white px-4 py-10 sm:py-12 md:py-16 lg:py-20">
              <div className="text-center max-w-4xl px-2 sm:px-4">
                <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight md:leading-snug">
                  Echoes of Time: Discover <br className="hidden sm:block" />
                  Ancient Treasures
                </h2>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl mt-4 sm:mt-6">
                  Explore rare artifacts that shaped our civilizations.
                </p>
                <div className="mt-6 sm:mt-8 md:mt-10">
                  <SearchBar setSuggestion={setSuggestion} />
                </div>
                <div className="mt-4 sm:mt-6">
                  <SuggestionList suggestion={suggestion} />
                </div>
              </div>
            </div>
          </Slider_Banner>

          <Featured_sec />

          <ArtifactOfTheWeekContainer/>

          <TimeLine />

          <ArtifactMapContainer/>

          <Curator_Body />
        </>
      )}
    </div>
  );
};

export default Home;
