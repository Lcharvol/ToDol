import React, { Component } from 'react';

import Switcher from '../Switcher';
import './optionbox.css';

class Optionbox extends Component {

  render() {
    const { affOptionBox } = this.props;

    return (
      <div className="optionBox" onMouseLeave={affOptionBox}>
        <div className="feuillet" />
        <Switcher />
        <Switcher />
        <Switcher />
      </div>
    );
  }
}

export default Optionbox;
