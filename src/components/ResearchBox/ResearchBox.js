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
    const { fixed } = this.state;
    const searchBar = document.getElementsByClassName('mainSearchBox');
    const topBar = searchBar[0].getBoundingClientRect();
    if (window.scrollY >= 180) { this.setState({ fixed: true }); }
    if (window.scrollY < 180) { this.setState({ fixed: false }); }
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
