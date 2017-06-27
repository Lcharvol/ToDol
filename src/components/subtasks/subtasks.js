import React, { Component } from 'react';

import SubtasksList from '../subtasksList';
import './subtasks.css';

class Subtasks extends Component {

  state = {
    nbsubtasks: 0,
  }

  render() {
    return (
      <div className="subtasks_main">
        <div className="addsubtasks">
          <div className="addsubtasksbutton">
            <i className="fa fa-plus plustask" aria-hidden="true" />
          </div>
          <p>Add a new subtask</p>
        </div>
        <SubtasksList />
        <SubtasksList />
        <SubtasksList />
        <SubtasksList />
        <SubtasksList />
      </div>
    );
  }
}

export default Subtasks;
