import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import Apod from "./components/APOD";
import ImgCard from "./components/ApodCard";

function App() {

  return (
    <div className="App">
      <Apod />
      
    </div>
  );
}

export default App;
