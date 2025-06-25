import React from "react";
import { motion } from "framer-motion";

const TimeLine_Card = ({ time, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`
        bg-black/30 border border-white/40 rounded-2xl shadow-md p-4
        w-[220px] sm:w-[200px] md:w-[250px] lg:w-[280px] 
        flex-shrink-0 mx-2 ${className}
      `}
    >
      <img
        src={time.image_url}
        alt={time.period}
        className="rounded-md w-full h-32 sm:h-36 md:h-40 lg:h-44 object-cover mb-3"
      />
      <h3 className="text-lg sm:text-xl font-semibold text-[#FFBA00]">
        {time.period}
      </h3>
      <p className="text-xs sm:text-sm md:text-base text-[#EDEAE0] mt-1">
        {time.short_description}
      </p>
    </motion.div>
  );
};

export default TimeLine_Card;
