import React from 'react';
import classes from './Logo.module.css';
import savukalaLogo from '../../assets/Logo/logo.jpg';

const logo = (props) => (

  <div className={classes.Logo} style={{height: props.height}}>
    <img src={savukalaLogo} alt="savukala" />
  </div>

);

export default logo;
