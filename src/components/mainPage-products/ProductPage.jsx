import React from "react";
import './styles/Products.scss'
import {BreadCrumbNav} from "./BreadCrumbNav";
import {CategoryHeader} from "./CategoryHeader";
import {ProductListWrapper} from "./ProductListWrapper";


export const ProductPage = () => {

    return (
        <div className="productMainBody">
            <BreadCrumbNav/>
            <div className='mainContent'>
                <CategoryHeader/>
                <ProductListWrapper/>
            </div>
        </div>

    )
}