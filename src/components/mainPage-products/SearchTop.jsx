import React, {useState} from "react";
import './styles/Products.scss';
import {FaAngleUp, FaChevronRight, FaSortDown} from "react-icons/all";
import { useDispatch, useSelector } from "react-redux";
import { MATERIAL_LIST_DISPLAY, PRICE_LIST_DISPLAY, SORT_DEFAULT, SORT_NAME_DOWN, SORT_NAME_UP, SORT_PRICE_DOWN, SORT_PRICE_UP, TOGGLE_PRICE_RANGE } from "../../features/furnitureSlice.js";
import BasicMenuPrice from "./BasicMenuPrice.jsx";
import BasicMenuGeneral from "./BasicMenuGeneral.jsx";
import {materialList, priceRange} from "../../constants";



export const SearchTop = ({updateClassName}) => {
    const dispatch = useDispatch();
    const [iconOpa, setIconOpa] = useState(["0.2", "1"]);
    const [mobileDisplayList, setMobileDisplayList] = useState('none');
    const [active, setActive] = useState('');
    const [active2, setActive2] = useState('');
    const { priceListDisplay, materialListDisplay } = useSelector(state => state?.furniture.toggleItemClass); 

    const toggleFunction = () => {
        active === '' && setActive('filterBarMobileActive');
        active === 'filterBarMobileActive' && setActive('');
    }
    const toggleFunction2 = () => {
        active2 === '' && setActive2('allRefinesActive');
        active2 === 'allRefinesActive' && setActive2('');
    }

    const sortOnChange = (e) => {
        switch (e.target.value){
            case "1":
                dispatch(SORT_PRICE_DOWN());
                break
            case "2":
                dispatch(SORT_PRICE_UP());
                break 
            case "3":
                dispatch(SORT_NAME_UP());
                break
            case "4":
                dispatch(SORT_NAME_DOWN());
                break
            default:
                dispatch(SORT_DEFAULT());
                break
        }
    }
    
    const dispatchPriceAction = (params) => {
        dispatch(TOGGLE_PRICE_RANGE(params));
    }


    return (
            <div className="searchTop">
                <div className="filterBar">
                    <div className="filterBarLeft">
                        <div className="leftDeskTop">
                            <div className="filterEle">
                                <BasicMenuPrice text="Price" ListInfo={priceRange} dispatchAction={dispatchPriceAction} />
                            </div>

                            <div className="filterEle">
                                <BasicMenuGeneral text="Materials" ListInfo={materialList} dispatchAction={() => {console.log("function not available!")}}/> 
                            </div>
                        </div>
                        <div className={`filterBarMobile ${active}`}>
                            <div>
                                <div className="filterMobileText"
                                    onClick={() => {
                                        mobileDisplayList === 'none' && setMobileDisplayList('block');
                                        mobileDisplayList === 'block' && setMobileDisplayList('none');
                                        toggleFunction();
                                        toggleFunction2();
                                    }}
                                >
                                    Filter By
                                </div>
                                <div className="filterMobileIcon"
                                    onClick={() => {
                                        mobileDisplayList === 'none' && setMobileDisplayList('block');
                                        mobileDisplayList === 'block' && setMobileDisplayList('none');
                                        toggleFunction();
                                        toggleFunction2();
                                    }}>
                                    <FaAngleUp/>
                                </div>
                            </div>
                            <div className= {`allRefines ${active2}`}>
                                <div className="filterEle">
                                    <h3 className="h3-price"
                                        onClick={() => {
                                            dispatch(PRICE_LIST_DISPLAY());
                                        }}
                                    >
                                        <span>Price</span>
                                        <FaChevronRight/>
                                    </h3>
                                    <ul className="mobileSelectBox" style={{display: priceListDisplay}}>
                                        <li><a>$100 or less (1)</a></li>
                                        <li><a>$500 - $1,000 (14)</a></li>
                                        <li><a>$1,000 - $2,000 (11)</a></li>
                                        <li><a>$2,000 - $3,000 (8)</a></li>
                                        <li><a>$3,000 - $5,000 (5)</a></li>
                                        <li><a>Above $5,000 (1)</a></li>
                                        <li className="selectCloseBtn">Close</li>
                                    </ul>
                                </div>

                                <div className="filterEle">
                                    <h3 onClick={() => {
                                            dispatch(MATERIAL_LIST_DISPLAY()) 
                                    }}>
                                        <span>Material</span>
                                        <FaChevronRight/>
                                    </h3>
                                    <ul className="mobileSelectBox" style={{display:materialListDisplay}}>
                                        <li><a>Fabric (8)</a></li>
                                        <li><a>Leather (9)</a></li>
                                        <li><a>Plastic (2)</a></li>
                                        <li><a>Combination (1)</a></li>
                                        <li><a>Epic (1)</a></li>
                                        <li><a>MCL Leather (1)</a></li>
                                        <li><a>Close</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="filterBarSort">
                            <label htmlFor="sort-opt">Sort By:</label>
                            <div className="selectStyle">
                                <select id="sort-opt" onChange={(e) => sortOnChange(e)}>
                                    <option>Featured Products</option>
                                    <option value="1" >Price: High to Low</option>
                                    <option value="2" >Price: Low to High</option>
                                    <option value="3" >Name: A to Z</option>
                                    <option value="4" >Name: Z to A</option>
                                    <option> Average Rating</option>
                                </select>
                                    <span className='fas fa-sort-down'>
                                        <FaSortDown/>
                                    </span>
                            </div>
                        </div>
                    </div>

                    <div className="filterBarRight">
                        <div className="filterText">
                            <span>Showing</span>
                            <span>10</span>
                            <span>of</span>
                            <span>10</span>
                            <span>items</span>
                        </div>
                        <span className="sortingIcon">
                        <span className="sortingIconLeft"
                                style={{opacity:iconOpa[0]}}
                                onClick={()=> {
                                    updateClassName('gridTile2')
                                    setIconOpa(["1", "0.2"])
                                }}>
                        </span>
                        <span className="sortingIconRight"
                                style={{opacity:iconOpa[1]}}
                                onClick={()=> {updateClassName('gridTile')
                                    setIconOpa(["0.2", "1"])
                                }}>
                        </span>
                        </span>

                    </div>

                </div>
            </div>
    )
}