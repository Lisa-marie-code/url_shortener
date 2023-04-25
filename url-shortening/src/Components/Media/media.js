import React from "react";
import "./media.css";

export function Media(props) {
  return (
    <div id="media-icon" >
      <img className="footer-img" src={props.img} alt="icon-media"></img>
    </div>
  );
}

export default Media;
