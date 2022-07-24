import "./styles/LoginPage.scss";
import React, { useState } from "react";
import { FaAngleRight } from 'react-icons/fa'
import { useLoginMutation } from "../../features/furnitureApiSlice.js";
import { useNavigate } from "react-router-dom";
import { IoWarningOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { LOGIN_USER } from "../../features/furnitureSlice.js";


const LoginPage = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginErrorDisplay, setLoginErrorDisplay] = useState('none');
    const [login] = useLoginMutation();
    const navigate = useNavigate();
    

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await login({"email": `${email}`, "password": `${password}`});
            const { data } = response?.data;
            dispatch(LOGIN_USER(`${email}`));
            localStorage.setItem('TOKEN', data?.token);
            if (localStorage.getItem('cartArr')){
                navigate('/cart', { replace: true })
            } else {
                navigate(`/myAccount`, { replace: true }); 
            }
        } catch(e) {
            setLoginErrorDisplay('block');
        } 

        setEmail('');
        setPassword('');
    }

  return (
    <>
        <div className="breadcrumb-nav">
            <div className="breadcrumb-nav__ele">
                <a href="/home">
                    <span>Office</span>
                    <FaAngleRight size={11} style={{position:"relative", top:'2px'}} />
                </a>
            </div>
            <div className="breadcrumb-nav__ele last">
                <a href="/login">Sign In</a>
            </div>
        </div>

        <div className="log-container">
            <div className="log-wrapper">
                <h1>Sign In or Register</h1>
                <div className="log-link">
                    <a>Track Your Order</a>
                </div>

                <div className="col-container">
                    <div className="col-1">
                        <div className="log-box">
                            <legend className="legend-heading">
                                <h2>Sign In</h2>
                                <div className="log-required">
                                    * Required
                                </div>
                            </legend>

                            <form onSubmit={handleLogin}>
                                <div className="left-form">
                                    <div className="form-row">
                                        <div>
                                            <label htmlFor="email">
                                                email*
                                            </label>
                                            <div>
                                                <input type="text" name="email" value={email} onChange={e => setEmail(e.target.value)
                                                }/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div>
                                            <label htmlFor="password">
                                                password*
                                            </label>
                                            <div>
                                                <input type="text" name="password" value={password} onChange={e => setPassword(e.target.value)
                                                }/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="loginError" style={{display:`${loginErrorDisplay}`}}>
                                        <IoWarningOutline color="red" size={36} />
                                        <div className="loginError-msg">
                                            <h2>There was a problem</h2>
                                            <span>Either email or password is wrong!</span>
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <button className="loginPageBtn" type="submit" disabled="">
                                            Sign In
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                
                    <div className="col-2"> 
                        <div className="log-box">
                            <legend>    
                                <h2>Register</h2>
                                <div className="log-required">
                                    * Required
                                </div>
                            </legend>
                            
                            <form>
                                <div>
                                    <div className="form-row">
                                        <div>
                                            <label htmlFor="first name">
                                                first name*
                                            </label>
                                            <div>
                                                <input type="text" name="firstname" />
                                            </div>
                                        </div>
                                    </div>
                                
                                    <div className="form-row">
                                        <div>
                                            <label htmlFor="last name">
                                                last name*
                                            </label>
                                            <div>
                                                <input type="text" name="lastname" />
                                            </div>
                                        </div>
                                    </div>
                                
                                    <div className="form-row">
                                        <div>
                                            <label htmlFor="email">
                                                email*
                                            </label>
                                            <div>
                                                <input type="text" name="email" />
                                            </div>
                                        </div>
                                    </div>
                                
                                    <div className="form-row">
                                        <div>
                                            <label htmlFor="password">
                                                password*
                                            </label>
                                            <div>
                                                <input type="text" name="password" />
                                            </div>
                                        </div>
                                    </div>
                            
                                    <div className="form-row">
                                        <div>
                                            <label htmlFor="confirm password">
                                                confirm password*
                                            </label>
                                            <div>
                                                <input type="text" name="comfirmpassword" />
                                            </div>
                                        </div>
                                    </div>
                            
                                    <div className="form-row">
                                        <button className="loginPageBtn" type="submit" disabled="">
                                            Register
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default LoginPage