import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Information from '../../components/Information/Information';
import InformationControls from '../../components/Information/InformationControls/InformationControls';
import Modal from '../../components/UI/Modal/Modal';

class InformationCreator extends Component {

  state = {
    informations: {
      basicinfo: 0,
      educationinfo: 0,
      workinfo: 0,
      hobbiesinfo: 0
    },
    informationClick: false
  }

  showInformationHandler = (type) => {
    const oldState = this.state.informations[type];
    if (oldState === 0){
      const newState = oldState + 1;
      const updatedState = {
        ...this.state.informations
      }
      updatedState[type] = newState;
      this.setState({informations: updatedState});
    }
  }

  hideInformationHandler = (type) => {
    const oldState = this.state.informations[type];
    if (oldState === 1){
      const newState = oldState - 1;
      const updatedState = {
        ...this.state.informations
      }
      updatedState[type] = newState;
      this.setState({informations: updatedState});
    }
  }
  modalHandler = () => {
    this.setState({informationClick: true});
  }
  modalDestroyHandler = () => {
    this.setState({informationClick: false});
  }


  render (){
    const disabledButtons = {
      ...this.state.informations
    };
    for (let key in disabledButtons) {
      disabledButtons[key] = disabledButtons[key] <= 0
    }
    return(
      <Aux>

        <InformationControls
          informationShown={this.showInformationHandler}
          informationHidden={this.hideInformationHandler}
          disabled={disabledButtons}
          modalshown={this.modalHandler}
        />
      <Modal show={this.state.informationClick}
              modalClosed={this.modalDestroyHandler}
        >
        <Information informations={this.state.informations} />
        </Modal>
      </Aux>
    );
  }
}

export default InformationCreator;
