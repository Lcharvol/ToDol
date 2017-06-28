import React, { Component, PropTypes } from 'react';

import Switcher from '../Switcher';
import './optionbox.css';

class Optionbox extends Component {

  static propTypes = {
    affOptionBox: PropTypes.func.isRequired,
    displayOption: PropTypes.func.isRequired,
  };

  render() {
    const { affOptionBox, displayOption } = this.props;

    return (
      <div
        className={displayOption ? 'optionBox show' : 'optionBox hidden'}
        onMouseLeave={affOptionBox}
      >
        <Switcher
          name="Option1"
        />
        <Switcher
          name="Option2"
        />
        <Switcher
          name="Option3"
        />
      </div>
    );
  }
}

export default Optionbox;
