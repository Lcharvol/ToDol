import React, { Component } from 'react';

import './sortBox.css';

class SortBox extends Component {

  state = {
    wrap: true,
  }

  displaySortTab = () => {
    console.log("coucou");
  }

  render() {
    const { wrap } = this.state;

    return (
      <div className="sortBoxContainer">
        <div className="sortBoxContainerInner">
          <div className="sortBox">
            <div className="sortBoxRightSide">
              <p className="sortBy">Sort by</p>
            </div>
            <div className="chevContainer" onClick={this.displaySortTab}>
              <i className="fa fa-chevron-right chevfilter" aria-hidden="true" onClick={this.displaySortTab}/>
            </div>
          </div>
          {!wrap && <div className="sortTab">
          </div>}
        </div>
      </div>
    );
  }
}

export default SortBox;
