import React, { Component, PropTypes } from 'react';

import './MenuElem.css';

class MenuElem extends Component {

  static propTypes = {
    sortByDay: PropTypes.func.isRequired,
    handleChangeSelected: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    selected: PropTypes.string.isRequired,

  };

  static defaultProps = {

  }

  state = {
    focus: false,
  }

  onclick = (name) => {
    const { sortByDay, handleChangeSelected } = this.props;

    sortByDay(name);
    handleChangeSelected(name);
  }

  handleTextFocus = () => {
    const { focus } = this.state;

    if (focus === false) {
      this.setState({ focus: true });
    } else {
      this.setState({ focus: false });
    }
  }


  render() {
    const { name, selected } = this.props;
    const { focus } = this.state;

    const divStyle = {
      color: (focus || selected === name) ? 'rgba(244, 92, 67, 1)' : 'rgb(75,86,78)',
    };

    return (
      <div
        role="button"
        className="menuElem"
        onClick={() => this.onclick(name)}
        style={divStyle}
        onMouseEnter={this.handleTextFocus}
        onMouseLeave={this.handleTextFocus}
      >
        <p>{name}</p>
      </div>
    );
  }
}

export default MenuElem;
