import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import Loading from "../Loading";
import { BiDislike, BiLike, BiSolidDislike, BiSolidLike } from "react-icons/bi";
import { useParams } from "react-router";
import { AuthContext } from "../../Hooks/AuthProvider";
import AxiosBaseToken from "../../Hooks/AxiosBaseToken";
import axios from "axios";
import API_Loader from "../../API_Loader";

export const Details_Content = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  const [artifact, setArtifact] = useState([]);
  const [loading, setLoading] = useState(true);
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
  const instance = AxiosBaseToken();

  useEffect(() => {
    if (!user) return;

    instance
      .get(`https://artifacts-tracker-sable.vercel.app/all-artifacts/${id}/${user?.email}`)
      .then((res) => {
        setArtifact(res.data);
        setLoading(false);
      })
      .catch((error) => {
        Swal.fire({
          text: error.message,
          icon: "error",
          confirmButtonColor: "#800020",
          confirmButtonText: "Okay",
        });
        setLoading(false);
      });
  }, [user]);

  const handleLike = () => {
    if (user?.email === artifact.Email) {
      Swal.fire({
        text: "You cannot like your own artifact.",
        icon: "warning",
        confirmButtonColor: "#800020",
        confirmButtonText: "Okay",
      });
      return;
    }

    if (like) {
      Swal.fire({
        text: "You cannot give like for multiple times on a same post.",
        icon: "warning",
        confirmButtonColor: "#800020",
        confirmButtonText: "Okay",
      });
      return;
    } else {
      artifact["Liked-By"].push(user.email);
      artifact["Like-Count"] += 1;
    }
    setLike(true);
    setDislike(false);

    axios
      .patch(`https://artifacts-tracker-sable.vercel.app/all-artifacts/${artifact._id}`, {
        "Liked-By": artifact["Liked-By"],
        "Like-Count": artifact["Like-Count"],
      })
      .then((res) => console.log(res.data));
  };

  const handledisLike = () => {
    if (user?.email === artifact.Email) {
      Swal.fire({
        text: "You cannot dislike your own artifact.",
        icon: "warning",
        confirmButtonColor: "#800020",
        confirmButtonText: "Okay",
      });
      return;
    }

    if (dislike) {
      Swal.fire({
        text: "You cannot give dislike for multiple times on a same post.",
        icon: "warning",
        confirmButtonColor: "#800020",
        confirmButtonText: "Okay",
      });
      return;
    } else {
      artifact["Liked-By"] = artifact["Liked-By"].filter(
        (email) => email !== user.email
      );
      artifact["Like-Count"] -= 1;
    }
    setLike(false);
    setDislike(true);

    axios
      .patch(`https://artifacts-tracker-sable.vercel.app/all-artifacts/${artifact._id}`, {
        "Liked-By": artifact["Liked-By"],
        "Like-Count": artifact["Like-Count"],
      })
      .then((res) => console.log(res.data));
  };

  return (
    <div className=" max-w-auto p-5 md:p-4 md:max-w-6xl mx-auto flex flex-col md:flex-row gap-6 lg:gap-9 mt-28">
      {loading ? (
        <API_Loader />
      ) : (
        <>
          <div className="flex-3/4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <h2 className="text-[#960018] mb-6 font-bold text-3xl md:text-4xl lg:text-[3rem] title-font">
                {artifact["Artifact-Name"]}
              </h2>
              <div>
                <div className="flex justify-between items-center text-2xl text-[#960018]">
                  <BiLike
                    className={`${like ? "hidden" : "block"}`}
                    onClick={handleLike}
                  />
                  <BiSolidLike
                    className={`${!like ? "hidden" : "block"}`}
                    onClick={handleLike}
                  />

                  <BiDislike
                    className={`${dislike ? "hidden" : "block"}`}
                    onClick={handledisLike}
                  />
                  <BiSolidDislike
                    className={`${!dislike ? "hidden" : "block"}`}
                    onClick={handledisLike}
                  />
                </div>
                <div className="text-lg normal-font font-semibold">
                  {artifact["Like-Count"]} Likes
                </div>
              </div>
            </div>

            <div>
              <p className="text-base md:text-lg mt-4 md:mt-0 normal-font text-justify">
                {artifact.Description}
              </p>
            </div>
          </div>

          <div className="p-5 bg-[#F5F2EB] rounded-lg flex-1/4 flex-col">
            <div className="flex-1 w-full">
              <img src={artifact["Artifact-Image"]} alt="" />
            </div>

            <div className="flex-1 pt-3">
              <p className="text-base normal-font">
                <span className="font-bold text-[#960018]">Posted By: </span>
                {artifact.Name}
              </p>
              <p className="text-base normal-font">
                <span className="font-bold text-[#960018]">Created At: </span>
                {artifact["Time-Period"]}
              </p>
              <p className="text-base normal-font">
                <span className="font-bold text-[#960018]">Discoverd At: </span>
                {artifact["Discovered-At"]}
              </p>
              <p className="text-base normal-font">
                <span className="font-bold text-[#960018]">Discoverd By: </span>
                {artifact["Discovered-By"]}
              </p>
              <p className="text-base normal-font">
                <span className="font-bold text-[#960018]">
                  Present Location:{" "}
                </span>
                {artifact["Present-Location"]}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

// export default Details_Content;
