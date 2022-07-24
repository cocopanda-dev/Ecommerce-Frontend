import './styles/ProductMain.scss';
import React, { useEffect, useState } from "react"
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaCheck } from "react-icons/fa"
import { useSelector } from "react-redux";
import ProductCart from "./ProductCart.jsx"
import ProductCustomize from "./ProductCustomize.jsx"
import {DesignedBy} from "../../constants";

const ProductProfile = ({ id, editMode }) => {
    const [basePrice, setBasePrice] = useState('')
    const [name, setName] = useState('')
    const [mediaSrc, setMediaSrc] = useState('')
    const datafromStore = useSelector(state => state.furniture.data);

    useEffect(() => {
        if (datafromStore.length !== 0) {
            const { data } = datafromStore;
            const { price, name, media } = data[id];
            setBasePrice(price);
            setName(name);
            setMediaSrc(media.split("|")[0]);
        }
    }, [datafromStore])

    const generateReviewStars = () => {
        const numsOfStars = Math.floor(Math.random() * 5);
        const mapArray = Array(5).fill(0)
        return mapArray.map((_, index) => index <= numsOfStars ? <AiFillStar key={index} color="rgb(233,40,24)" size={20} /> : <AiOutlineStar key={index} color="rgb(233,40,24)" size={20} /> )
    }

  return (
    <div className="product-profile">
        <h2 className="product-name">{name}</h2>
        <p className="product-designer">{DesignedBy}</p>

        <div className="product-content-review">
            <div className="review-rating">
                {generateReviewStars()}
            </div>
        </div>
        <div className="product-content-price">
            <div className="product-price">
                {`$${basePrice}`}
            </div>
        </div>

        <ul className="product-content-warranty">
            <li><FaCheck color="rgb(207,45,35)" />12-Year Warranty</li>
            <li><FaCheck color="rgb(207,45,35)" />Free Standard Shipping</li>
            <li><FaCheck color="rgb(207,45,35)" />30-Day No Hassle Return</li>
        </ul>
        <div className="product-content-promo">
            Free Shipping
        </div>
        <ProductCustomize basePrice={basePrice} id={id} editMode={editMode} />
        <div className="product-content-number">
            Item No.
            <span>99999 99999</span>
        </div>
        <div className="product-content-action">
            <a>Save to Wish List</a>
            <a className="action-print">Print</a>
        </div>
        <ProductCart basePrice={basePrice} name={name} mediaSrc={mediaSrc} id={id} editMode={editMode} />

    </div>
  )
}
export default ProductProfile
