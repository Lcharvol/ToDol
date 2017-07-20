import React, { Component } from 'react';

import './Menu.css';

class MenuElem extends Component {
  render () {
    const { name } = this.props;

    return(
      <div className="menuElem">
        <p>{name}</p>
      </div>
    );
  }
}

class Menu extends Component {

    handleFocusText = () => {

    }

    render () {
      return (
        <div className="menuContainer">
          <MenuElem
            name="Today"
          />
          <div className="separator" />
          <MenuElem
            name="Tomorow"
          />
          <div className="separator" />
          <MenuElem
            name="More"
          />
        </div>
      );
    };
}

export default Menu;
