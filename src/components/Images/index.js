import React from "react";
import "./style.css";

function Images(props) {
  return (
    <img className="gallery shadow p-2 zoom" src={props.image} alt={props.name} />
  );
}

export default Images;