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
  }

  handleChangeState = (name) =>
  {
    const { displayProgressBar, displaySubtasks, displayArrow} = this.props;
    const { Option1, Option2 } = this.state;

    if (name === "Option1")
    {
      if (Option1 === true) {
        this.setState({ Option1: false}, () => {
          if (this.state.Option2 === false)
            displayArrow();
        })
      } else {
        this.setState( {Option1: true}, () => {
          if (this.state.Option2 === false)
            displayArrow();
        })
      }
      displayProgressBar();
    }
    if (name === "Option2")
    {
      if (Option2 === true) {
        this.setState({ Option2: false}, () => {
          if (this.state.Option1 === false)
            displayArrow();
        })
      } else {
        this.setState( {Option2: true}, () => {
          if (this.state.Option1 === false)
            displayArrow();
        })
      }
      displaySubtasks();
    }
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
          onClick={this.handleChangeArrow}
        />
        <Switcher
          name="Option2"
          text="Subtasks"
          handleChangeState={this.handleChangeState}
        />
      </div>
    );
  }
}

export default Optionbox;
