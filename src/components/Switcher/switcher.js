import React, { Component, PropTypes } from 'react';

import './switcher.css';

class Switcher extends Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    handleChangeState: PropTypes.func.isRequired,
  };

  static defaultProps = {
    name: 'Option',
  }

  state = {
    value: false,
  }

  handleChangeValue = () => {
    const { handleChangeState, name } = this.props;

    if (this.state.value === false) {
      this.setState({ value: true });
    } else {
      this.setState({ value: false });
    }
    handleChangeState(name);
  }

  render() {
    const { value } = this.state;
    const { name } = this.props;

    return (
      <div className="switcher">
        <p>{name}:{value ? '  On' : '  Off'}</p>
        <div className="switcherInner" onClick={this.handleChangeValue}>
          <div className={value ? 'switcherCursor right' : 'switcherCursor left'} />
        </div>
      </div>
    );
  }
}

export default Switcher;
