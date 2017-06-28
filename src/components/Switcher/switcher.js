import React, { Component } from 'react';

import './switcher.css';

class Switcher extends Component {
  render() {
    return (
      <div className="switcher">
        <div className="switcherInner">
          <div className="switcherCursor" />
        </div>
      </div>
    );
  }
}

export default Switcher;
