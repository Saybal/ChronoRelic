import axios from "axios";
import React, { use, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useParams } from "react-router";
import { AuthContext } from "../../../Shared/Hooks/AuthProvider";
import AxiosBaseToken from "../../../Shared/Hooks/AxiosBaseToken";
import API_Loader from "../../../Shared/API_Loader";

const Update_Form = () => {
  const { user } = use(AuthContext);
  const { id } = useParams();
  const [artifact, setArtifact] = useState({});
  const [loading, setLoading] = useState(true);
  const instance = AxiosBaseToken();

  useEffect(() => {
      document.title = "Update Page";
    }, []);

  useEffect(() => {
    if (!user) return;
    instance
      .get(`https://artifacts-tracker-sable.vercel.app/update/${id}/${user?.email}`)
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

  const { Name, Email } = artifact;

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = new FormData(form);
    const ArtifactData = Object.fromEntries(formData.entries());
    console.log(ArtifactData);

    axios
      .put(`https://artifacts-tracker-sable.vercel.app/update/${artifact._id}`, ArtifactData)
      .then(function (response) {
        if (response.data.acknowledged) {
          Swal.fire({
            icon: "success",
            title: "Your post has been updated",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        }
      })
      .catch(function (error) {
        console.log(error.message);
        Swal.fire({
          icon: "error",
          title: error.message || "Something went wrong",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  const InputField = ({ id, Name, label, type, defaultValue, isReadOnly }) => {
    const [value, setValue] = useState(() => defaultValue || "");

    return (
      <div className="relative w-full">
        <input
          id={id}
          name={Name}
          type={type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={label}
          readOnly={isReadOnly}
          className={`pl-6 peer input w-full focus:outline-none ${
            isReadOnly ? "ring-[0.3px] ring-[#960018]" : ""
          } outline-none focus:ring-[0.3px] focus:ring-[#960018] placeholder-transparent`}
        />
        <label
          htmlFor={id}
          className={`transition-all absolute left-6 ${
            value || isReadOnly
              ? "text-[#960018] text-lg -top-3.5 z-10 bg-linear-to-t from-base-100 from-50% to-transparent to-50"
              : ""
          }  peer-focus:-top-3.5 peer-focus:text-[#960018] peer-focus:z-10 peer-focus:text-lg peer-focus:bg-[linear-gradient(to_top,_theme(colors.base.100)_70%,_transparent_30%)]  peer-placeholder-shown:text-base-400 peer-placeholder-shown:top-2 peer-placeholder-shown:z-0`}
        >
          {label}
        </label>
      </div>
    );
  };

  const TextAreaField = ({ id, Name, label, defaultValue }) => {
    const [value, setValue] = useState(() => defaultValue || "");

    return (
      <div className="relative w-full">
        <textarea
          id={id}
          name={Name}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={label}
          className="peer p-3 w-full h-32 outline-1 outline-gray-400 rounded-xl focus:outline-none focus:ring-[1px] focus:ring-[#960018] "
        />
        <label
          htmlFor={id}
          className={`transition-all absolute left-6 ${
            value
              ? "text-[#960018] text-lg -top-3.5 z-10 bg-linear-to-t from-base-100 from-50% to-transparent to-50"
              : ""
          }  peer-focus:-top-3.5 peer-focus:text-[#960018] peer-focus:z-10 peer-focus:text-lg peer-focus:bg-[linear-gradient(to_top,_theme(colors.base.100)_70%,_transparent_30%)]  peer-placeholder-shown:text-base-400 peer-placeholder-shown:top-2 peer-placeholder-shown:z-0`}
        >
          {label}
        </label>
      </div>
    );
  };

  const SelectField = ({ id, Name, label, defaultValue, type }) => {
    const [value, setValue] = useState(defaultValue);

    const options = [
      "Tools and Implements",
      "Documents and Writings",
      "Pottery and Ceramics",
      "Weapons and Armor",
      "Textiles and Clothing",
      "Jewelry and Personal Adornments",
      "Musical Instruments",
      "Coins and Currency",
      "Sculptures and Figurines",
      "Votive Offerings",
      "Funerary Artifacts",
      "Architectural Elements",
      "Organic Remains (Faunal and Floral)",
      "Lithics (Stone Tools)",
      "Bronze and Metal Artifacts",
      "Clay Tablets",
      "Steles",
      "Prehistoric Art",
      "Palettes",
      "Torcs",
    ];

    return (
      <div className="relative w-full">
        <select
          id={id}
          name={Name}
          type={type}
          defaultValue={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={label}
          className="peer pl-5 input w-full focus:outline-none ring-[0.3px] ring-[#960018] placeholder-transparent"
        >
          <option value="" disabled hidden></option>
          {options.map((option, idx) => (
            <option key={idx} value={option}>
              {option}
            </option>
          ))}
        </select>
        <label
          htmlFor={id}
          className={`transition-all absolute left-6 text-[#960018] text-lg -top-3.5 z-10 bg-linear-to-t from-base-100 from-50% to-transparent to-50"
              
          `}
        >
          {label}
        </label>
      </div>
    );
  };

  return (
    <div className="bg-base-200 p-6 min-h-screen">
      {loading ? (
        <API_Loader />
      ) : (
        <>
          <div className="max-w-6xl mx-auto p-8 bg-white/20 rounded-2xl shadow-lg border-[1px] border-[#960018]/40">
            <h2 className="text-4xl title-font font-bold mb-6 text-center">
              Preserve a Piece of History
            </h2>

            <form onSubmit={handleSubmit} className="grid grid-cols-6 gap-3">
              <div className="col-span-6 my-4">
                <InputField
                  id="Name"
                  Name="Name"
                  label="Your Name"
                  type="text"
                  defaultValue={user?.displayName || Name}
                  isReadOnly={true}
                />
              </div>

              <div className="col-span-6 md:col-span-3 mb-4">
                <InputField
                  id="Email"
                  Name="Email"
                  label="Email address"
                  type="Email"
                  defaultValue={user?.email || Email}
                  isReadOnly={true}
                />
              </div>

              <div className="col-span-6 md:col-span-3 mb-4">
                <InputField
                  id="Artifact_Name"
                  Name="Artifact-Name"
                  label="Artifact-Name"
                  type="text"
                  defaultValue={artifact["Artifact-Name"]}
                  isReadOnly={false}
                />
              </div>

              <div className="col-span-6 md:col-span-3 mb-4">
                <SelectField
                  id="Artifact_Type"
                  Name="Artifact-Type"
                  label="Artifact-Type"
                  type="text"
                  defaultValue={artifact["Artifact-Type"]}
                  isReadOnly={false}
                />
              </div>

              <div className="col-span-6 md:col-span-3 mb-4">
                <InputField
                  id="Time-Period"
                  Name="Time-Period"
                  label="Time-Period"
                  type="text"
                  defaultValue={artifact["Time-Period"]}
                  isReadOnly={false}
                />
              </div>

              <div className="col-span-6 md:col-span-3 mb-4">
                <InputField
                  id="Discovered_At"
                  Name="Discovered-At"
                  label="Discovered-At"
                  type="text"
                  defaultValue={artifact["Discovered-At"]}
                  isReadOnly={false}
                />
              </div>

              <div className="col-span-6 md:col-span-3 mb-4">
                <InputField
                  id="Discovered_By"
                  Name="Discovered-By"
                  label="Discovered-By"
                  type="text"
                  defaultValue={artifact["Discovered-By"]}
                  isReadOnly={false}
                />
              </div>

              <div className="col-span-6 md:col-span-3 mb-4">
                <InputField
                  id="Present_Location"
                  Name="Present-Location"
                  label="Present-Location"
                  type="text"
                  defaultValue={artifact["Present-Location"]}
                  isReadOnly={false}
                />
              </div>

              <div className="col-span-6 md:col-span-3 mb-4">
                <InputField
                  id="Arifact_Image"
                  Name="Arifact-Image"
                  label="Artifact-Image"
                  type="url"
                  defaultValue={artifact["Artifact-Image"]}
                  isReadOnly={false}
                />
              </div>

              <div className="col-span-6 md:col-span-3 mb-4">
                <InputField
                  id="like_count"
                  Name="Like-count"
                  label="Like-Count"
                  type="number"
                  defaultValue={artifact["Like-Count"]}
                  isReadOnly={true}
                />
              </div>

              <div className="col-span-6 md:col-span-3 mb-4">
                <InputField
                  id="Posted_Date"
                  Name="Posted-Date"
                  label="Posted-Date"
                  type="text"
                  defaultValue={artifact["Posted-Date"]}
                  isReadOnly={false}
                />
              </div>
              <div className="col-span-6 mb-4">
                <TextAreaField
                  id="Short_Description"
                  Name="Short-Description"
                  label="Short Descripton"
                  type="text"
                  defaultValue={artifact["Short-Description"]}
                />
              </div>

              <div className="col-span-6 row-span-2 mb-4">
                <TextAreaField
                  id="Description"
                  Name="Description"
                  label="Write your post"
                  type="text"
                  defaultValue={artifact["Description"]}
                />
              </div>

              <div className="w-full col-span-6 flex justify-center items-center mt-4">
                <button
                  type="submit"
                  className=" btn btn-wide text-white text-lg font-semibold w-full bg-[#960018] hover:bg-[#E23D28]"
                >
                  Submit your data
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default Update_Form;
