import React from 'react';

import classes from './InformationControl.module.css';


const informationControl = (props) => (


  <div className={classes.InformationControl}>
    <div className={classes.Label}>{props.label}</div>
    <button className={classes.More} onClick={() => {props.shown(); props.modalshown()}}>Show</button>
  

  </div>

);


export default informationControl;
