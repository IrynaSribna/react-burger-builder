import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuilderControls from '../../components/Burger/BuildControls/BuildControls'

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 1,
            bacon: 0,
            cheese: 2,
            meat: 2
        }
    }

    //state can be also initialized in constructor but it is less morden style
    // constructor(props) {
    //     super(props);
    //     this.state = {

    //     }
    // }

    render () {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuilderControls/>
            </Aux>
        );
    }
}

export default BurgerBuilder;