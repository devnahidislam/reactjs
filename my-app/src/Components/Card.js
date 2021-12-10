import React from "react";
function Card(props) {
      const { htxt, dtxt } = props;
      return <div className="card">
            
            <h2 className="cardTitle">{htxt}</h2>
            <p className="cardBody">{dtxt}</p>
            <p className="cardBody">11/6/2021</p>
            </div>
}
export default Card;