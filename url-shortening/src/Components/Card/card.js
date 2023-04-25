import React from "react";
import "./card.css";



export function Card(props) {
  return (
    <div className="card">
      <div className="card-body">
        <img className="icon" src={props.img} alt="icon"></img>
        <p className="card-title">{props.title}</p>
        <p className="description">{props.description}</p>
      </div>
    </div>
  );
}

export default Card;
