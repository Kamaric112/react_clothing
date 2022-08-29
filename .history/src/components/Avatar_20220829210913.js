import React from 'react'
import Part from './Part'

function Avatar({eyes,body,layer_1,layer_2,layer_3,mouths,glasses,hair,earrings,hats,eyebrows,randomize}) {
  return (
    <div>
      <div className="avatar-wrapper">
        <div className="avatar">
          <Part type="body" position="0" index = {body}/>
          <Part type="layer_1" position="1" index = {layer_1}/>
          <Part type="layer_2" position="1" index = {layer_2}/>
          <Part type="layer_3" position="1" index = {layer_3}/>
          <Part type="mouths" position="2" index = {mouths}/>
          <Part type="noses" position="2" index = "1"/>
          <Part type="eyes" position="2" index = {eyes}/>
          <Part type="glasses" position="3" index = {glasses}/>
          <Part type="hair" position="3" index = {hair}/>
          <Part type="earrings" position="3" index = {earrings}/>
          <Part type="hats" position="4" index = {hats}/>
          <Part type="eyebrows" position="2" index = {eyebrows}/>
        </div>
        <button onClick={randomize}>Randomize </button>
      </div>
    </div>
  )
}

export default Avatar