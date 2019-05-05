import React from 'react';

import classes from './InformationControl.module.css';

const informationControl = (props) => (
  <div className={classes.InformationControl}>
    <div className={classes.Label}>{props.label}</div>
    <button className={classes.More} onClick={props.shown}>Show</button>
    <button className={classes.Less} onClick={props.hidden} disabled={props.disabled}>Hide</button>

  </div>

);


export default informationControl;
