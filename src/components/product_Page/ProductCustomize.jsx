import React from "react"
import { useSelector } from "react-redux"
import CustomizeSelectBlock from "./CustomizeSelectBlock.jsx";


const ProductCustomize = ({ id , basePrice, editMode }) => {
    const datafromStore = useSelector(state => state.furniture.data)
    
    const generateItemProfiles = () => {
    if (datafromStore.length !== 0) {
      const { data } = datafromStore;
      return data[id] && data[id].profileCategories?.map((ele, idx) => (
        <CustomizeSelectBlock
          key={idx}
          category={ele}
          basePrice={basePrice}
          id={idx}
          editMode={editMode}
        />
      ));
    }
  };


  return (
    <div className="product-content-profile">
      <ul>
        {generateItemProfiles()}
      </ul>
    </div>
  )
}
export default ProductCustomize