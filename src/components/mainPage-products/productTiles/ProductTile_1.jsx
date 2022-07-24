import React, { useState, useEffect } from "react";
import '../styles/Products.scss';
import { useSelector } from "react-redux";

export const ProductTile_1 = ({view}) => {
    const { data, priceRange, sortOrder } = useSelector(state => state?.furniture); 
    const [filterSortData, setFilterSortData] = useState([]);

    useEffect(() => {
        filterAndSort();
    }, [data, priceRange, sortOrder])

    const filterAndSort = () => {
        let filteredData = [];

        // Filter
        if (data.length !== 0) {
            const dataObj = data.data;
            filteredData = dataObj?.filter((ele) =>
                // When there is no price, return all
                priceRange.every(range => range === null) ? ele : priceRange?.some(range => range && ele.price >= range[0] && ele.price <= range[1]));
            // console.log('filteredData',filteredData)
        }

        // Sort
        if (sortOrder) {
            switch (sortOrder) {
                case "sortPriceDown":
                    filteredData.sort((a,b) => Number(b.price) - Number(a.price))
                    break;
                case "sortPriceUp":
                    filteredData.sort((a,b) => Number(a.price) - Number(b.price))
                    break;
                case "sortNameUp":
                    filteredData.sort((a,b) => a.slug < b.slug ? -1 : 1)
                    break;
                case "sortNameDown":
                    filteredData.sort((a,b) => b.slug < a.slug ? -1 : 1)
                    break;
                default:
                    return;
            }
        }
        // return final manipulated array
        setFilterSortData(filteredData);
    }


    const productList = () => {
            if (filterSortData)
            return filterSortData?.map((ele, index) => {
                const firstImage = ele.media.split("|")[0];
                const secondImage = ele.media.split("|")[1];
                return (
                    <li className={view} key={index}>
                        <div className="productTile">
                            <div className="productImg">
                                <a href={`/product/${ele.id - 1}`}
                                    className="imgLink">
                                    <img className='productCover'
                                            src={firstImage}
                                            alt="img"/>
                                    <img className='productBack'
                                            src={secondImage}
                                            alt="img"/>
                                </a>
                            </div>
                            <div className="productContent">
                                <div className="productName">
                                    <h3 style={{whiteSpace: 'nowrap', overflow: 'hidden'}}>{ele.name}</h3>
                                    <a href="" style={{cursor:'pointer'}}></a>
                                </div>
                                <div className="productPrice">CS$ {ele.price}</div>
                                    <div className="productSwatch">
                                        <div className="swatchDeskTop">
                                            <ul className="swatchList">
                                                <li>
                                                    <a className="swatch">
                                                        <img
                                                            src="https://s7d2.scene7.com/is/image/HermanMillerStore/s_frame_studio_white_mineral"
                                                            alt="color"/>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="swatch">
                                                        <img
                                                            src="https://s7d2.scene7.com/is/image/HermanMillerStore/s_frame_canyon"
                                                            alt="color"/>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="swatch">
                                                        <img
                                                            src="https://s7d2.scene7.com/is/image/HermanMillerStore/s_frame_carbon"
                                                            alt="color"/>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="swatch">
                                                        <img
                                                            src="https://s7d2.scene7.com/is/image/HermanMillerStore/s_frame_glacier"
                                                            alt="color"/>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="swatch">
                                                        <img
                                                            src="https://s7d2.scene7.com/is/image/HermanMillerStore/s_frame_nightfall"
                                                            alt="color"/>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </li>
                )
            })
    }

    return (
        <>
            {productList()}
        </>
    )
}