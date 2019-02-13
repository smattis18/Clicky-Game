import React from "react";
import "./style.css";

function Main(props) {
  return (
    <main className="jumbotron jumbotron-fluid">
      <div className="container">
        {props.children};
      </div>
    </main>
  );
}

export default Main;