import React, { useState, useEffect } from "react";

import Card from "./card";

import bulbasaur from "./bulbasaur.png";
import chikorita from "./chikorita.png";
import treecko from "./treecko.png";
import turtwig from "./turtwig.png";
import snivy from "./snivy.png";
import chespin from "./chespin.png";
import rowlet from "./rowlet.png";
import grookey from "./grookey.png";
import sprigatito from "./sprigatito.png";

import uniqid from "uniqid";
const Pokemon = (name, image)=>{
        let id = uniqid();
        return{
            name, image, id
        }
}

const shuffle = (ar) =>{
  let shuffled = [];
  let rand;
  while(ar.length != 0){
    rand = Math.floor(Math.random() * ar.length);
    shuffled.push(ar.splice(rand, 1)[0]);
  }
  return shuffled;
}

let clicked = [];

const Cards = () =>{

    // let tpokemon = [
    //     {name: "Bulbasaur", image: bulbasaur}

    // ];
    let tpokemon = [];

    tpokemon.push(Pokemon("Bulbasaur", bulbasaur));
    tpokemon.push(Pokemon("Chikorita", chikorita));
    tpokemon.push(Pokemon("Treeko", treecko));
    tpokemon.push(Pokemon("Turtwig", turtwig));
    tpokemon.push(Pokemon("Snivy", snivy));
    tpokemon.push(Pokemon("Chespin", chespin));
    tpokemon.push(Pokemon("Rowlet", rowlet));
    tpokemon.push(Pokemon("Grookey", grookey));
    tpokemon.push(Pokemon("Sprigatitio", sprigatito));

    const [pokemon, setPokemon] = useState(tpokemon);
    const [score, setScore] = useState(0);

    const cardClicked = (name) =>{
        let tempScore = score
        console.log(clicked);
        if(clicked.includes(name)){
          tempScore = 0;
          clicked = [];
        }
        else{
          tempScore++;
          clicked.push(name);
        }
        setScore(tempScore);
        let cpy = [...pokemon];
        cpy = shuffle(cpy);
        
        // cpy.push(Pokemon("Bulbasaur", bulbasaur));
        setPokemon(cpy);
    }

    useEffect(() => {    
      // document.addEventListener("click", changeColorOnClick);
      let max = document.getElementById("max");
      if(max.textContent < score){
        max.textContent = score;
      }
    }, [score]);

    let cards = [];
    for(let i = 0; i < pokemon.length; ++i){
        // console.log("5");
        cards.push(<Card image = {pokemon[i].image} name = {pokemon[i].name} key ={uniqid()} fun = {cardClicked}/>);
        // console.log("f");
    }

 
    // [...document.querySelectorAll('.card1')].forEach(function(item) {
    //     item.addEventListener('click', cardClicked);});

    return (
      <div>
        <div id="scores">
          <p>Score: {score}</p>
          <p>Max Score: <span id = "max">0</span></p>
        </div>
        <div className="cards">
          {cards}
        </div>
      </div>
    );
}




export default Cards