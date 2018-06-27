import React from 'react';

import FilterIcon from '../../assets/Icons/FilterIcon'
import AddIcon from '../../assets/Icons/AddIcon'

import classes from './ToolBar.css'

const toolbar = (props) => {
    return (
        <div className={classes.ToolBar}>
            <a><FilterIcon open={props.openFilter}/></a>
            <input type="text" placeholder="Suche..." className={classes.Input}/>
            <AddIcon/>
        </div>
    )
};

export default toolbar;