
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.scss'
import LoginPage from './components/pages/LoginPage.jsx';
import React, { useState, useEffect } from "react";
import CartPage from "./components/pages/CartPage";
import Footer from "./components/Footer/Footer";
import Header from './components/headers/Header.jsx';
import MobileHeaderMenu from './components/headers/MobileHeaderMenu.jsx'
import { useGetFurnituresQuery } from './features/furnitureApiSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import { FETCH_ITEMS, LOGIN_USER, MOBILE_MENU_ACTIVE } from './features/furnitureSlice.js';
import {ProductPage} from "./components/mainPage-products/ProductPage";
import ProductMain from './components/product_Page/ProductMain.jsx';
import PageNotFound from './components/pages/PageNotFound.jsx';
import LoginSuccess from './components/pages/LoginSuccess.jsx';


function App() {
    const dispatch = useDispatch();
    const { data, isLoading, isSuccess, isError } = useGetFurnituresQuery();
    const { mobileMenuActive } = useSelector(state => state.furniture.toggleItemClass);
    const [maskDisplay, setMaskDisplay] = useState('none');
    const token = localStorage.getItem('TOKEN') || '';

    useEffect(() => {
        if (data) {
            dispatch(FETCH_ITEMS(data));
        }
    }, [data])

    useEffect(() => {
        if (mobileMenuActive === 'active') {
            setMaskDisplay('block');
        }
    }, [mobileMenuActive])

    useEffect(() => {
        if (token) {
            dispatch(LOGIN_USER(token));
        }
    }, [])


    const deactivateMobileMenu = () => {
        if (maskDisplay === 'block') {
            setMaskDisplay('none');
            dispatch(MOBILE_MENU_ACTIVE());
        }
    }


    if (isLoading) {
        return (
            <div className='loader-container'>
                <h2>Loading...</h2>
                <div className='loader'></div>
            </div>
        )
    }

    else if (isSuccess) {
        return (
            <div className='mainbody'>
                <MobileHeaderMenu />
                <div className={`mainbody-mainpage ${mobileMenuActive}`} onClick={deactivateMobileMenu}>
                    <div className="mask" style={{display:`${maskDisplay}`}}></div>
                    <Header/>

                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />}/>
                        <Route path="/Home" element={<ProductPage/>}/>
                        <Route path="/product/:id" element={<ProductMain/>} />
                        <Route path="/product/edit/:id/:row" element={<ProductMain editMode="true" />} />
                        <Route path="/login" element={<LoginPage/>} />
                        <Route path="/cart" element={<CartPage/>} />
                        <Route path="/myAccount" element={ <LoginSuccess />} />
                        <Route path="*" element={<PageNotFound/>}></Route>
                    </Routes>

                    <Footer/>
                </div>      
            </div>
        )
    }

    else if (isError) {
        return (
            <>
                <h1>404 Error!</h1>
                <h2 className='apiErrorMsg'>Sorry, the server is down! But we will be back soon!</h2>
            </>
        )
    }
        
}

export default App;