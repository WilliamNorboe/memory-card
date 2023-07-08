import React, { useState } from "react";

const Card = (props) =>{
    // const [count, setCount] = useState(0);

    // const incrementCount = () => {
    //   setCount(count + 1);
    // };
  
    return (
      <div>
        <div className="card">
        <img src={props.image} className="card-image" alt="bulbasaur"/>
        <p className="pokemon-name">{props.name}</p>
        </div>
        
      </div>
    );
}


export default Card