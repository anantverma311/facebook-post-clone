import React from "react";

function ProfileImage(props) {
  return (
    <img
      className="profileImg"
      src={props.Url}
      alt="profile"
    ></img>
  );
}

export default ProfileImage;