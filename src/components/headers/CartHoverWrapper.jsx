

const CartHoverWrapper = () => {
    const cartList = [];
    if (localStorage.getItem('cartArr')) {
        cartList.push(...JSON.parse(localStorage.getItem('cartArr')));
    }
    

    const displayCartOnHover = () => {
        return (
            <>
                <h2>Cart Contents</h2>
                {cartList && cartList.map((ele, index) => {
                    return (
                        <div className="single_cart" key={index}>
                            <div className="mini_car_image">
                                <img src={`${ele.media}`} width="100px"></img>
                            </div>
                            <div className="mini_cart_info">
                                <div>Product: {`${ele.chairObj.name}`}</div>
                                <div>Price: {`$${parseFloat(ele.totalPrice).toFixed(2)}`}</div>
                                <div>Quantity: {`${ele.qty}`}</div>
                            </div>
                        </div>
                    )
                })}
            </>
        )
    }

  return (
    <div className="cart_timeout_wrapper">
        {Object.keys(cartList).length === 0 ? 
        <>
            <h2 style={{marginTop:"100px"}}>Empty Cart</h2>
            <div>Your cart is empty, but it does not have to be.</div>
        </>
        : displayCartOnHover()}
        
    </div>
  )
}
export default CartHoverWrapper