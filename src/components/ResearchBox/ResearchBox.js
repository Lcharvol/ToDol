import React, { Component, PropTypes } from 'react';

import './ResearchBox.css';

class ResearchBox extends Component {

  static propTypes = {
    research: PropTypes.func.isRequired,
  };

  state = {
    value: '',
    fixed: false,
  }

  handleChangeResearch = ({ target: { value } }) => {
    const { research } = this.props;

    this.setState({ value });
    research(value);
  };

  handleChangePosition = () => {
    const { displayFakeResearchBox } = this.props;

    if (window.scrollY > 194 && this.state.fixed === false) { this.setState({ fixed: true }); displayFakeResearchBox(); }
    if (window.scrollY <= 194 && this.state.fixed === true) { this.setState({ fixed: false }); displayFakeResearchBox(); }
  }

  render() {
    const { fixed } = this.state;

    window.addEventListener('scroll', this.handleChangePosition, false);
    return (
      <div className={fixed ? 'mainSearchBox fixed' : 'mainSearchBox'}>
        <div className={fixed ? 'ResearchBoxfixed' : 'ResearchBox'}>
          <div className="loupeElem">
            <i className="fa fa-search fa-2x loupe" aria-hidden="true" />
          </div>
          {
            <input
              type="search"
              placeholder="Research.."
              name="Research"
              className="ResearchBar"
              spellCheck="false"
              onChange={this.handleChangeResearch}
            />
          }
        </div>
      </div>
    );
  }
}

export default ResearchBox;
