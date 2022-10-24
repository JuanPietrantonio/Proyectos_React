import React from 'react';
import Button from "./button/Button";
import CartWidget from './CartWidget/CartWidget';


function NavBar() {
  return (
    <div className='navbar'>
      <h3>Hard Training Store</h3>
      <Button>Sumplementos</Button>
      <Button> Barras </Button>
      <Button> Mancuernas </Button>
      <Button> Discos </Button>
      <CartWidget imgurl="/img/micarrito.png"></CartWidget>
    </div>
  )
}

export default NavBar