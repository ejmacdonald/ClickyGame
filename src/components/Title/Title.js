import React from "react";
import "./Title.css";

const Title = (props) => (
  <div>
    <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <h1 className="display-4">Clicky Game</h1>
            <p className="lead">Don't click the same dog twice!</p>
            <p className="lead">{props.message}</p>
            <p> Score: {props.score}</p>
        </div>
    </div>
  </div>
);

export default Title;
