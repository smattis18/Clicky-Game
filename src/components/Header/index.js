import React from "react";
import "./style.css";

function Header(props) {
  return (
    <header className="jumbotron jumbotron-fluid mb-1">
      <h1 className="hdr-center" id="hdr-title">Clicky Game!</h1>
      <h3 className="hdr-center">Click on an image to earn points, but don't click on any more than once!</h3>        
    </header>
  );
}

export default Header;