import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import Update_Form from "./Update_Form";
import Loading from "../../../Shared/Components/Loading";

const Update_Section = () => {
  const [loading, setLoading] = useState(true);

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
          <Update_Form />
        </>
      )}
    </div>
  );
};

export default Update_Section;
