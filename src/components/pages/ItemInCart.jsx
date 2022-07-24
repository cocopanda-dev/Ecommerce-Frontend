import React from "react";
import { useState } from "react";
import BasicSelect from "./BasicSelect.jsx";


const ItemInCart = ({ row, name, info, price, qty, mediaSrc, setCartItemsQty }) => {
    const [newQty, setNewQty] = useState(qty);
    const [canRender, setCanRender] = useState(true)
    
    const changeItemQuantity = (value) => {
        if (localStorage.getItem('cartArr')) {
            let cartList = JSON.parse(localStorage.getItem('cartArr'));
            cartList[row].qty = Number(value);
            setNewQty(value);
            localStorage.setItem('cartArr', JSON.stringify(cartList));
        }
    }

    const deleteItemsfromCart = () => {
        let cartList = JSON.parse(localStorage.getItem('cartArr'));
        cartList.splice(row, 1);
        localStorage.setItem('cartArr', JSON.stringify(cartList));

        setCanRender(false);
        setCartItemsQty(prev => {
            if (prev > 0) {
                setCartItemsQty(prev--)
            }
        });
    }

    const getChairId = () => {
        let cartList = JSON.parse(localStorage.getItem('cartArr'));
        return `${cartList[row].chairObj.id - 1}/${row}`;
    }

  return (
    canRender &&
    <tr className="cart-row">
        <td className="item-image">
            <img src={mediaSrc} align="image" />
        </td>

        <td className="item-details">
            <div>
                <h3 className="name">
                    {name} 
                </h3>
                <div className="attribute">
                    {`Frame / Base: ${info[0].name}`} 
                </div>
                <div className="attribute">
                    {`Size: ${info[1].name}`} 
                </div>
                <div className="attribute">
                    {`Back Support: ${info[2].name}`} 
                </div>
                <div className="attribute">
                    {`Tilt: ${info[3].name}`} 
                </div>
                <div className="attribute">
                    {`Arms: ${info[4].name}`} 
                </div>
                <div className="attribute">
                    {`Armpad: ${info[5].name}`} 
                </div>
                <div className="attribute">
                    {`Caster: ${info[6].name}`} 
                </div>
                
                <ul className="item-actions" >
                    <li className="item-edit">
                        <a href={`/product/edit/${getChairId()}`}>
                            Edit Item
                        </a>
                    </li>
                    <li className="item-del">
                        <span onClick={(e) => deleteItemsfromCart(e)} >
                            Remove Item
                        </span>
                    </li>
                </ul>
            </div>
        </td>

        <td className="item-avail" >
            In Stock
        </td>
        
        <td className="item-price" >
            {parseFloat(price).toFixed(2)}
        </td>
        
        <td className="item-qty" >
            <BasicSelect numArray={[1,2,3,4,5,6,7,8,9,10]} onChange={changeItemQuantity} defaultValue={newQty} />
        </td>
        
        <td className="item-total" >
            {parseFloat(price * newQty).toFixed(2)} 
        </td>
    </tr>
  )
}

export default ItemInCart