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

  scrollY = () => {
    const supportPageOffset = window.pageXOffset !== undefined;
    const isCSS1Compat = ((document.compatMode || '') === 'CSS1Compat');

    return (supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop);
  }


  handleChangePosition = () => {
    const { displayFakeResearchBox } = this.props;
    const menu = document.querySelector('.mainSearchBox');
    const top = menu.getBoundingClientRect().top + this.scrollY();

    if (this.scrollY() > (top - 15) && this.state.fixed === false) {
      this.setState({ fixed: true }); displayFakeResearchBox() }
    else if (top < 195 && this.state.fixed === true) {
      this.setState({ fixed: false }); displayFakeResearchBox()
    }
  }

  render() {
    const { fixed } = this.state;

    window.addEventListener('scroll', this.handleChangePosition, false);
    return (
      <div className={fixed ? 'mainSearchBox fixed' : 'mainSearchBox'}>
        <div className="ResearchBox">
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
