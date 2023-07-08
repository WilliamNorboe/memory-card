import React, { useState } from "react";
import bulbasaur from "./bulbasaur.png"
import Card from "./card";
const Cards = () =>{
    // const [count, setCount] = useState(0);

    // const incrementCount = () => {
    //   setCount(count + 1);
    // };
  
    return (
      <div>
        <Card image = {bulbasaur} name = "Bulbasaur"/>
      </div>
    );
}


export default Cards