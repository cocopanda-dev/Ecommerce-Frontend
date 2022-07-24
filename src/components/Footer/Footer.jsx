import React from "react";
import './Footer.scss'

import { FaCamera, FaFacebookSquare, FaGooglePlusG, FaTwitter} from "react-icons/all";
import { ColumnWrapper } from "./Column-wrapper.jsx";


const Footer = () => {

    return (
        <div>
            <footer className='footer'>
                <div className='footer-inner'>
                    <div className='footer-wrapper'>
                        <div className='footer-logo'>
                            <a href="#">
                                <img src="/img/logo-footer-1.svg" alt=""/>
                            </a>
                        </div>

                        <ColumnWrapper/>

                        <div className='footer-bottom'>
                            <div className='block-left'>
                                <p>Join our mailing list</p>
                                <div className='block-left-inputButton'>
                                    <input type="text" placeholder='Enter your email'/>
                                    <button>Sign Up</button>
                                </div>
                            </div>
                            <div className='block-right'>
                                <p>Follow Us</p>
                                <a href="#"><FaFacebookSquare/></a>
                                <a href="#"><FaTwitter/></a>
                                <a href="#"><FaGooglePlusG/></a>
                                <a href="#r"><FaCamera/></a>
                            </div>
                        </div>

                        <div className='copyright'>
                            <div className='copyright-left'>
                                <img className='copyright-left-flag' src="/img/footer-Canada.png" alt=""/>
                                <a href="#">Canada</a>
                            </div>
                            <div className='copyright-center'>2020 Herman Miller, Inc.</div>

                        </div>
                    </div>
                </div>
                <div className='common-brand'>A Herman Miller Group Company</div>
            </footer>
        </div>
    )
}

export default Footer