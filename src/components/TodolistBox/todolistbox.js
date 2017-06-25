import React, { Component } from 'react';

import './todolistbox.css';

class TodolistBox extends Component {

  state = {

  };

  render() {
    const { props: { affaddbox } } = this;
    return (
      <div className="TodolistBox" onClick={affaddbox}>
        <i className="fa fa-plus fa-3x plus" aria-hidden="true" />
      </div>

    );
  }
}

export default TodolistBox;
