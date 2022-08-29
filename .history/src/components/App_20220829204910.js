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
  

const [eyes, setEyes] = useState(2)
const [body, setBody] = useState(2)
const [layer_1, setLayer_1] = useState(2)
const [layer_2, setLayer_2] = useState(2)
const [layer_3, setLayer_3] = useState(2)
const [mouth, setMody] = useState(2)
const [glasses, setGlasses] = useState(2)
const [hair, setHair] = useState(2)
const [earrings, setEarrings] = useState(2)
const [hats, setHats] = useState(2)




const handleClick = (e) => {
  console.log(e.target.src) //change states when clicked corresponding clothing
  const imageUrl = e.target.src
  console.log(imageUrl.split('/').pop().split('.')[0]) // split the src based on "/" then remove the last element, then split that element based on "." then choose the 1st element
}



  return (
    <div className="App">
      <Header />
      <div className="total-style">
        <Avatar eyes = {eyes} body = {body} layer_1 = {layer_1} layer_2 = {layer_2} layer_3 ={layer_3} mouth = {mouth} glasses = {glasses} hair = {hair} earrings = {earrings} hats = {hats}/>
        <div>
        <PartList type = "body" total ="17" index = "1" handleClick={(e) => setBody(e.target.src.split('/').pop().split('.')[0])} />
        <PartList type = "eyes" total ="17" index = "1" handleClick={(e) => setEyes(e.target.src.split('/').pop().split('.')[0])}/>
        <PartList type = "hair" total ="73" index = "1" handleClick={(e) => setHair(e.target.src.split('/').pop().split('.')[0])}/>
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