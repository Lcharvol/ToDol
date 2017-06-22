import React, { Component } from 'react';

import './todolistbox.css';

class TodolistBox extends Component {

  state = {
    valuetodo: '',
    valuesince: '',
  };

  handleChangetodo = ({ target: { valuetodo } }) => {
    this.setState({ valuetodo });
  };

  handleChangesince = ({ target: { valuesince } }) => {
    this.setState({ valuesince });
  };

  render() {
    const { valuetodo } = this.state;
    const { valuesince } = this.state;

    return (
      <div className="TodolistBox">
        <div className="addtolist">
          <i className="fa fa-plus fa-2x plus" aria-hidden="true" />
        </div>
        <textarea
          className="todoinput"
          rows={3}
          placeholder="What I need to do"
          value={valuetodo}
          onChange={this.handleChangetodo}
        />
        <textarea
          className="sinceinput"
          rows={3}
          placeholder="since"
          value={valuesince}
          onChange={this.handleChangesince}
        />
      </div>
    );
  }
}

export default TodolistBox;
