import React from 'react';
import "./FoodCard.css";
const FoodCard = ({food, addToCart}) => {
    const { strArea, strInstructions, strMeal, strMealThumb} = food;
    return (
        <div className='card' data-aos="fade-up">
            <img src={strMealThumb} alt="" />
            <div className="info">
                <h2>Title: {strMeal}</h2>
                <h4>Category: {strArea}</h4>
                <p>{strInstructions.slice(0, 200) + "..."}</p>
                <button className='add-cart' onClick={() => addToCart(food)}>Cart</button>
            </div>
        </div>
    );
};

export default FoodCard;