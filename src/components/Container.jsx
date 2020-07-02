import React from "react";
import Header from "./Header";
import Content from "./ContentSection";
import ActionBar from "./ActionBar";
import CommentSection from "./CommentSection";

function Container(props) {
  return (
    <div className="postContainer">
      <Header url={props.URL} profileName={props.profileName} />
      <Content postContent={props.postContent} postImage={props.postImage} />
      <ActionBar />
      <CommentSection />
    </div>
  );
}

export default Container;
