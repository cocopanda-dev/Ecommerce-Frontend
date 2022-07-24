import React, { useState } from "react";
import { FaBars, FaSearch, FaShoppingCart, FaTimesCircle } from "react-icons/fa"
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { MOBILE_MENU_ACTIVE } from "../../features/furnitureSlice.js";
import "./styles/MobileNavbar.scss"

const MobileNavbar = () => {
    const dispatch = useDispatch();
    const [openSearchInput, setOpenSearchInput] = useState('');
    const [inpValue, setInpValue] = useState('');
    
    const toggleMobileMenu = () => {
        dispatch(MOBILE_MENU_ACTIVE());
    }

    const searchBarOpen = () => {
        (openSearchInput === '') ? setOpenSearchInput('active') : setOpenSearchInput('');
    }
    const deleteInput = () => {
        if (inpValue.length !== 0) setInpValue('');
    }

  return (
    <div className="mobile-header">
        <ul className="mobile-site-list">
            <li className="active">
                <Link to="/home">Store</Link>
            </li>
            <li>
                <Link to="/">Contact</Link>
            </li>
        </ul>

        <div className="mobile-navigation">
            
            <div className="mobile-wrapper-large">
                <div>
                    <FaBars className='mobileToggleBar' onClick={toggleMobileMenu}/>
                </div>

                <h2 className="mobile-logo">
                    <Link to="/home">
                        <img src="http://mfs.mark2win.com/static/media/logo.a567ab07.svg" alt="logo" />
                    </Link>
                </h2>

                <div className="mobile_btn_smallDisplay">
                    <FaSearch onClick={searchBarOpen} />
                    <Link to="/cart">
                        <FaShoppingCart color="black"/>
                    </Link>
                </div>
            </div>

            <div className={`mobile-search-display ${openSearchInput}`}>
                <input className="mobile-search__input" type="text" placeholder="Search" value={inpValue} onChange={evt => setInpValue(evt.target.value)}/>
                <span className="mobile-search__search">
                    <FaSearch />
                </span>
                <span className="mobile-search__close" onClick={deleteInput}>
                    <FaTimesCircle />
                </span>
            </div>

            
        </div>
        
        
    </div>
  )
}
export default MobileNavbar