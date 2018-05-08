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
    let transformedIngredients = Object.keys(props.ingredients)
        .map(ingKey => { //ingKey is the string (ingredient name: salad, cheese etc)
            return [...Array(props.ingredients[ingKey])].map((_, index) => {
                return <BurgerIngredient key={ingKey + index} type={ingKey} /> //key={ingKey + index} to make the element unique
            });
        }).reduce((prev, curr) => { //this reduce flatts array of arrays to an array (flatMap analog)
                return prev.concat(curr)
            }, []); 
     
               
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }    
    console.log(transformedIngredients);    
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default burger;

