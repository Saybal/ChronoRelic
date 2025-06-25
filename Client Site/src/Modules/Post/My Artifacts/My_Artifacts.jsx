import React, { useEffect, useState } from "react";
import Artifacts_Table from "./Artifacts_Table";
import Banner from "./Banner";
import Loading from "../../../Shared/Components/Loading";

const My_Artifacts = () => {
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        document.title = "My Artifacts";
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
          <Artifacts_Table />
        </>
      )}
    </div>
  );
};

export default My_Artifacts;
