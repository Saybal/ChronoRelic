import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Loading from "../Loading";
import Featured_card from "./Featured_card";
import { Link } from "react-router";

const Featured_sec = () => {
  const [allArtifacts, setAllArtifacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://artifacts-tracker-sable.vercel.app/all-artifacts")
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
  return (
    <div className="min-w-screen bg-[#ECE7E1] pb-32 px-3 md:px-8 lg:px-0">
      <div className="max-w-7xl mx-auto">
        {loading ? (
          <Loading />
        ) : (
          <>
            <div className="mt-20 bg-bg-none">
              <p className="title-font text-lg md:text-xl font-semibold">
                Featured Artifacts
              </p>
              <h2 className="title-font text-3xl md:text-5xl font-bold">
                Glimpses Into the Golden Ages <br /> Through Beloved Artifacts
              </h2>
            </div>

            <div className=" bg-[#F5F2EB] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
              {allArtifacts.slice(0, 4).map((artifact, index) => (
                <Featured_card key={index} artifact={artifact} />
              ))}
            </div>
            <div className="mt-5 w-full flex justify-center px-4 sm:px-6 md:px-10">
              <Link
                to="/all-artifacts"
                className="btn border-2 bg-transparent border-[#800020] text-[#800020] text-base sm:text-lg md:text-xl normal-font font-semibold py-2 sm:py-3 md:py-4 px-6 sm:px-8 md:px-10 rounded-xl hover:font-bold hover:border-[3px]"
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
