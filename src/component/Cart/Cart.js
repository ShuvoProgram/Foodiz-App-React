import React from 'react';
import './Cart.css';

const Cart = (props) => {
    
    return (
        <div className='cart'>
            <h2>Order Now</h2>
            <h4>Selected items: </h4>
            <div className="selected-cart">
                <img src="" alt="" />
                <span>1</span>
                <span>Price: $15</span>
                <button className='cart-delete'>X</button>
            </div>
        </div>
    );
};

export default Cart;