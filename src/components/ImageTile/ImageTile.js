import React from "react";
import "./ImageTile.css";



const formatStyle = {
    width: "150px",
    height: "150px"
};

// style={formatStyle}

const ImageTile = (props) => (
 <div className="card">
   <div className="img-container">
    <a className="card-img-top" id={props.id} onClick={props.imageClick}>
        <img style={formatStyle} alt={props.id} src={require("../../images/" + props.src)}/>
    </a>
   </div>
 </div>
);

export default ImageTile;