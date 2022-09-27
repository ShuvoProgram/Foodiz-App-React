import React from 'react';
import logo from '../../image/food.png';
import './Header.css';

const Header = () => {
    return (
        <div className='header-container'>
           <div className='logo'>
            <img src={logo} alt="" />
            </div>
           <div className='menu'>
            <a href="/shop">Shop</a>
            <a href="/review">Review</a>
                <a href="/cart">Cart</a>
            <a href="login">Login</a>
           </div>
        </div>
    );
};

export default Header;