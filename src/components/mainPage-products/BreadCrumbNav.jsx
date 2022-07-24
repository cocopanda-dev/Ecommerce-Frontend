import './styles/Products.scss'
import React from 'react';
import {FaAngleRight} from "react-icons/fa";


export const BreadCrumbNav = () => {

  return (
          <div className="breadCrumbNav">
              <div className="breadCrumbNavEle">
                  <a href="#"> Home
                  <FaAngleRight id='i'/>
                  </a>
              </div>
              <div className="breadCrumbNavEle">
                  <a href="#"> Office
                  <FaAngleRight id='i'/>
                  </a>
              </div>
              <div className="breadCrumbNavEle">
                  <a href="#"> Office Chair </a>
              </div>
          </div>
  )
}