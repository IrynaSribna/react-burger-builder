import React from 'react';
import classes from './Burger.module.css';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {

    /*
    props.ingredients is an Object. We will transform it to the array of ingredients:
    ingreditents: {
        salad: 2,
        bacon 1,
        cheese: 2
    } will be transformed to [salad, salad, bacon, cheese, cheese]
    */
    const transformedIngredients = Object.keys(props.ingredients)
        .map(ingKey => { //ingKey is the string (ingredient name: salad, cheese etc)
            return [...Array(props.ingredients[ingKey])].map((_, index) => {
                return <BurgerIngredient key={ingKey + index} type={ingKey} /> //key={ingKey + index} to make the element unique
            });
        }); 

    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default burger;

