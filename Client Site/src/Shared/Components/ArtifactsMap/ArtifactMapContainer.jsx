import React from 'react';
import ArtifactsMap from './ArtifactsMap';

const ArtifactMapContainer = () => {
    return (
        <div className="min-w-screen bg-[#ECE7E1] pb-32">
      <div className="max-w-7xl mx-auto mt-20">
        <div className="p-4 md:p-7 lg:p-0">
          <h2 className="text-lg md:text-xl  font-medium title-font font-serif">
            Map of Marvels
          </h2>
          <h1 className="title-font text-3xl md:text-5xl font-bold mt-2">
            Explore where history was uncovered, <br /> one pin at a time.
          </h1>
        </div>

        <div className="mt-10">
          <ArtifactsMap/>
        </div>
      </div>
    </div>
    );
};

export default ArtifactMapContainer;