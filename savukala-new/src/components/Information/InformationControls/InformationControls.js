import React from 'react';

import classes from './InformationControls.module.css';
import InformationControl from './InformationControl/InformationControl';

const controls = [
  {label: 'Basic Info', type: 'basicinfo'},
  {label: 'Education Info', type: 'educationinfo'},
  {label: 'Work Experience', type: 'workinfo'},
  {label: 'Hobbies', type: 'hobbiesinfo'}
];

const informationControls = (props) => (

  <div className={classes.InformationControls}>
  {controls.map(optn => (
    <InformationControl
    key={optn.label}
    label={optn.label}
    shown={() => props.informationShown(optn.type)}
    hidden={() => props.informationHidden(optn.type)}
    disabled={props.disabled[optn.type]}
    modalshown={props.modalshown}
    />
  ))}

  </div>

);

export default informationControls;
