import React from 'react';
import ArtifactOfTheWeek from './ArtifactOfTheWeek';

const ArtifactOfTheWeekContainer = () => {
    return (
       <div className="min-w-screen bg-[#ECE7E1] pb-32">
      <div className="max-w-7xl mx-auto mt-20">
        <div className="p-4 md:p-7 lg:p-0">
          <h2 className="text-lg md:text-xl  font-medium title-font font-serif">
            From the Curator’s Desk
          </h2>
          <h1 className="title-font text-3xl md:text-5xl font-bold mt-2">
            Whispers of Forgotten Worlds <br /> Rekindled Anew
          </h1>
        </div>

        <div className="mt-10">
          <ArtifactOfTheWeek/>
        </div>
      </div>
    </div>
    );
};

export default ArtifactOfTheWeekContainer;