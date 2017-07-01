import React, { Component, PropTypes } from 'react';

import Switcher from '../Switcher';
import './optionbox.css';

class Optionbox extends Component {

  static propTypes = {
    affOptionBox: PropTypes.func.isRequired,
    displayOption: PropTypes.func.isRequired,
    displayArrow: PropTypes.func.isRequired,
  };

  static defaultProps = {
  }

  state = {
    Option1: false,
    Option2: false,
    Option3: false,
  }

  handleChangeState = (name) =>
  {
    const { displayProgressBar, displaySubtasks, displayArrow} = this.props;

    if (name === "Option1")
    {
      if (this.state.Option1 === true) {
        this.setState({ Option1: false} )
      } else {
        this.setState( {Option1: true} )
      }
      displayProgressBar();
    }
    if (name === "Option2")
    {
      if (this.state.Option2 === true) {
        this.setState({ Option2: false} )
      } else {
        this.setState( {Option2: true} )
      }
      displaySubtasks();
    }
    if (this.state.Option1 === false && this.state.Option2 === false)
      displayArrow();
  }

  render() {
    const { affOptionBox, displayOption} = this.props;

    return (
      <div
        className={displayOption ? 'optionBox show' : 'optionBox hidden'}
        onMouseLeave={affOptionBox}
      >
        <Switcher
          name="Option1"
          text="Progress Bar"
          handleChangeState={this.handleChangeState}
        />
        <Switcher
          name="Option2"
          text="Subtasks"
          handleChangeState={this.handleChangeState}
        />
        <Switcher
          name="Option3"
          handleChangeState={this.handleChangeState}
        />
      </div>
    );
  }
}

export default Optionbox;
