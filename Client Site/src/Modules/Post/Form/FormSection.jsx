import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import Loading from "../../../Shared/Components/Loading";
import PostForm from "./PostForm";

const FormSection = () => {
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        document.title = "Post Artifacts";
      }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Banner />
          <PostForm/>
        </>
      )}
    </div>
  );
};

export default FormSection;
