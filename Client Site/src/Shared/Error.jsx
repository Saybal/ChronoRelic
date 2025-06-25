import React, { useEffect } from "react";
import { Link } from "react-router";
import Lottie from "lottie-react";
import error from "../../public/Error.json"
// import error from "/error.json";

const Error = () => {

    // const [animationData, setAnimationData] = useState(null);
  useEffect(() => {
    document.title = "Error 404";
  }, []);
    
//      useEffect(() => {
//     // Fetch the Lottie JSON file from the public folder
//     fetch('/error.json')
//       .then(response => response.json())
//       .then(data => setAnimationData(data))
//       .catch(error => console.error('Error loading Lottie animation:', error));
//   }, []);
  return (
    <div className="w-screen h-screen bg-[#F5F2EB] flex flex-col justify-center items-center">
      <Lottie className="w-[30rem]"  animationData={error}/>
      <button className="mt-[5rem] btn bg-[#960018] text-white font-bold">
        {" "}
        <Link to="/">Go Back Home</Link>{" "}
      </button>
    </div>
  );
};

export default Error;