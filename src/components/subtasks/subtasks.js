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
    value: '',
  };

  getnewsubtaskid = () => {
    const { subtasks } = this.state;
    let id = 0;

    for (let i = 0; i < subtasks.length; i++) {
      if (subtasks[i].id >= id) { id = subtasks[i].id + 1; }
    }
    return (id);
  }

  addnewsubtask = (value) => {
    if (value === '') { return; }
    const { subtasks } = this.state;
    const newid = this.getnewsubtaskid();

    this.setState({ subtasks: [{ todo: value, id: newid }, ...subtasks], value: '' });
  }

  componentWillMount = () => {
    const { subtasks } = this.props;

    this.setState({ subtasks });
  }

  remove = (index) => {
    const { subtasks } = this.state;

    this.setState({ subtasks: subtasks.filter((sub) => sub.id !== index) });
  }

  handleChangeValue = ({ target: { value } }) => {
    this.setState({ value });
  }

  render() {
    const { subtasks, value } = this.state;

    return (
      <div className="subtasks_main">
        <div className="addsubtasks">
          <div className="addsubtasksbutton" onClick={() => this.addnewsubtask(value)}>
            <i className="fa fa-plus plustask" aria-hidden="true" />
          </div>
          <p>Add a new subtask: </p>
          <input spellCheck="false" value={value} onChange={this.handleChangeValue} className="newSubtaskInput" />
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
