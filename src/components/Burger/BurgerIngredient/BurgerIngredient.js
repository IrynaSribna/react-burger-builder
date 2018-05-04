import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import classes from './BurgerIngredient.module.css'
console.log('TTTTTT' + classes.BreadBottom);

class BurgerIngredient extends Component {
    render () {
        let ingredient = null;
        console.log('---------------');
        console.log(classes.BreadBottom);
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
                ingredient = <div className={classes.Cheese}></div>;
                break;  
            case ('salad'):
                ingredient = <div className={classes.Salad}></div>;
                break; 
            case ('bacon'):
                ingredient = <div className={classes.Bacon}></div>;
                break; 
            default:
                ingredient = null;
            
        }
        return ingredient;
    }
};

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngredient;