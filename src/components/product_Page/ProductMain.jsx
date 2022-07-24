import React, {useEffect, useState} from "react"
import "./styles/ProductMain.scss";
import ProductImg from "./ProductImg.jsx"
import ProductProfile from "./ProductProfile.jsx"
import MaskImg from "./MaskImg";
import DetailSection from "./DetailSection";
import {Breadcrumb} from "./Breadcrumb";
import { useParams } from "react-router-dom";
import {MainMobile} from "./MainMobile";


const ProductMain = ( {editMode = false} ) => {
    const {id} = useParams();
    const [maskStatus, setMaskStatus] = useState(false)
    const [localNum,setLocalNum] = useState(null)

    useEffect(()=> {
        setLocalNum(id)
    },[])

    const onClick = () => {
        setMaskStatus(true)
    }

    const onClose = () => {
        setMaskStatus(false)
    }

    return (
        localNum && 
        <>
            <Breadcrumb id={localNum}/>
            <MainMobile id={localNum}/>
            <div className="main-section" >
                <ProductImg onClick={onClick} id={localNum}/>
                <ProductProfile id={localNum} editMode={editMode} />
                <MaskImg onClose={onClose} status={maskStatus} id={localNum}/>
            </div>
            <DetailSection id={localNum}/>
        </>
  )
}
export default ProductMain