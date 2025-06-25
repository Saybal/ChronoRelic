import React from 'react';
import Lottie from "lottie-react";
import no_artifact from "../../../../public/No_Artifact.json";

const No_Artifact = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-4 py-10 sm:px-6 md:px-10 bg-none">
      <Lottie 
        className="w-60 sm:w-72 md:w-96 lg:w-[500px]" 
        animationData={no_artifact} 
      />
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-center mt-6">
        You have not added any artifact yet...
      </h2>
    </div>
  );
};

export default No_Artifact;
