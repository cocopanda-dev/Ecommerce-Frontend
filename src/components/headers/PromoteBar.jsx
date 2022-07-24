import React, { useState } from "react";
import './styles/PromoteBar.scss';
import { FaTimes } from 'react-icons/fa'
import { Link } from "react-router-dom";
import { promotions } from "../../constants.js";

const PromoteBar = () => {
  const [isActive, setIsActive] = useState(true);

  const closePromoBar = () => {
    setIsActive(false);
  }

  return (
    isActive &&
    <div className="promo-bar">
        <div className="promo-bar__text">
            <Link to="/home">
              {promotions};
            </Link>
        </div>
        <div className="promo-bar__close" onClick={closePromoBar}>
            <FaTimes />
        </div>
    </div>
  )
}
export default PromoteBar