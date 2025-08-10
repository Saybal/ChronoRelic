import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { MdVerified } from "react-icons/md";

const ArtifactOfTheWeek = () => {
  const [artifact, setArtifact] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/artifact-of-the-week')
      .then(res => res.json())
      .then(data => setArtifact(data))
      .catch(err => console.error(err));
  }, []);

  if (!artifact) return <p>Loading Artifact of the Week...</p>;

  return (
    <section className="bg-[#ECE7E1] px-4 md:px-20">
      
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative bg-[#fcf9f4] border border-[#d9cdbb] rounded-2xl shadow-md p-6 md:p-10 w-full"
      >
        
        <div
        className="absolute rounded-2xl inset-0 bg-cover bg-center bg-no-repeat opacity-12"
        style={{
          backgroundImage: "url('https://brewminate.com/wp-content/uploads/2017/05/DrawingsPalmyra02.gif')",
        }}
      ></div>
      
            <div className="text-sm text-[#960018] font-bold normal-font uppercase mb-2">
              This Week's Pick
            </div>
    
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.img
                src={artifact["Artifact-Image"]} // Replace with your artifact image
                alt="Featured Artifact"
                className="rounded-xl w-full object-cover shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
                whileHover={{ scale: 1.05 }}
              />
    
              <div>
                <div className="flex  gap-3">
                  <h2 className="text-3xl title-font font-extrabold md:text-4xl font-serif text-[#3b3026] mb-4">
                    {artifact["Artifact-Name"]}
                  </h2>
                   <MdVerified className="text-[#800020] w-10 h-10"/>
                </div>
                <h3 className="text-xl normal-font font-bold text-[#3b3026] mb-2">
                  {artifact["Time-Period"]}
                </h3>
                <p className="text-[#5e5344] normal-font mb-4 leading-relaxed">
                  {artifact["Short-Description"]}
                </p>
                <p className="italic normal-font text-[#5e5344] mb-4">
                  — Posted By {artifact.Name}
                </p>
                <div className="border-t pt-4 normal-font mt-4 text-[#766a5f] italic text-sm">
                  “We do not inherit the Earth from our ancestors we borrow it from
                  our children.”
                  <br />– Native American Proverb
                </div>
              </div>
            </div>
          </motion.div>
        </section>
  );
};

export default ArtifactOfTheWeek;