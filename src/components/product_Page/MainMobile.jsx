import React from "react";
import './styles/ProductMain.scss';
import {useSelector} from "react-redux";
import {DesignedBy, ItemNo} from "../../constants";

export const MainMobile = ({id}) => {
    const datafromStore = useSelector(state => state.furniture.data);
    const { data } = datafromStore;
    const { price, name} = data[id];
    return (
        <div className="main-mobile">
            <div className="main-mobile-content-number">
                <span>{ItemNo}</span>
            </div>
            <h1 className="main-mobile-product-name">{name}</h1>
            <p className="main-mobile-product-designer">{DesignedBy}</p>
            <div className="main-mobile-price">
                <span>${price}</span>
            </div>
        </div>
    )

}