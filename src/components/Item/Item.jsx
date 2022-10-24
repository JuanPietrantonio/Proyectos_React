import React from 'react';
import Button from '../button/Button';
import "./item.css";

function Item(props) {
  return (
    <div className='card'>
      <div className='card-img'>
        <img src={props.imgurl} alt="Product img" />
      </div>
      <div className='card-detail'>
        <h2>{props.title}</h2>
        <p>{props.details}</p>
        <h4 className='priceTag'>$ {props.price}</h4>
      </div>
      <Button> Ver mas</Button>
    </div>
  )
}

export default Item