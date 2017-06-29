import React, { Component, PropTypes } from 'react';

import './ResearchBox.css';

class ResearchBox extends Component {

  static propTypes = {
    research: PropTypes.func.isRequired,
  };

  state = {
    value: ''
  }

  handleChangeResearch = ({ target: { value } }) => {
    const { research } = this.props;

    this.setState({ value });
    research(value);
  };

  render() {
    const { value } = this.state;

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
          onChange={this.handleChangeResearch}
        />
      </div>
    );
  }
}

export default ResearchBox;
