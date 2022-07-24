import React, {useState} from "react";
import './styles/Products.scss';
import {SearchTop} from "./SearchTop";
import {ProductTile_1} from "./productTiles/ProductTile_1";


export const ProductListWrapper = () => {
    const [view, setView] = useState('gridTile');
    const updateClassName = (className) => {
        setView(className)
    }

    return (
        <div className="productListWrapper">
            <SearchTop updateClassName={updateClassName}/>
            <div className="searchProductContent">
                <ul id='searchProductItems'>
                    <ProductTile_1 view={view}/>
                </ul>
            </div>
        </div>

    )
}