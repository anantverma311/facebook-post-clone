/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [onActiveAdd, setAdd] = useState();
  const [onActiveFeed, setFeed] = useState();
  const [onActiveAbout, setAbout] = useState();
  const [onActiveLogin, setLogin] = useState();

  const navStyle = {
    textDecoration: "none",
  };

  return (
    <div>
      <nav className="navBar">
        <Link style={navStyle} to="/" className="brandName">
          <i className="fas fa-seedling"></i> SeedLnks
        </Link>
        <ul className="navLinks">
          <Link
            onClick={() => {
              setAdd("");
              setFeed("");
              setAbout("");
              setLogin("grey");
            }}
            to="/signin"
            style={navStyle}
          >
            <li style={{ color: onActiveLogin }}>
              <i className="fas fa-sign-in-alt"></i>
            </li>
          </Link>
          <Link
            onClick={() => {
              setAdd("grey");
              setAbout("");
              setFeed("");
              setLogin("");
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
              setLogin("");
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
              setLogin("");
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
