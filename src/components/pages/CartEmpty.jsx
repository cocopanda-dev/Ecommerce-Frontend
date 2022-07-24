import React from "react";
import { Link } from "react-router-dom";
const CartEmpty = () => {
  return (
    <div className='cart-empty'>
        <div className='cart-empty-msg'>
            <h2>Your cart is empty, but it does not have to be.</h2>
            <Link to="/Home">Continue shopping</Link>
        </div>
    </div>
  )
}
export default CartEmpty