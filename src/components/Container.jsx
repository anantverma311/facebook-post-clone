import React from "react";
import Header from "./Header";
import Content from "./ContentSection";
import Reactions from "./Reactions";
import ActionBar from "./ActionBar";
import CommentSection from "./CommentSection";

function Container() {
  return (
    <div className="postContainer">
      <Header />
      <Content />
      <Reactions />
      <ActionBar />
      <CommentSection />
    </div>
  );
}

export default Container;
