import React from "react";

function ContentSection(props) {
  return (
    <div className="content">
      <p className="postContent">
       {props.postContent}
      </p>
      <img
        className="postImage"
        src={props.postImage}
        alt="postImage"
      ></img>
    </div>
  );
}

export default ContentSection;
