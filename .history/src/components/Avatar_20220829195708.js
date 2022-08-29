import React from 'react'
import Part from './Part'

function Avatar({eyes,body}) {
  return (
    <div>
      <div className="avatar-wrapper">
        <div className="avatar">
          <Part type={body} position="0" index = "2"/>
          <Part type="layer_1" position="1" index = "2"/>
          <Part type="layer_2" position="1" index = "2"/>
          <Part type="layer_3" position="1" index = "2"/>
          <Part type="mouths" position="2" index = "2"/>
          <Part type="noses" position="2" index = "2"/>
          <Part type="eyes" position="2" index = "2"/>
          <Part type="glasses" position="3" index = "2"/>
          <Part type="hair" position="3" index = "2"/>
          <Part type="earrings" position="3" index = "2"/>
          <Part type="hats" position="4" index = "2"/>

        </div>
      </div>
    </div>
  )
}

export default Avatar