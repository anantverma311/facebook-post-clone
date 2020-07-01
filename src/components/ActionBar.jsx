import React from "react";
import Button from "./ActionBarButton";

function ActionBar() {
  return (
    <div>
      <div className="actionBarContainer">
        <Button name="like" iconName="far fa-thumbs-up actionIcon" />
        <Button name="comment" iconName="far fa-comment-alt actionIcon" />
        <Button name="share" iconName="fas fa-share-alt actionIcon" />
      </div>
    </div>
  );
}

export default ActionBar;
