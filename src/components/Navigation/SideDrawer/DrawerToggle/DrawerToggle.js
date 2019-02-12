import React from 'react';
import classes from './DrawerToggle.module.css'

const drawerToggle = (props) => (
    <div className={classes.DrawerToggle} onClick={props.clicked}>
         {/* nested dives will be styled using the calsses from module.css file*/}   
        <div></div>
        <div></div>
        <div></div>
    </div>

);

export default drawerToggle;