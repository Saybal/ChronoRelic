import axios from "axios";
import React, { use, useState } from "react";
import { BiLike } from "react-icons/bi";
import { AuthContext } from "../../Hooks/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router";

const Artifact_Card = ({ artifact }) => {

  const { user } = use(AuthContext);

  const [like, setLike] = useState((artifact["Liked-By"] || []).includes(user?.email));

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
      artifact["Liked-By"] = artifact["Liked-By"].filter(
        (email) => email !== user.email
      );
      artifact["Like-Count"] -= 1;
    } else {
      artifact["Liked-By"].push(user.email);
      artifact["Like-Count"] += 1;
    }
    setLike(!like);

    axios
      .patch(`https://artifacts-tracker-sable.vercel.app/all-artifacts/${artifact._id}`, {
        "Liked-By": artifact["Liked-By"],
        "Like-Count": artifact["Like-Count"],
      })
      .then((res) => console.log(res.data));
  };

  return (
    <div className="flex flex-col md:flex-row bg-[#F5F2EB] shadow-xl mb-10 rounded-lg overflow-hidden items-stretch">
      {/* Image side */}
      <div
        className="w-full md:w-1/2 h-64 md:h-auto bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${artifact["Artifact-Image"]})` }}
      ></div>

      {/* Content side */}
      <div className="w-full md:w-1/2 p-5 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-between">
        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold title-font text-[#2D2D2D] mb-4 border-b border-[#827060] pb-2">
            {artifact["Artifact-Name"]}
            <br />
            <span className="text-base sm:text-lg md:text-xl">
              - {artifact["Time-Period"]}
            </span>
          </h2>

          <div className="flex items-center justify-between flex-wrap gap-2">
            <span className="font-semibold text-sm sm:text-base md:text-lg">
              <span className="font-bold text-[#960018]">Posted By:</span>{" "}
              {artifact.Name}
            </span>

            <div className="flex flex-col items-center">
              <BiLike
                className={`text-2xl cursor-pointer ${
                  like ? "text-[#960018]" : "text-gray-400"
                }`}
                onClick={handleLike}
              />
              <p className="text-[#960018] font-semibold text-sm sm:text-base">
                {artifact["Like-Count"]}
              </p>
            </div>
          </div>

          <div className="mt-4 mb-6">
            <p className="text-[#2D2D2D] text-sm sm:text-base md:text-lg text-justify">
              {artifact["Short-Description"]}
            </p>
          </div>
        </div>

        <Link to={`/artifact-details/${artifact._id}`} className="btn rounded-xl w-full text-white text-base sm:text-lg lg:text-xl bg-[#960018] py-2 mt-auto">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default Artifact_Card;
