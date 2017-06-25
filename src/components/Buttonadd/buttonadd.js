import React, { Component } from 'react';

import './buttonadd.css';

class Buttonadd extends Component {

  state = {

  };

  render() {
    const { affaddbox } = this.props;

    return (
      <div className="TodolistBox" onClick={affaddbox}>
        <i className="fa fa-plus fa-3x plus" aria-hidden="true" />
      </div>

    );
  }
}

export default Buttonadd;
