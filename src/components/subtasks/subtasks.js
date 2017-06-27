import React, { Component } from 'react';

import './subtasks.css';

class Subtasks extends Component {

  state = {
    nbsubtasks: 0,
  }

  render() {
    return (
      <div className="subtasks_main">
        <div className="addsubtasks">
          <i className="fa fa-plus plustask" aria-hidden="true" />
          <p>Add a new subtask</p>
        </div>
      </div>
    );
  }
}

export default Subtasks;
