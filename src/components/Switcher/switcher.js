import React, { Component } from 'react';

import './switcher.css';

class Switcher extends Component {

  state = {
    value: false,
  }

  handleChangeValue = () => {
    if (this.state.value === false) {
      this.setState({ value: true });
    } else {
      this.setState({ value: false });
    }
  }

  render() {
    const { value } = this.state;

    return (
      <div className="switcher">
        <div className="switcherInner" onClick={this.handleChangeValue}>
          <div className={value ? 'switcherCursor right' : 'switcherCursor eft'} />
        </div>
      </div>
    );
  }
}

export default Switcher;
