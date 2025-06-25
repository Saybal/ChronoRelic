import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Shared/Hooks/AuthProvider";
import Swal from "sweetalert2";
import Banner from "./Banner";
import Artifact_Card from "../../../Shared/Components/All Artifacts/Artifact_Card";
import AxiosBaseToken from "../../../Shared/Hooks/AxiosBaseToken";
import Loading from "../../../Shared/Components/Loading";
import No_Like from "./No_Like";

const Like = () => {
  const { user } = useContext(AuthContext);

  const [likedArtifacts, setLikedArtifacts] = useState([]);
  const [loading, setLoading] = useState(true);

  const instance = AxiosBaseToken();

  useEffect(() => {
      document.title = "Favourite Artifacts";
    }, []);

  useEffect(() => {
    if (!user) return;

    instance
      .get(`/liked/${user?.email}`)
      .then((res) => {
        setLikedArtifacts(res.data);
      })
      .catch((error) => {
        Swal.fire({
          text: error.message,
          icon: "error",
          confirmButtonColor: "#800020",
          confirmButtonText: "Okay",
        });
      });
  }, [user]);

   useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
   }, []);
  
  return (
  <div className="mx-auto bg-[#ECE7E1] pb-32">
    {loading ? (
      <Loading />
    ) : (
      <>
        <Banner />
        {likedArtifacts.length === 0 ? (
          <No_Like />
        ) : (
          <div className="mt-20 max-w-6xl mx-auto">
            {likedArtifacts.map((artifact, index) => (
              <div key={index} className="px-4 lg:px-0">
                <Artifact_Card artifact={artifact} />
              </div>
            ))}
          </div>
        )}
      </>
    )}
  </div>
);

};

export default Like;
