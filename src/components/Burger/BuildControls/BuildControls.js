import React from 'react';
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    {label: 'Salad',  type: 'salad' },
    {label: 'Bacon',  type: 'bacon' },
    {label: 'Cheese', type: 'chees' },
    {label: 'Meat',   type: 'meat' },
];

const buildControls = (props) => (
        <div className={classes.BuildControls}>
            {controls.map(ctrl => (
                <BuildControl key={ctrl.label} ingredientLabel={ctrl.label} />
            ))}
        </div>
);

export default buildControls;