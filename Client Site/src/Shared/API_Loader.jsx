import React from 'react';
import Lottie from "lottie-react";
import load_api from "../../public/API Loader.json";


const API_Loader = () => {
    return (
        <div className='absolute z-30  min-w-screen min-h-screen  bg-[#F5F2EB] flex items-center flex-col justify-center px-4'>
            <h2 className='text-4xl title-font font-semibold my-2'>Data is Fetching...</h2>
            <Lottie
                className='w-40 sm:w-60 md:w-72 lg:w-80'
                animationData={load_api}
                loop={true}
            />
            
        </div>
    );
};

export default API_Loader;
