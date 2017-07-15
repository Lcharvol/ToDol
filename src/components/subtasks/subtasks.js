import React, { Component, PropTypes } from 'react';

import SubtasksList from '../subtasksList';
import './subtasks.css';

class Subtasks extends Component {

  static propTypes = {
    subtasks: PropTypes.array.isRequired,
  };

  static defaultProps = {
    subtasks: [],
  };

  state = {
    subtasks: [],
  };

  getnewsubtaskid = () => {
    const { subtasks } = this.state;
    let id = 0;

    for (let i = 0; i < subtasks.length; i++) {
      if (subtasks[i].id >= id) { id = subtasks[i].id + 1; }
    }
    return (id);
  }

  addnewsubtask = () => {
    const { subtasks } = this.state;
    const newid = this.getnewsubtaskid();

    this.setState({ subtasks: [{ todo: newid, id: newid }, ...subtasks] });
  }

  componentDidMount() {
    const { subtasks } = this.props;

    this.setState({ subtasks });
  }

  remove = (index) => {
    const { subtasks } = this.state;

    this.setState({ subtasks: subtasks.filter((sub) => sub.id !== index) });
  }

  render() {
    const { subtasks } = this.state;

    return (
      <div className="subtasks_main">
        <div className="addsubtasks">
          <div className="addsubtasksbutton" onClick={this.addnewsubtask}>
            <i className="fa fa-plus plustask" aria-hidden="true" />
          </div>
          <p>Add a new subtask</p>
        </div>
        {subtasks.map((task) => (
          <SubtasksList
            key={task.id}
            remove={this.remove}
            task={task}
          />
        ))}
        {subtasks.length === 0 &&
          <div className="letsAddNewSubtask">
            <i className="fa fa-pencil pencil" aria-hidden="true" />
            <p>Let's add a new subtask</p>
          </div>
        }
      </div>
    );
  }
}

export default Subtasks;
