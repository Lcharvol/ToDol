import React, { Component, PropTypes } from 'react';

import './Menu.css';
import MenuElem from '../MenuElem';

class Menu extends Component {

  static propTypes = {
    sortByDay: PropTypes.func.isRequired,
  };

  static defaultProps = {

  }

  state = {
    selected: '',
  }

  handleChangeSelected = (id) => {
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
