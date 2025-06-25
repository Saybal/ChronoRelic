import React, { use, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";
import { updateProfile } from "firebase/auth";
import swal from "sweetalert";
import Lottie from "lottie-react";
import regis from "../../../public/Register.json";
import { AuthContext } from "../../Shared/Hooks/AuthProvider";

const Register = () => {
  const { createUser, setUser, SignInGoogle, SignInFacebook } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathName || "/";

  const handleCreateAccount = (e) => {
    e.preventDefault();
    const Name = e.target.Name.value;
    const photo = e.target.photo.value;
    const Email = e.target.Email.value;
    const password = e.target.Password.value;
    

    createUser(Email, password)
      .then((result) => {
        const user = result.user;
        updateProfile(user, {
          displayName: Name,
          photoURL: photo,
        }).then(() => {
          setUser({ ...user, displayName: Name, photoURL: photo });
          navigate(from, { replace: true });
          swal({
            text: "You have successfully signed in",
            icon: "success",
            button: "Okay",
          });
        });
      })
      .catch((err) => {
        swal({ text: err.message, icon: "error", button: "Okay" });
      });
  };

  const handleGoogleSignIn = () => {
    SignInGoogle()
      .then((res) => {
        setUser(res.user);
        navigate(from, { replace: true });
        swal({
          text: "You have successfully signed in",
          icon: "success",
          button: "Okay",
        });
      })
      .catch((err) => {
        swal({ text: err.message, icon: "error", button: "Okay" });
      });
  };

  const handleFacebookSignIn = () => {
    SignInFacebook()
      .then((res) => {
        setUser(res.user);
        navigate(from, { replace: true });
        swal({
          text: "You have successfully signed in",
          icon: "success",
          button: "Okay",
        });
      })
      .catch((err) => {
        swal({ text: err.message, icon: "error", button: "Okay" });
      });
  };

  useEffect(() => {
    document.title = "Register Page";
  }, []);

  return (
    <div className="relative min-h-screen w-full flex flex-col-reverse lg:grid lg:grid-cols-5 bg-cover bg-center bg-[url('https://upload.wikimedia.org/wikipedia/commons/7/75/Planisph%C3%A6ri_c%C5%93leste.jpg')]"><div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0"></div>

      <div className="min-h-screen mt-5 lg:mt-32 px-4 py-0 lg:py-8 flex flex-col justify-center items-center lg:col-span-3 z-10">
        <div className="w-full max-w-md md:max-w-lg rounded-2xl shadow-3xl p-[3px]">
          <div className="bg-[#660000]/25 border-2 border-white/70 backdrop-blur-sm rounded-2xl p-6">
            <h2 className="text-center text-xl sm:text-2xl font-bold text-white">Register Now</h2>
            <form onSubmit={handleCreateAccount} className="space-y-4 mt-4">
              <div>
                <label className="label text-white">Your Name</label>
                <input type="text" name="Name" required placeholder="Name" className="input text-black input-bordered w-full" />
              </div>
              <div>
                <label className="label text-white">Photo URL</label>
                <input type="text" name="photo" required placeholder="Photo URL" className="input text-black input-bordered w-full" />
              </div>
              <div>
                <label className="label text-white">Email</label>
                <input type="Email" name="Email" required placeholder="Email" className="input text-black input-bordered w-full" />
              </div>
              <div>
                <label className="label text-white">Password</label>
                <input
                  type="password"
                  name="Password"
                  required
                  placeholder="Password"
                  minLength="8"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Must contain at least 8 characters including an uppercase letter, a lowercase letter, and a number"
                  className="input text-black input-bordered w-full"
                />
              </div>
              <button type="submit" className="btn bg-[#960018] border-[#960018] text-white font-semibold text-lg w-full mt-2">
                Register
              </button>
            </form>
            <p className="text-center text-sm mt-4 text-white">
              Already have an account?{' '}
              <Link to="/login" className="text-blue-300">Login</Link>
            </p>
          </div>
        </div>

        <p className="text-lg mt-6 text-center text-gray-300">----------or----------</p>

        <div className="w-full max-w-md md:max-w-lg mt-4 z-10 space-y-4">
          <button
            onClick={handleGoogleSignIn}
            className="btn bg-white text-black w-full flex items-center justify-center gap-3"
          >
            <FcGoogle className="text-2xl" /> Sign In With Google
          </button>

          <button
            onClick={handleFacebookSignIn}
            className="btn bg-blue-500 border-blue-500 text-white w-full flex items-center justify-center gap-3"
          >
            <ImFacebook2 className="text-2xl" /> Sign In With Facebook
          </button>
        </div>
      </div>

      <div className="w-full mt-10 md:mt-0 h-full flex justify-center items-center p-4 lg:col-span-2">
        <Lottie className="w-full max-w-md md:max-w-lg lg:max-w-full" animationData={regis} loop />
      </div>
    </div>
  );
};

export default Register;
