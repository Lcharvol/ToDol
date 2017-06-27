import React, { Component } from 'react';

import SubtasksList from '../subtasksList';
import './subtasks.css';

class Subtasks extends Component {
  state = {
    nbsubtasks: 0,
  }

  render() {
    const { subtasks } = this.props;

    return (
      <div className="subtasks_main">
        <div className="addsubtasks">
          <div className="addsubtasksbutton">
            <i className="fa fa-plus plustask" aria-hidden="true" />
          </div>
          <p>Add a new subtask</p>
        </div>
        {Object.keys(subtasks).map((task, i) => (
          <SubtasksList
            key={i}
            task={task}
          />
        ))}
      </div>
    );
  }
}

export default Subtasks;
