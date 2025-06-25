import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import { Details_Content } from "./Details_Content";
import Loading from "../Loading";

const Details = () => {
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        document.title = "Artifact Details";
      }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="min-h-screen bg-[#ECE7E1] pb-32">
      {loading ? (
        <Loading />
      ) : (
        <>
          <Banner />
          <Details_Content />
        </>
      )}
    </div>
  );
};

export default Details;
