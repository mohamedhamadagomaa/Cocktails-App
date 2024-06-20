import React from "react";
import { NavLink } from "react-router-dom";
import Wraper from "../assets/wrappers/Navbar";
const Navbar = () => {
  return (
    <Wraper>
      <div className="nav-center">
        <span className="logo">MixMaster</span>
        <div className="nav-links">
          <NavLink to={"/"} className="nav-link">
            Home
          </NavLink>
          <NavLink to={"/about"} className="nav-link">
            About
          </NavLink>
          <NavLink to={"/newsletter"} className="nav-link">
            Newsletter
          </NavLink>
        </div>
      </div>
    </Wraper>
  );
};

export default Navbar;
