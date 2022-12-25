import React from "react";

type CardProps = {
    id: number,
    name: string,
}

const Card = (props: CardProps) => {

    const cardStyle = { 
        height: '50%', 
        width: '80%', 
    }

    return (
        <div className="card">
            <div className="card__image" style={cardStyle}></div>
            <h2>{props.name}</h2>
        </div>
    )
}

export default Card;