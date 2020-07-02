import React from "react";
import ProfileImage from "./ProfileImage";

function Header(props) {

  const time = new Date().toLocaleTimeString();
  const amPm = time <=12 ? "am" : "pm";

  return (
    <div className="header">
      <ProfileImage Url={props.url}/>
      <div>
        <p className="profileName">{props.profileName}</p>
        <p className="time">{time}{amPm}</p>
        <i className="fas fa-ellipsis-h dotsMenu"></i>
      </div>
    </div>
  );
}

export default Header;


// 