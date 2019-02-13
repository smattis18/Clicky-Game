import React from "react";
import "./style.css";

function Navbar(props) {
  return (
    <nav className="navbar shadow-lg sticky-top">
      <div className="container">
        <a className="navbar-brand">Clicky Game</a>
        <span className="navbar-text">{props.result}</span>
        <span className="navbar-text">{props.score}</span>
      </div>
    </nav>
  );
}

export default Navbar;