import React from 'react';

import FilterIcon from '../../assets/Icons/FilterIcon'
import AddIcon from '../../assets/Icons/AddIcon'

import classes from './ToolBar.css'

const toolbar = (props) => {
  return (
    <div className={classes.ToolBar}>
      <span onClick={props.filterToggle} ><FilterIcon open={props.openFilter}/></span>
      <input type="text" placeholder="Suche..." className={classes.Input}/>
      <span onClick={props.userMaskToggle}><AddIcon /></span>
    </div>
  )
};

export default toolbar;
