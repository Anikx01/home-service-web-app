import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="min-h-20 bg-purple-600 text-white flex justify-between items-center">
      <div>
        <h1 className="ml-4 text-xl font-extrabold"> ServeEasy</h1>
      </div>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink className="ml-4" to="allservices">
          Service
        </NavLink>
        <NavLink className="ml-4" to="mybookings">
          My Bookings
        </NavLink>
        <NavLink className="ml-4" to="profile">
          Profile
        </NavLink>
      </div>

      <div>
        <button className="btn btn-primary mr-4">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
