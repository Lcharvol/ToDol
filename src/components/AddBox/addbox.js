import React, { Component, PropTypes } from 'react';

import './addbox.css';

class Addbox extends Component {

  state = {
    value: '',
    date: '00/00/0000',
  }

  static propTypes = {
    publish: PropTypes.func.isRequired,
  }

  handleChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  handleSubmit = () => {
    const { value, date } = this.state;
    const { publish } = this.props;

    if (value.length) {
      publish(value, date);
      this.setState({ value: '', date: '00/00/000' });
    }
  }

  render() {
    const { affaddbox, publish } = this.props;
    const { value } = this.state;
    return (
      <div className="addbox">
        <i className="fa fa-times cross fa-2x" aria-hidden="true" onClick={affaddbox} />
        <div className="addboxinner">
          <h1>What I need to do: </h1>
          <textarea
            rows={1}
            placeholder=""
            className="todotext"
            spellCheck="false"
            onChange={this.handleChange}
          />
          <h1>For: </h1>
          <input type="date" name="for" />
          <button
            type="button"
            className="validate"
            disabled={!value.length}
            onClick={this.handleSubmit}
          >
          Add
          </button>
        </div>
      </div>
    );
  }
}

export default Addbox;
