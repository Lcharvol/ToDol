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

  render() {
    const { affOptionBox, displayOption, Option1, Option2, Option3 } = this.props;

    return (
      <div
        className={displayOption ? 'optionBox show' : 'optionBox hidden'}
        onMouseLeave={affOptionBox}
      >
        <Switcher
          name={Option1}
        />
        <Switcher
          name={Option2}
        />
        <Switcher
          name={Option3}
        />
      </div>
    );
  }
}

export default Optionbox;
