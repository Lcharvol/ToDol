import React, { Component } from 'react';

import './TopArrow.css';

class TopArrow extends Component {

  state = {
    focus: false,
  }

  componentWillMount = () => {

  }

  componentDidMount = () => {

  }

  handleChangeFocus = () => {

  }


  render() {
    const divStyle = {
      color: 'rgba(244, 92, 67, 1)',
    };

    return (
      <div className="topArrow" style={divStyle}>
        <i className="fa fa-chevron-up chevup" aria-hidden="true" />
      </div>
    );
  }
}

export default TopArrow;
