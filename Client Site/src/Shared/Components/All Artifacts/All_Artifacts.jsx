import React, { useEffect, useState } from "react";
import Artifact_Card from "./Artifact_Card";
import Swal from "sweetalert2";
import Loading from "../Loading";
import Banner_All from "./Banner_All";

const All_Artifacts = () => {
  const [allArtifacts, setAllArtifacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      document.title = "All Artifacts";
    }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetch("https://artifacts-tracker-sable.vercel.app/all-artifacts")
        .then((res) => res.json())
        .then((data) => {
          setAllArtifacts(data);
          setLoading(false);
        })
        .catch((error) => {
          Swal({
            text: error.message,
            icon: "error",
            button: {
              text: "Okay",
              closeModal: true,
            },
          });
          setLoading(false);
        });

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
          <Banner_All />
          <div className="mt-20 max-w-6xl mx-auto">
            {allArtifacts.map((artifact, index) => (
              <div className="px-4 lg:px-0">
                <Artifact_Card key={index} artifact={artifact} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default All_Artifacts;
