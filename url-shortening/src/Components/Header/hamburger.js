import React from "react";
import "../Header/header.css";

const Menu = (props) => {
  return (
    <div>
      <img className = "menu" src={props.img} alt="menu" />
    </div>
  );
};

export default Menu;