import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import FoodCard from '../FoodCard/FoodCard';
import './Foods.css';

const Foods = () => {
    const [meals, setMeals] = useState([])
    const [search, setSearch] =  useState("")
    const [cart, setCart] = useState([])
    useEffect( () => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then(res => res.json())
        .then(data => setMeals(data?.meals))
    },[search])

    return (
        <div>
            <div className="search">
                <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder='Search Your Food'/>
                <button className='search-btn'>Search</button>
            </div>
            <div className="container">
                <div className="food">
                    {
                        meals?.map(meal => <FoodCard food={meal} key={meal.idMeal}></FoodCard>)
                    }
                </div>
                <div className="cart">
                    <Cart></Cart>
                </div>
            </div>
        </div>
    );
};

export default Foods;