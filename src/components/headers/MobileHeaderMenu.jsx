import "./styles/mobileHeaderMenu.scss";
import React from "react";
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";

const MobileHeaderMenu = () => {
  const isActive = useSelector(state => state.furniture.toggleItemClass.mobileMenuActive);
  const [MenuAccountClass1, setMenuAccountClass1] = useState('');  
  const [MenuAccountClass2, setMenuAccountClass2] = useState('');  

  const openMenuAccount1 = () => {
    if (MenuAccountClass1 === '') setMenuAccountClass1('active');
  }
  const closeMenuAccount1 = () => {
    if (MenuAccountClass1 === 'active') setMenuAccountClass1('');
  }
  const openMenuAccount2 = () => {
    if (MenuAccountClass2 === '') setMenuAccountClass2('active');
  }
  const closeMenuAccount2 = () => {
    if (MenuAccountClass2 === 'active') setMenuAccountClass2('');
  }


  return (
    <div className={`mobile-header-menu ${isActive}`}>
      <ul className="menu-category level-1">
        <li className="category-list sub" onClick={openMenuAccount1}>
          <div className="li-div">
            <span>
              Office
            </span>
            <FaAngleRight size={25} color={'grey'} className="toggleBtn"/>
          </div>
          <div className={`level-2 subcategory`}>
            <div className={`menu-back ${MenuAccountClass1}`}>
              <div>
                <FaAngleLeft size={25} color={'grey'} onClick={closeMenuAccount1} className="toggleBtn"/>
                <span>Office</span>
              </div>
              <div className="menu-wrapper">
                <ul>
                  <li>Office Chairs</li>
                  <li>Side Chairs</li>
                  <li>Stool Chairs</li>
                  <li>Desk|Sit-to-Stand|Tables</li>
                  <li>Storage</li>
                  <li>Desk Accessories</li>
                  <li>Lighting</li>
                  <li>Replacement Parts</li>
                  <li>View aLL</li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li className="category-list sub">
          <div className="li-div">
            <span>
              Living
            </span>
          </div>
        </li>
        <li className="category-list">
          <div className="li-div">
            <span>
              Dining 
            </span>
          </div> 
        </li>
        <li className="category-list">
          <div className="li-div">
            <span>
              Bedroom 
            </span>
          </div> 
        </li>
        <li className="category-list">
          <div className="li-div">
            <span>
              Outdoor 
            </span>
          </div> 
        </li>
        <li className="category-list">
          <div className="li-div">
            <span>
              Lighting 
            </span>
          </div> 
        </li>
        <li className="category-list">
          <div className="li-div">
            <span>
              Accessories 
            </span>
          </div> 
        </li>
        <li className="category-list">
          <div className="li-div">
            <span>
              Gaming 
            </span>
          </div> 
        </li>
      </ul>
      <div className="menu-bottom" onClick={openMenuAccount2}>
        <ul className="menu-category level-1">
          <li className="category-list sub">
            <div className="li-div">
              <span>Account</span>
              <FaAngleRight size={25} color={'grey'} className="toggleBtn" />
            </div>
            <div className="level-2 subcategory">
              <div className={`menu-back ${MenuAccountClass2}`} style={{color: "rgb(37,37,37)"}}>
                <div>
                  <FaAngleLeft size={25} color={'grey'} onClick={closeMenuAccount2} className="toggleBtn"/>
                  <span>My Account</span>
                </div>
                <div className="menu-wrapper">
                  <ul>
                    <li>
                      <Link to="/login" href="/account" style={{color: "rgb(37,37,37)"}}>Login / Register</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default MobileHeaderMenu