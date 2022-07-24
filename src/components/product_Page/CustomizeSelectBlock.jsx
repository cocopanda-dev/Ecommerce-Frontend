import React from "react";
import { useEffect, useState } from "react";
import { MdOutlineCheckCircleOutline, MdOutlineRadioButtonUnchecked } from "react-icons/md"
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { CART_PRICE_UPDATE_OPTIONSELECT } from "../../features/furnitureSlice.js";


const CustomizeSelectBlock = ({ category, id, editMode }) => {
    const { row } = useParams();
    const dispatch = useDispatch();
    const { profileItems } = category;
    const [optionSelected, setOptionSelected] = useState(null);

    useEffect(() => {
        if (!editMode) {
            setOptionSelected(...profileItems.filter(ele => ele.checked));
        } else {
            const localStorageArray = JSON.parse(localStorage.getItem('cartArr'));
            const selectInfo = localStorageArray[row].selectInfo;
            setOptionSelected(...profileItems.filter((_,index) => index === selectInfo[id].checked));
        }
    },[])

    useEffect(() => {
        if (optionSelected && optionSelected.name && optionSelected.price) {
            const filteredObj = Object.fromEntries(Object.entries(optionSelected).filter(([key]) => key.includes('price') || key.includes('name'))); 
            filteredObj.checked = profileItems.indexOf(optionSelected);
            dispatch(CART_PRICE_UPDATE_OPTIONSELECT(
                [id, filteredObj]
            ));
        }
    }, [optionSelected])

    const onClickselectOption = (evt) => {
        setOptionSelected(...profileItems.filter((_, idx) => idx === parseInt(evt.currentTarget.dataset.index)))
    }

    const generateOptions = () => {
        return category.profileItems.map((ele, idx) => {
            return <li key={idx} className={`select ${profileItems.indexOf(optionSelected) === idx ? 'selected' : '' }`} onClick={onClickselectOption} data-index={idx}>
                    <MdOutlineCheckCircleOutline fontSize="20px" color="green" className="checked"/>
                    <MdOutlineRadioButtonUnchecked fontSize="20px" color="rgb(141,141,141)" className="unChecked"/>
                    <span>{ele.name}</span>
                </li>
        })
    }


  return (
    <li className="profiles">
        <div className="profile-label">{category.name}</div>
        <ul className="profile-items">
            {generateOptions()}
        </ul>
    </li>
  )
}
export default CustomizeSelectBlock