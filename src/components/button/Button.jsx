import React, { useState } from 'react'
import "./button.css"

function Button(props) {
  let [ colorState, setColorState ] = useState( props.color );
  
  function handleClick () {  
    setColorState ({backgroundColor: "green"})
  }

  return (
    <button onClick={handleClick} style={colorState} className='btn'>{props.children}</button>
  )
}

export default Button