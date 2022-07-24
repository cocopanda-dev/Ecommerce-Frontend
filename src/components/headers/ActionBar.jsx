import React, { useEffect, useState } from "react";
import './styles/ActionBar.scss';
import { FaUser, FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import CartHoverWrapper from "./CartHoverWrapper.jsx";
import { useSelector } from "react-redux";

const ActionBar = () => {
    const { loginUser } = useSelector(state => state.furniture);
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    }
    const handleMouseOut = () => {
        setIsHovering(false);
    }

    const handleLogout = () => {
        localStorage.removeItem('TOKEN');
        window.location.reload(); 
    }

  return (
    <div className="action-bar">
        <div className="action-wrapper">
            <div className="action-wrapper-inner">
                <ul className="action-left site-list">
                    <li className="active">
                        <Link to="/home">Store</Link>
                    </li>
                    <li className="">
                        <Link to="#">Contact</Link>
                    </li>
                </ul>
                <ul className="action-center">
                    <li className="center__contact">
                        <div className="center__contact__text">
                            <span className="text-span1">
                                <Link to="#">Customer Service</Link>
                            </span>
                            <span className="text-span2">
                                <Link to="#">888 798 0202</Link>
                            </span>
                        </div>
                    </li>
                </ul>
                <ul className="action-right">
                    <li className="right__account">
                        <Link to={localStorage.getItem('TOKEN') ? '/myAccount' : '/login'}>
                            <span className="action-right-login">My Account</span>
                            <FaUser />
                        </Link>

                        {/* hidden!! need to take care of */}
                        <div className="right__account-userpanel">
                            {!loginUser && <Link to="/login"><span>Login</span></Link>}
                            {loginUser ? <a onClick={handleLogout}><span>Logout</span></a> : <Link to="/login"><span>Register</span></Link>}
                        </div>
                    </li>
                    <li className="right__cart" >
                        <Link to="/cart" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >
                            <span className="action-right-cart">Cart</span>
                            <FaShoppingCart />
                        </Link>
                        {isHovering && <CartHoverWrapper />}
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
export default ActionBar