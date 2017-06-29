import React, { Component, PropTypes } from 'react';

import './ResearchBox.css';

class ResearchBox extends Component {

  static propTypes = {
    research: PropTypes.func.isRequired,
  };

  render() {
    const { research } = this.props;

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
          spellCheck="false"
          onChange={research}
        />
      </div>
    );
  }
}

export default ResearchBox;
