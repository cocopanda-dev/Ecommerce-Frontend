import React from "react";
import {FaAngleRight} from "react-icons/fa";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

export const Breadcrumb = ({id}) => {
    const datafromStore = useSelector(state => state?.furniture?.data)

    const name = datafromStore.length !== 0 && datafromStore?.data[id]?.name
    return (
        <div>
            <div className='breadcrumb-nav'>
                <div className="breadcrumb-nav__ele">
                    <Link to="/">
                        <span>Office</span>
                        <FaAngleRight size={11} style={{position:"relative", top:'2px'} }  />
                    </Link>
                </div>
                <div className="breadcrumb-nav__ele last">
                    <Link to="/">
                        <span>Office Chairs</span>
                        <FaAngleRight size={11} style={{position:"relative", top:'2px'}}/>
                    </Link>
                </div>
                <div className="breadcrumb-nav__ele last">
                    <a href="#">{name}</a>
                </div>
            </div>
        </div>
    )

}