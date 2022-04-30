import React, { useState } from "react";

function Item({ name, category }) {

  const [cart, updateCart] = useState('')
  const [cartStatus, addRemoveCart] = useState('add')

  function handleCart() {
    let updatedCart = ''
    if(cart === '') {
      updatedCart = 'in-cart'
    } else {
      updatedCart = ''
    }
    console.log(updatedCart)
    updateCart(updatedCart)
  }

  function addRemove() {
    let changeCartStatus = 'add';
    if(cartStatus === 'add') {
      changeCartStatus = 'remove'
    }else {
      changeCartStatus = 'add'
    }
    addRemoveCart(changeCartStatus)
  }

  return (
    <li onClick={handleCart} className={cart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      {
        cartStatus === 'add' ? <button  onClick={addRemove} className={cartStatus}>Add to Cart</button> :
        <button  onClick={addRemove} className={cartStatus}>Remove From Cart</button>
      }
    </li>
  );
}

export default Item;
