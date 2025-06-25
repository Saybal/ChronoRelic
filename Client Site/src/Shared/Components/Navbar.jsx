import React, { use } from "react";
import { Link, NavLink, useNavigate } from "react-router";

import swal from "sweetalert";
import { AuthContext } from "../Hooks/AuthProvider";

const Navbar = () => {
  const { user, SignOutUser } = use(AuthContext);
  // const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  // const handleClose = () => {
  //   setIsOpen(false);
  // };

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
        <NavLink className="font-semibold text-white text-xl" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="font-semibold text-white text-xl" to="/all-artifacts">
          All Artifacts
        </NavLink>
      </li>
      <li>
        <NavLink className="font-semibold text-white text-xl" to="/post">
          Add Artifacts
        </NavLink>
      </li>
      <li className={`block lg:hidden md:hidden ${user? "hidden" : "block"}`}>
        <NavLink
          className="font-semibold text-white text-xl"
          to="/login"
        >
          Login
        </NavLink>
      </li>
      
    </>
  );
  return (
    <div className="navbar normal-font absolute z-20 text-white bg-transparent shadow-sm">
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
