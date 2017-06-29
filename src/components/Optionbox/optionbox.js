import React, { Component, PropTypes } from 'react';

import Switcher from '../Switcher';
import './optionbox.css';

class Optionbox extends Component {

  static propTypes = {
    affOptionBox: PropTypes.func.isRequired,
    displayOption: PropTypes.func.isRequired,
    Option1: PropTypes.string.isRequired,
    Option2: PropTypes.string.isRequired,
    Option3: PropTypes.string.isRequired,
  };

  static defaultProps = {
    Option1: "Option1",
    Option2: "Option2",
    Option3: "Option3",
  }

  state = {
    state1: false,
    state2: false,
    state3: false,
  }

  handleChangeState = (name) =>
  {
    console.log(name);
  }

  render() {
    const { affOptionBox, displayOption, Option1, Option2, Option3 } = this.props;

    return (
      <div
        className={displayOption ? 'optionBox show' : 'optionBox hidden'}
        onMouseLeave={affOptionBox}
      >
        <Switcher
          name={Option1}
          handleChangeState={this.handleChangeState}
        />
        <Switcher
          name={Option2}
          handleChangeState={this.handleChangeState}
        />
        <Switcher
          name={Option3}
          handleChangeState={this.handleChangeState}
        />
      </div>
    );
  }
}

export default Optionbox;
