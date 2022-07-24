import React, { useState } from "react";
import './styles/CartPage.scss'
import {FaAngleRight} from "react-icons/fa";
import CartEmpty from "./CartEmpty.jsx";
import ItemInCart from "./ItemInCart.jsx";
import { useEffect } from "react";
import { cartHeader } from "../../constants.js";
import AlertDialog from "./AlertDialog.jsx";

const CartPage = () => {
    const cartList = [];
    if (localStorage.getItem('cartArr')) {
        cartList.push(...JSON.parse(localStorage.getItem('cartArr')));
    }
    const [cartItemsQty, setCartItemsQty] = useState(cartList.length);
    
    const displayCartItems = () => 
        cartList.map((ele, index) => {
            return <ItemInCart row={index} key={index} name={ele.chairObj.name} info={ele.selectInfo} price={ele.totalPrice} qty={ele.qty} setCartItemsQty={setCartItemsQty} mediaSrc={ele.media} />
        }) 

    useEffect(() => {
        setCartItemsQty(cartList.length);
    }, [cartItemsQty])

    
    
    return (
        <>
            <div className='breadcrumb-nav'>
                <div className="breadcrumb-nav__ele">
                    <a href="/home">
                        <span>Office</span>
                        <FaAngleRight size={11} style={{position:"relative", top:'2px'}} />
                    </a>
                </div>
                <div className="breadcrumb-nav__ele last">
                    <a href="/cart">Cart</a>
                </div>
            </div>
            <div className='cart-main'>
                <div className='cart-container1'>
                    <div className='cart-header'>
                        <h1>My Cart</h1>
                        <div className='header-content'>
                            <p className='sub-1'>For orders, questions or concerns:</p>
                            <p className='sub-2'>
                                Please call
                                <span className='sub-3'> 888 798 0202</span>
                            </p>
                        </div>
                    </div>

                {cartItemsQty > 0 ?
                    <>
                        <table className="cart-table">
                            <thead>
                                <tr>
                                    <th className="cart-table-header">{cartHeader[0]}</th>
                                    <th className="cart-table-header">{cartHeader[1]}</th>
                                    <th className="cart-table-header">{cartHeader[2]}</th>
                                    <th className="cart-table-header">{cartHeader[3]}</th>
                                    <th className="cart-table-header">{cartHeader[4]}</th>
                                    <th className="cart-table-header">{cartHeader[5]}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {displayCartItems()}
                            </tbody>
                        </table>
                        
                        <div className='checkoutBtn' >
                            <AlertDialog />
                        </div>
                    </>

                    : <CartEmpty />}
                                        
                </div>
            </div>
        </>
    )
}

export default CartPage