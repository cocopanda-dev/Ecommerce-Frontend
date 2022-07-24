import React, { useState} from "react";
import './styles/ProductImg.scss'
import { useSelector} from "react-redux";
import {FaInfoCircle} from "react-icons/all";


const ProductImg = ({id, onClick}) => {
    const [magnifyStatus, setMagnifyStatus] = useState(false)
    const datafromStore = useSelector(state => state?.furniture?.data)

    const mediaStr = datafromStore.length !== 0 && datafromStore?.data[id]?.media


    const [imgId, setImgId] = useState(0)
    // console.log('imgid',imgId)

    const showingImg = (images, imgId) => {
        let tempArr = [];
        let tempStr = null;
        if (images) {
            tempArr = images.split("|");
            tempStr = tempArr.map((ele, index) => {
                if (index < 5) {
                    return (
                        <li className={index === imgId ? "img-ele-small active-img" : "img-ele-small"} key={index}
                            onClick={() => {setImgId(index)}}>
                            <a className="img-ele-small-link">
                                <img
                                    src={ele.trim()}
                                    alt="img"/>
                            </a>
                        </li>
                    )
                }
            })
            return tempStr
        } else {
            return false
        }
    }

    const showingBigImg = (images, imgId) => {
        let tempArr = [];
        if (images) {
            tempArr = images.split("|");
            return (
                <a className='img-ele-link' onClick={onMagnify}>
                    <img className='img-ele-link-img'
                         src={tempArr[imgId]} alt="the big img"
                         style={magnifyStatus ? {transform: "scale(1.3)", cursor: "zoom-out"} : {
                             transform: "none",
                             cursor: "zoom-in"
                         }}
                    />
                </a>
            )
        } else {
            return false
        }
    }

    const onMagnify = () => {
        setMagnifyStatus(!magnifyStatus)
    }

    return (
        <>
            <div className='product-img-section'>
                <div className='img-inner'>
                    <div className='img-section-gallery'>
                        <div className='gallery-inner'>
                            <ul>
                                {showingImg(mediaStr, imgId)}
                            </ul>
                            <div className='img-more' onClick={onClick}>
                                +2 MORE
                            </div>
                        </div>
                    </div>

                    <div className='img-section-big'>
                        <div className='img-big-top'>
                            <ul className='image-wrap'>
                                <li className='img-ele'>
                                    {showingBigImg(mediaStr, imgId)}
                                </li>
                            </ul>
                        </div>

                        <div className='img-big-bottom'>
                            {/* Description写完后在这链接一下 */}
                            <a href="#description">
                                <span><FaInfoCircle className='fa'/></span>
                                <p> Dimensions</p>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductImg