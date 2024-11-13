import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

function Navber() {
  const link = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
    </>
  );

  const { user, signOutUser } = useContext(AuthContext);
  console.log(name);
  const hundleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("User logOutsuccessfully done");
      })
      .catch((error) => {
        console.log("ERROR", error.message);
      });
  };
  return (
    <div className="navbar bg-base-100 shadow-xl py-6">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="text-2xl font-semibold menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {link}
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl font-bold capitalize">w.w.w</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-2xl font-semibold">
          {link}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn text-xl">
          {user ? (
            <>
              <p>{user.email}</p>
              <a onClick={hundleSignOut} className="btn btn-secondary">
                Logout
              </a>
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </a>
      </div>
    </div>
  );
}

export default Navber;
