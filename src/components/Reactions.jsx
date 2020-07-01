import React from "react";

function Reactions() {
  return (
    <div className="reactionContainer">
     <span className="fa-stack fa-sm">
          <i className="fa fa-circle fa-stack-2x blue-icon" />
          <i className="fa fa-thumbs-up fa-stack-1x fa-inverse thumbsUp" />
        </span>
    </div>
  );
}

export default Reactions;
