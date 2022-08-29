import React from 'react'

function Part({type,position,index}) {

  const accessories = ["hats","glasses","earrings"]
  const clothing = ["layer_1","layer_2","layer_3"]

  const commonStyle = {
    position: "absolute",
    width: "260px",
    zIndex: `${position}`
  }
  if ( accessories.includes(type)) {
    return (<img src={`character/accessories/${type}/${index}.png`}  alt={`${type}`}  style= {commonStyle}/>)
  } else if ( clothing.includes(type)) {
  return (<img src={`character/clothes/${type}/${index}.png`}  alt={`${type}`}  style= {commonStyle}/>)
  } else if (type ==="noses") {
    return (<img src={`character/${type}/1.png`} alt={`${type}`} style= {commonStyle}/>)
  } else {
    return (<img src={`character/${type}/${index}.png`}  alt={`${type}`} style= {commonStyle}/>)
  }
}
export default Part