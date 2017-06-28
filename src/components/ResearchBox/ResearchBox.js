import React, { Component } from 'react';

import './ResearchBox.css';

class ResearchBox extends Component {

  render() {
    return (
      <div className="ResearchBox">
        <div className="loupeElem">
          <i className="fa fa-search fa-2x loupe" aria-hidden="true" />
        </div>
        <input
          type="search"
          placeholder="Research.."
          name="Research"
          className="ResearchBar"
        />
      </div>
    );
  }
}

export default ResearchBox;
