import React, { Component } from 'react';

import './sortBox.css';

class SortBox extends Component {

  state = {
    wrap: true,
    textFocus: false,
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

  render() {
    const { wrap } = this.state;
    const { sortBy } = this.props;

    const divStyle = {
      width: wrap ? '130px' : '330px',
    };

    const textStyle = {
      color: this.state.textFocus ? 'red' : 'yellow',
    };

    return (
      <div className="sortBoxContainer">
        <div className="sortBoxContainerInner">
          <div className="sortBox" style={divStyle}>
            <div className="sortBoxRightSide">
              <p className="sortBy">Sort by</p>
            </div>
            <div className="chevContainer" onClick={this.displaySortTab}>
              <i className="fa fa-chevron-right chevfilter" aria-hidden="true" />
            </div>
            <p onClick={() => sortBy(1)}>Name</p>
            <p onClick={() => sortBy(2)}>For</p>
            <p onClick={() => sortBy(3)}>Since</p>
          </div>
        </div>
      </div>
    );
  }
}

export default SortBox;
