import React from "react";



const formatStyle = {
    width: "200px",
    height: "200px"
};


const ImageTile = (props) => (
  <div>
    <div className="card-img-top" id={props.id} onClick={props.imageClick}>
      <div className="img-container">
        <img className="card-img-top" style={formatStyle} src={require("../../images/" + props.src)} alt={props.id}></img>
      </div>
    </div>
  </div>
);

export default ImageTile;
