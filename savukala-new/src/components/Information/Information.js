import React from 'react';

import classes from './Information.module.css';
import AboutMe from './AboutMe/AboutMe';

const information = (props) => {
  let changingInformations = Object.keys(props.informations)
  .map(nfoKey => {
      return[...Array(props.informations[nfoKey])].map((_, i) => {
          return <AboutMe key={nfoKey + i} type={nfoKey} />;
      });
  })
  .reduce((arr, el) => {
    return arr.concat(el);
  }, []);

  if (changingInformations.length === 0){
    changingInformations = <p>Welcome to my site, please select the navigation for information</p>;
  }

  return(
    <div className={classes.Information}>
      {changingInformations}
    </div>
  );


};

export default information;
