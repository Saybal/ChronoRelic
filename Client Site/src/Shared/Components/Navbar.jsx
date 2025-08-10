import React, { use, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import swal from "sweetalert";
import { AuthContext } from "../Hooks/AuthProvider";
import { useTheme } from "../Hooks/useTheme";


const Navbar = () => {
  const [theme, settheme] = useState(
    localStorage.getItem("Theme") ? localStorage.getItem("Theme") : "acid"
  );
  const { user, SignOutUser } = use(AuthContext);
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();
  const currentTheme = useTheme();

  const handleToggle = (e) => {
    if (e.target.checked) {
      settheme("sunset");
    } else {
      settheme("acid");
    }
  };

  useEffect(() => {
    localStorage.setItem("Theme", theme);
    const localtheme = localStorage.getItem("Theme");
    document.querySelector("html").setAttribute("data-theme", localtheme);
  }, [theme]);

  // !Scroll effect for Navbar
  // !This effect will add a class to the navbar when the user scrolls down
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handleLogOut = () => {
    SignOutUser()
      .then(() => {
        swal({
          text: "You have successfully logged Out",
          icon: "success",
          button: {
            text: "Okay",
            closeModal: true,
          },
        });
        navigate("/");
      })
      .catch((error) => {
        alert(error);
      });
  };
  const link = (
    <>
      <li>
        <NavLink className="font-semibold text-xl" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="font-semibold text-xl" to="/all-artifacts">
          All Artifacts
        </NavLink>
      </li>
      <li>
        <NavLink className="font-semibold text-xl" to="/post">
          Add Artifacts
        </NavLink>
      </li>
      <li className={`block lg:hidden md:hidden ${user? "hidden" : "block"}`}>
        <NavLink
          className="font-semibold text-xl"
          to="/login"
        >
          Login
        </NavLink>
      </li>
      
    </>
  );
  return (
    <div className={`${
        scrolled
          ? `sticky top-0 ${currentTheme === 'acid' ? "bg-white text-black" : "bg-gray-800 text-white"} shadow-md `
          : "absolute top-0 left-0 bg-transparent text-white"
      } navbar w-full z-50 transition-all duration-300`}>
      <div className="navbar-start">
        <div className=" dropdown z-20">
          <div tabIndex={0} role="button" className="relative lg:hidden">
            <img
            className="w-10 h-10 md:w-14 md:h-14 lg:w-20 lg:h-20 rounded-full"
            src="https://i.ibb.co/KpYLSBtS/1735788f-8b2c-44b4-ac70-764f572fe4cb-removalai-preview.png"
            alt=""
          />{" "}
          </div>
          <ul
            tabIndex={0}
            className="absolute menu menu-sm dropdown-content bg-[#660000] text-white rounded-box z-20 mt-3 w-52 p-2 shadow"
          >
            {link}
          </ul>
        </div>
        <a className="flex items-center gap-2  text-[#FFC40C] title-font text-xl md:text-3xl">
          {" "}
          <img
            className="w-10 h-8 md:w-15 md:h-15 lg:w-18 lg:h-20 hidden lg:block rounded-full"
            src="https://i.ibb.co/KpYLSBtS/1735788f-8b2c-44b4-ac70-764f572fe4cb-removalai-preview.png"
            alt=""
          />{" "}
          ChronoRelic
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{link}</ul>
      </div>
      <div className="navbar-end flex gap-2">

        {/* Theme Controller */}

        <label className="swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" onChange={handleToggle} />

          {/* moon icon */}
          <svg
            className="swap-off h-10 w-10 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>

          {/* sun icon */}
          <svg
            className="swap-on h-10 w-10 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>
        </label>

        {/* Other buttons */}
        {user ? (
          <div className="flex gap-4 items-center">
          
            <details className="relative">
              <summary
                className="btn rounded-full w-10 h-10 bg-cover bg-center bg-no-repeat border border-white/30"
                style={{
                  backgroundImage: `url(${user.photoURL})`,
                }}
                tabIndex={0}
              ></summary>

              <ul
                className="absolute right-0 sm:right-0 md:right-2 lg:right-4 mt-2 
               w-40 sm:w-44 md:w-52 lg:w-56 
               p-2 md:p-3 
               rounded-md bg-[#660000] text-white 
               shadow-lg z-50 border border-white/30"
              >
                <li className="pb-2 border-b border-white/20 text-sm md:text-base">
                  <span className="block px-2 truncate">
                    {user.displayName}
                  </span>
                </li>
                <li className="py-2 border-b border-white/20">
                  <Link
                    to="/my-artifacts/:email"
                    className="block px-2 hover:font-bold text-sm md:text-base"
                  >
                    My Artifacts
                  </Link>
                </li>
                <li className="py-2 border-b border-white/20">
                  <Link
                    to="/liked/:email"
                    className="block px-2 hover:font-bold text-sm md:text-base"
                  >
                    Liked Artifacts
                  </Link>
                </li>
                <li className="pt-2">
                  <button
                    onClick={handleLogOut}
                    className="block w-full text-left px-2 hover:font-bold text-sm md:text-base"
                  >
                    Log Out
                  </button>
                </li>
              </ul>
            </details>

            <ul
              className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
              popover="auto"
              id="popover-1"
              style={
                { positionAnchor: "--anchor-1" } 
              }
            >
              <li>
                <a>{user.displayName}</a>
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}

        {user ? (
          <NavLink
            onClick={handleLogOut}
            className="btn bg-[#960018] text-white text-lg font-semibold rounded-sm border-none hidden md:inline-flex lg:inline-flex"
          >
            Logout
          </NavLink>
        ) : (
          // hidden md:inline-flexflex lg:inline-flex
          <NavLink
            to="/login"
            className="btn bg-[#960018] text-white text-lg font-semibold border-none shadow-none rounded-sm hidden md:inline-flex lg:inline-flex"
          >
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
