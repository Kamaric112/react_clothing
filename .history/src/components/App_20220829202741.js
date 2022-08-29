import React from "react";
import Header from "./Header";
import "./App.css";
import Avatar from "./Avatar";
import PartList from "./PartList";
import {useState} from "react"

const total = {
  body: 17,
  eyes: 17,
  hair: 73,
  mouths: 24,
  eyebrows: 15,
  hats: 28,
  glasses: 17,
  clothing1: 5,
  clothing2: 5,
  clothing3: 9,
};

function App() {
  

const [eyes, setEyes] = useState("eyes")
const [body, setBody] = useState(5)

const handleClick = (e) => {
  console.log(e.target.src) //change states when clicked corresponding clothing
  console.log(e.target.src.split(/[/.]/))
  
}



  return (
    <div className="App">
      <Header />
      <div className="total-style">
        <Avatar eyes = {eyes} body = {body}/>
        <div>
        <PartList type = "body" total ="17" index = "1" handleClick={(e) => setBody(e.target.src.split(/[/.]/)[6])} />
        <PartList type = "eyes" total ="17" index = "1" handleClick={handleClick}/>
        <PartList type = "hair" total ="73" index = "1" handleClick={handleClick}/>
        <PartList type = "mouths" total ="24" index = "1" handleClick={handleClick}/>
        <PartList type = "eyebrows" total ="15" index = "1" handleClick={handleClick}/>
        <PartList type = "layer_1" total ="5" index = "1" handleClick={handleClick}/>
        <PartList type = "layer_2" total ="5" index = "1" handleClick={handleClick}/>
        <PartList type = "layer_3" total ="9" index = "1" handleClick={handleClick}/>
        <PartList type = "earrings" total ="32" index = "1" handleClick={handleClick}/>
        <PartList type = "hats" total ="28" index = "1" handleClick={handleClick} />
        <PartList type = "glasses" total ="17" index = "1" handleClick={handleClick}/>

        </div>
     

      </div>
    </div>
  );
}

export default App;
