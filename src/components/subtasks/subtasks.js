import React, { Component, PropTypes } from 'react';

import SubtasksList from '../subtasksList';
import Switcher from '../Switcher';
import Optionbox from '../Optionbox';
import './subtasks.css';

class Subtasks extends Component {

  static propTypes = {
    subtasks: PropTypes.object.isRequired,
  };

  static defaultProps = {
    subtasks: {
    },
  };

  state = {
    subtasks: '',
  };

  addnewsubtask = () => {
    const { subtasks } = this.state;

    this.setState({ subtasks: { coucou: 'salut', ...subtasks } });
  }

  componentDidMount() {
    const { subtasks } = this.props;

    this.setState({ subtasks });
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
        {Object.keys(subtasks).map((task, i) => (
          <SubtasksList
            key={i}
            index={i}
            task={task}
          />
        ))}
      </div>
    );
  }
}

export default Subtasks;
