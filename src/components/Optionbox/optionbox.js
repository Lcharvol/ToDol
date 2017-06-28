import React, { Component } from 'react';

import Switcher from '../Switcher';
import './optionbox.css';

class Optionbox extends Component {

  render() {
    const { affOptionBox, displayOption } = this.props;

    return (
      <div
        className={displayOption ? 'optionBox show' : 'optionBox hidden'}
        onMouseLeave={affOptionBox}
      >
        <p>Option1: </p>
        <Switcher />
        <p>Option2: </p>
        <Switcher />
        <p>Option3: </p>
        <Switcher />
      </div>
    );
  }
}

export default Optionbox;
