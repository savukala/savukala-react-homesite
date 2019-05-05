import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './AboutMe.module.css';

class AboutMe extends Component {

  render() {

    let information = null;

    switch(this.props.type){
      case('basicinfo'):
        information = <div className={classes.BasicInfo}>"Lorem lipsum synnyin ja hynnyin";</div>;
        break;
      case('educationinfo'):
        information = <div className={classes.EducationInfo}>"Opiskelin ja opiskelin"</div>
        break;
      case('workinfo'):
        information = <div className={classes.WorkInfo}>"Työtä mä painoin"</div>
        break;
      case('hobbiesinfo'):
        information = <div className={classes.HobbiesInfo}>"Harrastin mää jotain"</div>
        break;
      default:
        information = null;
    }
    return information;

  }
}

AboutMe.propTypes = {
  type: PropTypes.string.isRequired
};

export default AboutMe;
