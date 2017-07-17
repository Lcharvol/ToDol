import React, { Component } from 'react';

import './sortBox.css';

class SortBox extends Component {

  state = {
    wrap: true,
  }

  displaySortTab = () => {

  }

  render() {
    const { wrap } = this.state;

    return (
      <div className="sortBoxContainer">
        <div className="sortBoxContainerInner">
          <div className="sortBox">
            <p className="sortBy">Sort by</p>
            <i className="fa fa-chevron-right chevfilter" aria-hidden="true" onClick={this.displaySortTab}/>
            <p>date</p>
            <p>name</p>
          </div>
          {!wrap && <div className="sortTab">
            <p>date</p>
            <p>name</p>
          </div>}
        </div>
      </div>
    );
  }
}

export default SortBox;
