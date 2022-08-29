import React from 'react'


function PartList({type,index,total,handleClick,set}) {
 
  let parts=[]
  const accessories = ["hats","glasses","earrings"]
  const clothing = ["layer_1","layer_2","layer_3"]



  for (index;index<= total; index++) {
    if ( accessories.includes(type)) {
      parts.push( <img key= {index} src={`character/accessories/${type}/${index}.png`} width="60px" onClick= {() => set(index)} alt= {type}/>)
    } else if ( clothing.includes(type)) {
      parts.push( <img key= {index} src={`character/clothes/${type}/${index}.png`} width="60px" onClick={() => set(index)} alt= {type}/>)
    } 
    else {
      parts.push( <img key= {index} src={`character/${type}/${index}.png`} width="60px" onClick={() => set(index)} alt= {type}/>)
    }
  }


  return (
      <div className="list-section">
        <div className="partlist">
          <div>{type}</div>
          <div className="list">
            {parts}
          </div>
        </div>
      </div>
  )
}

export default PartList