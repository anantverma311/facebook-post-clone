import React from "react";
import ProfileImage from "./ProfileImage";

function CommentSection() {
    return <div className= "commentContainer">
        <ProfileImage Url ="https://www.fakepersongenerator.com/Face/female/female2017102605121943.jpg"/>
        <textarea placeholder= "Write a comment ..." ></textarea>
    </div>
}

export default CommentSection;