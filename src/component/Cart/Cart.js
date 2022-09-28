import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    return (
            <div>
                {
                cart.map(c => {
                    const { strMeal, strMealThumb } = c;
                    return (
                        <div className="selected-cart">
                            <img src={strMealThumb} alt="" />
                            <span>{strMeal}</span>
                            <button className='cart-delete'>X</button>
                       </div>
                    )
                })
                }
            </div>
    );
};

export default Cart;