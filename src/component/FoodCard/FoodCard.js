import React from 'react';
import "./FoodCard.css";
const FoodCard = (props) => {
    const { strArea, strInstructions, strMeal, strMealThumb} = props.food;
    return (
        <div className='card' data-aos="fade-up">
            <img src={strMealThumb} alt="" />
            <div className="info">
                <h2>Title: {strMeal}</h2>
                <h4>Category: {strArea}</h4>
                <p>{strInstructions.slice(0, 200) + "..."}</p>
                <button className='add-cart'>Cart</button>
            </div>
        </div>
    );
};

export default FoodCard;