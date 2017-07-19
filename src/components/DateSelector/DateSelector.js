import React, { Component } from 'react';

import './DateSelector.css';

class DateSelector extends Component {
  state = {
    day: 20,
    month: 4,
    year: 2017,
  }

  handleChangeDate = (id) => {
    let { day, month, year } = this.state;
    if (id === 1) {
      day += 10;
      if (day > 30) {
        day = 0;
        month += 1;
      }
    } else if (id === 2) {
      day += 1;
      if (day > 30) {
        day = 0;
        month += 1;
      }
    } else if (id === 3) {
      month += 10;
      if (month > 12) {
        month = 0;
        year += 1;
      }
    } else if (id === 4) {
      month += 1;
      if (month > 12) {
        month = 0;
        year += 1;
      }
    }
    this.setState({ day, month, year});
  }

  render () {
    const { day, month, year } = this.state;

    return (
      <div className="DateSelectorContainer">
        <div onClick={() => this.handleChangeDate(1)} className="selector">
          <p>{Math.floor(day / 10)}</p>
        </div>
        <div onClick={() => this.handleChangeDate(2)} className="selector">
          <p>{day % 10}</p>
        </div>
        <i className="fa fa-minus tiret" aria-hidden="true"></i>
        <div onClick={() => this.handleChangeDate(3)} className="selector">
          <p>{Math.floor(month / 10)}</p>
        </div>
        <div onClick={() => this.handleChangeDate(4)} className="selector">
          <p>{month % 10}</p>
        </div>
        <i className="fa fa-minus tiret" aria-hidden="true"></i>
        <div onClick={() => this.handleChangeDate(5)} className="selector">
          <p>{Math.floor(year / 1000)}</p>
        </div>
        <div onClick={() => this.handleChangeDate(6)} className="selector">
          <p>{Math.floor((year % 1000) / 100)}</p>
        </div>
        <div onClick={() => this.handleChangeDate(7)} className="selector">
          <p>{Math.floor((year % 100) / 10)}</p>
        </div>
        <div onClick={() => this.handleChangeDate(8)} className="selector">
          <p>{year % 10}</p>
        </div>
      </div>
    );
  }
}

export default DateSelector;
