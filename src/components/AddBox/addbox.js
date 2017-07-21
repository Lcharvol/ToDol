import React, { Component, PropTypes } from 'react';
import DateSelector from '../DateSelector';

import './addbox.css';

class Addbox extends Component {

  static propTypes = {
    publish: PropTypes.func.isRequired,
    affaddbox: PropTypes.func.isRequired,
  }

  state = {
    value: '',
    date: '00/00/0000',
    progressBar: false,
    subtasks: false,
  };

  handleChangeValue = ({ target: { value } }) => {
    this.setState({ value });
  };

  handleChangeDate = (day, month, year) => {
    this.setState({ date: `${day}/${month}/${year}` });
  };

  handleSubmit = () => {
    const { value, date, progressBar, subtasks } = this.state;
    const { publish } = this.props;

    if (value.length) {
      publish(value, date, progressBar, subtasks);
      this.setState({ value: '', date: '00/00/000' });
    }
  }

  handleCheckProgressBar = () => {
    const { progressBar } = this.state;

    if (progressBar === false) {
      this.setState({ progressBar: true });
    } else {
      this.setState({ progressBar: false });
    }
  }

  handleCheckSubtasks = () => {
    const { subtasks } = this.state;

    if (subtasks === false) {
      this.setState({ subtasks: true });
    } else {
      this.setState({ subtasks: false });
    }
  }


  render() {
    const { affaddbox } = this.props;
    const { value, progressBar, subtasks } = this.state;

    const button1Style = {
      background: progressBar ? 'linear-gradient( 0deg, rgba(244, 92, 67, 1) 0%, rgba(235, 51, 73, 1) 100%)'
      : 'white',
    };

    const button2Style = {
      background: subtasks ? 'linear-gradient( 0deg, rgba(244, 92, 67, 1) 0%, rgba(235, 51, 73, 1) 100%)'
      : 'white',
    };

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
          <div className="addboxOptionContainer">
            <p>Use a progress bar?</p>
            <div className="squaredOne" onClick={this.handleCheckProgressBar} role="button">
              <input type="checkbox" value="None" name="check" />
              <label style={button1Style} htmlFor="squaredOne" />
            </div>
          </div>
          <div className="addboxOptionContainer">
            <p>Use subtasks?</p>
            <div className="squaredOne" onClick={this.handleCheckSubtasks} role="button">
              <input type="checkbox" value="None" name="check" />
              <label style={button2Style} htmlFor="squaredOne" />
            </div>
          </div>
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
