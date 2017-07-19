import React, { Component } from 'react';

import './DateSelector.css';

class DateSelector extends Component {
  state = {
    day: 20,
    month: 4,
    year: 2017,
  }
  render () {
    const { day, month, year } = this.state;

    return (
      <div className="DateSelectorContainer">
        <div className="selector"><p>{Math.floor(day / 10)}</p></div>
        <div className="selector"><p>{day % 10}</p></div>
        <i className="fa fa-minus tiret" aria-hidden="true"></i>
        <div className="selector"><p>{Math.floor(month / 10)}</p></div>
        <div className="selector"><p>{month % 10}</p></div>
        <i className="fa fa-minus tiret" aria-hidden="true"></i>
        <div className="selector"><p>{Math.floor(year / 1000)}</p></div>
        <div className="selector"><p>{Math.floor((year % 1000) / 100)}</p></div>
        <div className="selector"><p>{Math.floor((year % 100) / 10)}</p></div>
        <div className="selector"><p>{year % 10}</p></div>
      </div>
    );
  }
}

export default DateSelector;
