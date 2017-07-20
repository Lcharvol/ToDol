import React, { Component } from 'react';

import './sortBox.css';

class SortBox extends Component {

  state = {
    wrap: true,
    textFocus: 0,
  }

  displaySortTab = () => {
    if (this.state.wrap === true) {
      this.setState({ wrap: false });
    } else {
      this.setState({ wrap: true });
    }
  };

  handleFocusText = () => {
    const { textFocus } = this.state;

    if (textFocus === false) {
      this.setState({ textFocus: true })
    } else {
      this.setState({ textFocus: false })
    }
  }

  onclick = (from) => {
    const { sortBy } = this.props;
    this.setState({ textFocus: from});
    sortBy(from);
  }

  render() {
    const { wrap, textFocus } = this.state;

    const divStyle = {
      width: wrap ? '130px' : '295px',
    };

    const textStyle = {
      color: 'red',
    };

    return (
          <div className="sortBox" style={divStyle}>
            <div className="sortBoxRightSide">
              <p className="sortBy">Sort by</p>
            </div>
            <div className="chevContainer" onClick={this.displaySortTab}>
              <i className="fa fa-chevron-right chevfilter" aria-hidden="true" />
            </div>
            <p className="sortType" style={{color: textFocus === 1 ? 'rgba(244, 92, 67, 1)' : 'rgb(85,96,78)'}} onClick={() => this.onclick(1)}>Name</p>
            <p className="sortType" style={{color: textFocus === 2 ? 'rgba(244, 92, 67, 1)' : 'rgb(85,96,78)'}} onClick={() => this.onclick(2)}>For</p>
            <p className="sortType" style={{color: textFocus === 3 ? 'rgba(244, 92, 67, 1)' : 'rgb(85,96,78)'}} onClick={() => this.onclick(3)}>Since</p>
          </div>
    );
  }
}

export default SortBox;
