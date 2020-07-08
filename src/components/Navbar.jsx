/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const navStyle = {
    textDecoration: "none",
  };

  return (
    <div>
      <nav className="navBar">
        <a href="#home" className="brandName">
          <i className="fas fa-seedling"></i> SeedLnks
        </a>
        <ul className="navLinks">
          <Link style={navStyle} to="/compose">
            <li>
              add <i className="fas fa-plus-circle"></i>
            </li>
          </Link>
          <Link to="/" style={navStyle} >
            <li>Feed <i className="fas fa-home"></i></li>
          </Link>
          <li>About <i className="fas fa-user-friends"></i></li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
