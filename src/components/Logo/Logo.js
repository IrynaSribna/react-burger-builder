import React from 'react';

//we need to import the image to let webpack know that we use this image
//we cannot use the path to image in the src property or img element as aftwe compilation it will not be available
import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.module.css';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={burgerLogo} alt="MyBurger"/>
    </div>    
);

export default logo;