import React, { Component } from 'react';

import './TopArrow.css';

class TopArrow extends Component {

  state = {
    focus: false,
    bot: -60,
  }

  componentWillMount = () => {
    this.setState({ bot: 0 });
  }

  componentDidMount = () => {
    this.setState({ bot: 25 });
  }

  componentWillUnmount = () => {
    this.setState({ bot: -60 });
  }

  handleChangeFocus = () => {

  }

  goTop = () => {
    window.scrollTo(0, 0);
  }

  render() {
    const { bot } = this.state;

    const divStyle = {
      color: 'rgba(244, 92, 67, 1)',
      bottom: `${bot}px`,
      animation: 'bottom 1s',
    };

    return (
      <div
        className="topArrow"
        style={divStyle}
        onMouseEnter={this.handleChangeFocus}
        onMouseLeave={this.handleChangeFocus}
        onClick={this.goTop}
      >
        <i className="fa fa-chevron-up chevup" aria-hidden="true" />
      </div>
    );
  }
}

export default TopArrow;
