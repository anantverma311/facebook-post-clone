import React, { useState } from "react";
import ProfileImage from "./ProfileImage";

let commentList = [];

function CommentSection() {
  const [color, setColor] = useState("grey");
  const [name, setName] = useState("");
  // const [, setCommentText] = useState("");  this state is not needed while adding array on to the screen

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
          commentList.push(name);
          console.log(commentList);
          setName(""); // clear the input after submitting the text area
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
        <ul className="postedComments">
          {commentList
            .slice(0)
            .reverse()
            .map((data, id) => {
              return (
                <div>
                  <li>{data}</li>
                  <div className="divider"></div>
                </div>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default CommentSection;
