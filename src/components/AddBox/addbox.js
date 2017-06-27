import React, { Component, PropTypes } from 'react';

import './addbox.css';


class Addbox extends Component {


  static propTypes = {
    publish: PropTypes.func.isRequired,
    affaddbox: PropTypes.func.isRequired,
  }

  state = {
    value: '',
    date: '00/00/0000',
  };

  handleChangeValue = ({ target: { value } }) => {
    this.setState({ value });
  };

  handleChangeDate = ({ target: { date } }) => {
    console.log('coucou');
    // this.setState({ value });
  };

  handleSubmit = ({ target: { date } }) => {
    const { value } = this.state;
    const { publish } = this.props;

    if (value.length) {
      publish(value, date);
      this.setState({ value: '', date: '00/00/000' });
    }
  }

  render() {
    const { affaddbox } = this.props;
    const { value } = this.state;

    return (
      <div className="addbox">
        <i className="fa fa-times cross fa-2x" aria-hidden="true" onClick={affaddbox} />
        <div className="addboxinner">
          <p className="formtext">What I need to do: </p>
          <textarea
            rows={1}
            placeholder=""
            className="todotext"
            spellCheck="false"
            onChange={this.handleChangeValue}
          />
          <p className="formtext">For: </p>
          <input
            type="date"
            name="for"
          />
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
