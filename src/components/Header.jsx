import React from "react";
import ProfileImage from "./ProfileImage";

function Header() {
  return (
    <div className="header">
      <ProfileImage Url=" https://www.fakepersongenerator.com/Face/male/male1085793991607.jpg" />
      <div>
        <p className="profileName">Patricia E Tran</p>
        <p className="time">11:55pm</p>
        <i className="fas fa-ellipsis-h dotsMenu"></i>
      </div>
    </div>
  );
}

export default Header;
