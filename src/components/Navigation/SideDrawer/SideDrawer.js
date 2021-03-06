import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';

//for mobile menu (positioned top links)
const sideDrawer = (props) => {

    //dynamically dicide which css classes to use
    //backdrop will appear and disappear
    let attachedStyleClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedStyleClasses = [classes.SideDrawer, classes.Open];
    }
 
    return(
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}></Backdrop>
            <div className={attachedStyleClasses.join(' ')}> 
                <div className={classes.Logo}>
                    <Logo />
                </div> 
                <nav>
                    <NavigationItems />
                </nav>    
            </div> 
        </Aux>   
    );

};

export default sideDrawer;