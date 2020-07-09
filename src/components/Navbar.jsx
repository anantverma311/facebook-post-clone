/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [onActiveAdd, setAdd] = useState();
  const [onActiveFeed, setFeed] = useState();
  const [onActiveAbout, setAbout] = useState();

  const navStyle = {
    textDecoration: "none",
  };

  return (
    <div>
      <nav className="navBar">
        <a href="#home" className="brandName">
          <Link style={navStyle} to="/" className="brandName">
            <i className="fas fa-seedling"></i> SeedLnks
          </Link>
        </a>
        <ul className="navLinks">
          <Link
            onClick={() => {
              setAdd("grey");
              setAbout("");
              setFeed("");
            }}
            style={navStyle}
            to="/compose"
          >
            <li style={{ color: onActiveAdd }}>
              add <i className="fas fa-plus-circle"></i>
            </li>
          </Link>
          <Link
            onClick={() => {
              setAdd("");
              setAbout("");
              setFeed("grey");
            }}
            to="/"
            style={navStyle}
          >
            <li style={{ color: onActiveFeed }}>
              Feed <i className="fas fa-home"></i>
            </li>
          </Link>
          <Link
            onClick={() => {
              setAdd("");
              setFeed("");
              setAbout("grey");
            }}
            to="/about"
            style={navStyle}
          >
            <li style={{ color: onActiveAbout }}>
              About <i className="fas fa-user-friends"></i>
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
