import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import classes from './BurgerIngredient.css'

class BurgerIngredient extends Comment {
    render () {
        let ingredient = null;

        switch (this.props.type) {
            case ('bread-bottom'):
                ingredient = <div className={classes.BreadBottom}></div>;
                break;
            case ('bread-top'):
                ingredient = (
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                    </div>
                ); 
                break;
            case ('meat'):
                ingredient = <div className={classes.Meat}></div>;
                break;
            case ('cheese'):
                ingredient = <div classeName={classes.Cheese}></div>;
                break;  
            case ('salad'):
                ingredient = <div classeName={classes.Salad}></div>;
                break; 
            case ('bacon'):
                ingredient = <div classeName={classes.Bacon}></div>;
                break; 
            default:
                ingredient = null;
            
            return ingredient;    
        }
    }
};

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};


export default BurgerIngrediet;

