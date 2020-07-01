import React, { useState } from "react";

function ActionBarButton(props) {
  const [colorChange, setColor] = useState("white");
  const [fontColor, setFontColor] = useState("#606265");

  return (
    <button
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
      <i style={{ color: fontColor }} className={props.iconName}></i>
      <span style={{ color: fontColor }} className="buttonText">
        {props.name}
      </span>
    </button>
  );
}

export default ActionBarButton;
