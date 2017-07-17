import React, { Component } from 'react';

import './sortBox.css';

class SortBox extends Component {

  state = {
    wrap: true,
  }

  displaySortTab = () => {
    if (this.state.wrap === true) {
    this.setState({wrap: false});}
    else {
      this.setState({wrap: true});
    }
  }

  render() {
    const { wrap } = this.state;

    const divStyle = {
      width: wrap ? '130px' : '300px',
    }

    return (
      <div className="sortBoxContainer">
        <div className="sortBoxContainerInner">
          <div className="sortBox" style={divStyle}>
            <div className="sortBoxRightSide">
              <p className="sortBy">Sort by</p>
            </div>
            <div className="chevContainer" onClick={this.displaySortTab}>
              <i className="fa fa-chevron-right chevfilter" aria-hidden="true" onClick={this.displaySortTab}/>
            </div>
            {!wrap &&
              <div className="sortTab">
              </div>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default SortBox;
