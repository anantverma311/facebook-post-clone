import React, { useState } from "react";

function ActionBar() {
  const [colorChange, setColor] = useState("white");
  const [fontColor, setFontColor] = useState("#606265");
  const [like, setLike] = useState("hidden");
  return (
    <div>
    {/* reaction container section */}
      <div className="reactionContainer">
        <span style={{ visibility: like }} className="fa-stack fa-sm">
          <i className="fa fa-circle fa-stack-2x blue-icon" />
          <i className="fa fa-thumbs-up fa-stack-1x fa-inverse thumbsUp" />
        </span>
      </div>

      {/* action bar container */}
      <div className="actionBarContainer">
        <button
        onClick = {()=> {
          if(like === "hidden"){
            setLike("visible");
          }else {
            setLike("hidden");
          }
         
        }}
          style={{ backgroundColor: colorChange }}
          onMouseOver={() => {
            setColor("#0099ff");
            setFontColor("white");
          }}
          onMouseOut={() => {
            setColor("white");
            setFontColor("#606265");
          }}
          className="actionButton"
        >
          <i
            style={{ color: fontColor }}
            className="far fa-thumbs-up actionIcon"
          ></i>
          <span style={{ color: fontColor }} className="buttonText">
            like
          </span>
        </button>
      </div>
    </div>
  );
}

export default ActionBar;
