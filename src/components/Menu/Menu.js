import React, { Component } from 'react';

import './Menu.css';

class MenuElem extends Component {

  state = {
    focus: false,
  }

  handleTextFocus = () => {
    const { focus } = this.state;

    if (focus === false) {
      this.setState({ focus: true })
    } else {
      this.setState({ focus: false })
    }
  }

  render() {
    const { name, sortByDay } = this.props;
    const { focus } = this.state;

    const divStyle = {
      color: focus ? 'rgba(244, 92, 67, 1)' : 'rgb(75,86,78)',
    }
    return (
      <div
        className="menuElem"
        onClick={() => sortByDay(name)}
        style={divStyle}
        onMouseEnter={this.handleTextFocus}
        onMouseLeave={this.handleTextFocus}
      >
        <p>{name}</p>
      </div>
    );
  }
}

class Menu extends Component {

  render() {
    const { sortByDay } = this.props;

    return (
      <div className="menuContainer">
        <MenuElem
          name="Today"
          sortByDay={sortByDay}
        />
        <div className="separator" />
        <MenuElem
          name="Tomorow"
          sortByDay={sortByDay}
        />
        <div className="separator" />
        <MenuElem
          name="All"
          sortByDay={sortByDay}
        />
      </div>
    );
  }
}

export default Menu;
