import React, {useState} from "react";
import './styles/ProductImg.scss'
import { useSelector} from "react-redux";
import {FaAngleLeft, FaAngleRight, FaTimes} from "react-icons/fa";


const MaskImg = ({id , status, onClose}) => {

    const datafromStore = useSelector(state => state?.furniture?.data)

    const mediaStr = datafromStore.length !== 0 && datafromStore?.data[id]?.media
    // id 为 home page 中传过来的椅子类型

    // imgId 为本图中的第几个图片
    const [imgId, setImgId] = useState(0)

    const showingImg = (mediaStr, imgId) => {
        if (mediaStr) {
            const tempStr = mediaStr.split("|").map((ele, index) => {
                return (
                    <div className={index === imgId ? "alt-img selected" : "alt-img"} key={index} onClick={() => {setImgId(index)} }>
                        <img src={ele.trim()} alt="img" />
                    </div>
                )
            })
            return tempStr
        } else {
            return false
        }
    }

    const showingZoom = (mediaStr, imgId) => {
        let tempArr = [];
        if (mediaStr) {
            tempArr = mediaStr.split("|");
            return (
                <div className="big-img">
                    <img src={tempArr[imgId]} alt="img"/>
                </div>
            )
        } else {
            return false
        }
    }

    const onClickRight = () => {
        if (imgId > 0 ) {
            const newId = imgId - 1
            setImgId(newId)
            console.log('new',newId)
        }
    }

    const onClickLeft = () => {
        if (mediaStr) {
           let tempArr = mediaStr.split("|");
            if (imgId < tempArr.length-1) {
                const newId = imgId + 1
                setImgId(newId)
                console.log('new',newId)
            }
        }
    }

    return (
        status ?
            <div className="img-mask">
                <div className="img-content">
                    <div className="img-list-wrapper">
                        <div className="img-list">
                            {showingImg(mediaStr, imgId)}
                        </div>
                    </div>

                    <div className="img-zoom">
                        <div className="arrow">
                            <span className="fas fa-angle-left" onClick={onClickRight}><FaAngleLeft/></span>
                        </div>
                        {showingZoom(mediaStr, imgId)}
                        <div className="arrow">
                            <span className="fas fa-angle-right" onClick={onClickLeft}><FaAngleRight/></span>
                        </div>
                    </div>

                    <div onClick={onClose} className="close-icon">
                        <span className="fas fa-times"><FaTimes/></span>
                    </div>
                </div>
            </div>
            : ""
    );

}

export default MaskImg