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
    const { name, sortByDay, selected, handleChangeSelected } = this.props;
    const { focus} = this.state;
    
    const divStyle = {
      color: (focus || selected === name) ? 'rgba(244, 92, 67, 1)' : 'rgb(75,86,78)',
    }
    return (
      <div
        className="menuElem"
        onClick={() => sortByDay(name), () => handleChangeSelected(name)}
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

  state = {
    selected: '',
  }

  handleChangeSelected = (id) => {
    const { selected } = this.state;

    this.setState({ selected: id });
  }

  render() {
    const { sortByDay } = this.props;
    const { selected } = this.state;

    return (
      <div className="menuContainer">
        <MenuElem
          handleChangeSelected={this.handleChangeSelected}
          name="Today"
          sortByDay={sortByDay}
          selected={selected}
        />
        <div className="separator" />
        <MenuElem
          handleChangeSelected={this.handleChangeSelected}
          name="Tomorow"
          sortByDay={sortByDay}
          selected={selected}
        />
        <div className="separator" />
        <MenuElem
          handleChangeSelected={this.handleChangeSelected}
          name="All"
          sortByDay={sortByDay}
          selected={selected}
        />
      </div>
    );
  }
}

export default Menu;
