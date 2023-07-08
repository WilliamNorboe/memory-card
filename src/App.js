import './App.css';
import React, { useState } from "react";
import Cards from './components/cards';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        Memory Game
      </header>
      <Cards/>
    </div>
  );
}

export default App;
