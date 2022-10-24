import React from 'react'
import "./cartwidget.css"

function CartWidget(props) {
  return (
    <div>
        <img src={props.imgurl} alt="Carrito img" className='cartwidget'/>
    </div>
  )
}

export default CartWidget