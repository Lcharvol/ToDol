import React, { Component, PropTypes } from 'react';

import './addbox.css';

import DateSelector from '../DateSelector';
import Time from 'react-time-format';

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

  handleChangeDate = (day, month, year) => {
    this.setState({ date: `${day}/${month}/${year}`});
  };

  handleSubmit = () => {
    const { value, date } = this.state;
    const { publish } = this.props;

    console.log(date);
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
        <i className="fa fa-times cross fa-3x" aria-hidden="true" onClick={affaddbox} />
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
          <DateSelector
            handleChangeDate={this.handleChangeDate}
          />
          <p>Use a progress bar?</p>
          <input type="checkbox" id="cbox1" value="checkbox1"/>
          <p>Use subtasks?</p>
          <input type="checkbox" id="cbox1" value="checkbox1"/>
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
