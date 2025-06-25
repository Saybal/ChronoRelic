import React from 'react';
import Lottie from "lottie-react";
import load_cube from "../../../public/Loading_Cube.json";
import load_write from "../../../public/Loading_write.json";

const Loading = () => {
    return (
        <div className='absolute z-30  min-w-screen min-h-screen  bg-[#F5F2EB] flex items-center flex-col justify-center px-4'>
            <Lottie
                className='w-40 sm:w-60 md:w-72 lg:w-80'
                animationData={load_cube}
                loop={true}
            />
            <Lottie
                className='w-40 sm:w-60 md:w-72 lg:w-80 mt-4'
                animationData={load_write}
                loop={true}
            />
        </div>
    );
};

export default Loading;
