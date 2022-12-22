import React from "react";

const Card = (props) => {

    const cardStyle = { 
        height: '50%', 
        width: '80%', 
    }

    return (
        <div className="card" style={props.style}>
            <div className="card__image" style={cardStyle}></div>
            <h2>{props.title}</h2>
            <p>{props.myKey}</p>
        </div>
    )
}

export default Card;