import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Loading from "../Loading";
import Featured_card from "./Featured_card";
import { Link } from "react-router";
import { useTheme } from "../../Hooks/useTheme";

const Featured_sec = () => {
  const [allArtifacts, setAllArtifacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/all-artifacts")
      .then((res) => res.json())
      .then((data) => {
        setAllArtifacts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching artifacts:", err);
        setLoading(false);
        Swal.fire({
          icon: "error",
          title: "Failed to load data",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  }, []);

  const currentTheme = useTheme();
  return (
    <div className={`min-w-screen  ${currentTheme === 'acid' ? "bg-[#ECE7E1]" : "bg-[#1E1B18]"} pb-12 px-3 md:px-8 lg:px-0`}>
      <div className="max-w-7xl mx-auto">
        {loading ? (
          <Loading />
        ) : (
          <>
            <div className="mt-20 bg-bg-none">
              <p className={`title-font text-lg md:text-xl font-bold ${currentTheme === 'acid' ? "text-[#960018]" : "text-[#D72638]"}`}>
                Featured Artifacts
              </p>
              <h2 className={`title-font text-3xl md:text-5xl font-bold ${currentTheme === 'sunset' ? "text-[#E4DAD3]" : "text-black"} `}>
                Glimpses Into the Golden Ages <br /> Through Beloved Artifacts
              </h2>
            </div>

            <div className={` ${currentTheme === 'acid' ? "bg-[#F5F2EB]" : "bg-[#1E1B18]"} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10`}>
              {allArtifacts.slice(0, 4).map((artifact, index) => (
                <Featured_card key={index} artifact={artifact} />
              ))}
            </div>
            <div className="mt-5 w-full flex justify-center px-4 sm:px-6 md:px-10">
              <Link
                to="/all-artifacts"
                className={`btn border-2 bg-transparent ${ currentTheme === 'acid' ? "border-[#800020] text-[#800020]" : "border-[#D72638] text-[#D72638]" }  text-base sm:text-lg md:text-xl normal-font font-semibold py-2 sm:py-3 md:py-4 px-6 sm:px-8 md:px-10 rounded-xl hover:font-bold hover:border-[3px]`}
              >
                See All Artifacts
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Featured_sec;
