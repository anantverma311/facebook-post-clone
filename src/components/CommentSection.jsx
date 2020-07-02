import React, { useState } from "react";
import ProfileImage from "./ProfileImage";

function CommentSection() {
  const [color, setColor] = useState("grey");
  const [name, setName] = useState("");
  const [commentText, setCommentText] = useState("");
  return (
    <div className="commentContainer">
      <ProfileImage Url="https://www.fakepersongenerator.com/Face/female/female2017102605121943.jpg" />

      <textarea
        onChange={(event) => {
          setName(event.target.value);
        }}
        placeholder="Write a comment ..."
        value={name}
      ></textarea>
      <button
        onClick={() => {
          setCommentText(name);
        }}
        type="submit"
        onMouseOver={() => {
          setColor("#0099ff");
        }}
        onMouseOut={() => {
          setColor("grey");
        }}
        style={{ color: color }}
        className="far fa-arrow-alt-circle-right commentButton"
      ></button>
      <div className="commentDisplayArea">
        <p className="comments">
          <em>Comments....</em>
        </p>
        <p>{commentText}</p>
      </div>
    </div>
  );
}

export default CommentSection;
