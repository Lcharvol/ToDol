import React, { Component } from 'react';

import './TopArrow.css';

class TopArrow extends Component {

  state = {
    focus: false,
    bot: 80,
  }

  handleChangeFocus = () => {
    const { bot } = this.state;

    if (bot === 80) { this.setState({ bot: 90 }); }
    if (bot === 90) { this.setState({ bot: 80 }); }
  }

  goTop = () => {
    let i = window.scrollY;
    const int = setInterval(() => {
      window.scrollTo(0, i);
      i -= 20;
      if (i < 10) clearInterval(int);
    }, 2);
  }

  render() {
    const { bot } = this.state;
    const divStyle = {
      bottom: `${bot}px`,
      transition: 'all 0.3s',
    };

    return (
      <div
        className="topArrow"
        style={divStyle}
        onClick={this.goTop}
        onMouseEnter={this.handleChangeFocus}
        onMouseLeave={this.handleChangeFocus}
      >
        <i className="fa fa-chevron-up topArrow" aria-hidden="true" />
      </div>
    );
  }
}

export default TopArrow;
