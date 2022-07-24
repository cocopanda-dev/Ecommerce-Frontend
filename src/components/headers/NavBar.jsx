import './styles/NavBar.scss';
import React from "react";
import { FaSearch, FaTimesCircle } from 'react-icons/fa'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { navbarMenu } from '../../constants.js';

const NavBar = () => {
    const [toggleSearchInput, setToggleSearchInput] = useState('');
    const [inpValue, setInpValue] = useState('');

    const searchBarToggle = () => {
        toggleSearchInput === '' ? setToggleSearchInput('active') : setToggleSearchInput('');
    }
    const deleteInput = () => {
        if (inpValue.length !== 0) setInpValue('');
    }

  return (
    <div className="nav-bar">
        <div className="nav-wrapper">
            <div className="nav-wrapper__inner">

                <h2 className="nav-logo">
                    <Link to="/home">
                        <picture>
                            <source media="(min-width:1200px)" srcSet="http://mfs.mark2win.com/static/media/logo.a567ab07.svg" />
                            <source media="(max-width:1200px)" srcSet="http://mfs.mark2win.com/static/media/logo-small.a87100bc.svg" />
                            <img src="http://mfs.mark2win.com/static/media/logo.a567ab07.svg" alt="logo" />
                        </picture>
                    </Link>
                </h2>

                <nav id="navigation" role="navigation">
                    <ul className="category lev-1">
                        <li className="menu current">
                            <a href="/">
                                <span>{navbarMenu[0]}</span>
                            </a>
                        </li>
                        <li className="menu">
                            <a href="#">
                                <span>{navbarMenu[1]}</span>
                            </a>
                        </li>
                        <li className="menu">
                            <a href="#">
                                <span>{navbarMenu[2]}</span>
                            </a>
                        </li>
                        <li className="menu">
                            <a href="#">
                                <span>{navbarMenu[3]}</span>
                            </a>
                        </li>
                        <li className="menu">
                            <a href="#">
                                <span>{navbarMenu[4]}</span>
                            </a>
                        </li>
                        <li className="menu">
                            <a href="#">
                                <span>{navbarMenu[5]}</span>
                            </a>
                        </li>
                        <li className="menu">
                            <a href="#">
                                <span>{navbarMenu[6]}</span>
                            </a>
                        </li>
                        <li className="menu">
                            <a href="#">
                                <span>{navbarMenu[7]}</span>
                            </a>
                        </li>
                    </ul>
                </nav>

                <div className="header-search">
                    <input className={`header-search__input ${toggleSearchInput}`} type="text" value={inpValue} onChange={evt => setInpValue(evt.target.value)} placeholder="Search" />
                    <span className="header-search__search" onClick={searchBarToggle}>
                        <FaSearch className="header-search__button" />
                    </span>
                    <span className={`header-search__close ${toggleSearchInput}`} >
                        <FaTimesCircle className="header-search__button" onClick={deleteInput}/>
                    </span>
                </div>
            </div>
        </div>   
    </div>
  )
}

export default NavBar