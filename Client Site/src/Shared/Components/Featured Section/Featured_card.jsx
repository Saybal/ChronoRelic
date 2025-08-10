import React, { use, useState } from "react";
import { BiLike } from "react-icons/bi";
import { AuthContext } from "../../Hooks/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";
import { Link } from "react-router";
import { useTheme } from "../../Hooks/useTheme";

const Featured_card = ({ artifact }) => {
  const { user } = use(AuthContext);
  const [like, setLike] = useState(artifact["Liked-By"].includes(user?.email));
  const currentTheme = useTheme();

  const handleLike = () => {
    if (user?.email === artifact.Email) {
      Swal({
        text: "You cannot like your own artifact.",
        icon: "warning",
        confirmButtonColor: "#800020",
        button: {
          text: "Okay",
          closeModal: true,
        },
      });

      return;
    }
    if (like) {
      // Remove like
      artifact["Liked-By"] = artifact["Liked-By"].filter(
        (email) => email !== user.email
      );
      artifact["Like-Count"] -= 1;
    } else {
      // Add like
      artifact["Liked-By"].push(user.email);
      artifact["Like-Count"] += 1;
    }
    setLike(!like);

    axios.patch(`http://localhost:3000/all-artifacts/${artifact._id}`, {

      "Liked-By": artifact["Liked-By"],
      "Like-Count": artifact["Like-Count"]
    }).then((res) => console.log(res.data))
      
  };

  return (
    <div className={`${currentTheme === 'acid' ? "bg-white" : "bg-[#F5F2EB]"} shadow-lg overflow-hidden`}>
      <div
        className="relative h-[20rem] flex-1 bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${artifact["Artifact-Image"]})`,
        }}
      >
        <div className="absolute bg-[#800020]/70 p-2 text-white text-xs font-medium">
          {artifact["Artifact-Type"]}
        </div>
        <div className="w-full h-full bg-gradient-to-t from-black/70 to-transparent absolute top-0 left-0 flex items-end">
          <div className="absolute bottom-0 left-0  text-white p-4 w-full">
            <h3 className="text-2xl title-font font-bold mb-2">
              {artifact["Artifact-Name"]}
            </h3>
            <p className="text-base normal-font">
              {artifact["Present-Location"]}
            </p>
          </div>
        </div>
      </div>
      <div className="p-4 space-y-2 text-sm">
        <div className="flex items-center justify-between">
          <span className=" font-semibold text-black">
            {" "}
            <span className="normal-font font-bold text-[#960018]">
              Created At:{" "}
            </span>{" "}
            {artifact["Time-Period"]}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className=" font-semibold text-black">
            {" "}
            <span className="normal-font font-bold text-[#960018]">
              Posted By:{" "}
            </span>{" "}
            {artifact.Name}
          </span>

          <div className="flex flex-col items-center">
            {like ? (
              <BiLike
                className="text-[#960018] text-2xl cursor-pointer"
                onClick={handleLike}
              />
            ) : (
              <BiLike
                className="text-gray-400 text-2xl cursor-pointer"
                onClick={handleLike}
              />
            )}
            <p className="text-[#960018] font-semibold">
              {artifact["Like-Count"]}
            </p>
          </div>
        </div>

        <div className="h-[10rem] normal-font text-justify text-black">
          {artifact["Short-Description"]}
        </div>
        <Link to={`/artifact-details/${artifact._id}`} className="btn mt-4 w-full bg-[#800020] text-white normal-font font-semibold py-2 rounded-xl hover:bg-[#960018]">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default Featured_card;
