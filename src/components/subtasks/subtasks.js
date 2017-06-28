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
    optionfocus: false,
    displayOption: false,
  };

  handleChangeOption = () => {
    if (this.state.optionfocus === false) {
      this.setState({ optionfocus: true });
    } else {
      this.setState({ optionfocus: false });
    }
  }

  affOptionBox = () => {
    if (this.state.displayOption === false) {
      this.setState({ displayOption: true });
    } else {
      this.setState({ displayOption: false });
    }
  }

  addnewsubtask = () => {
    const { subtasks } = this.state;

    this.setState({ subtasks: { coucou: 'salut', ...subtasks } });
  }

  componentDidMount() {
    const { subtasks } = this.props;

    this.setState({ subtasks });
  }

  render() {
    const { optionfocus, displayOption, subtasks } = this.state;

    return (
      <div className="subtasks_main">
        <div className="addsubtasks">
          <div className="addsubtasksbutton" onClick={this.addnewsubtask}>
            <i className="fa fa-plus plustask" aria-hidden="true" />
          </div>
          <p>Add a new subtask</p>
          <i
            className={optionfocus ? 'fa fa-cog optionhover' : 'fa fa-cog option'}
            onMouseEnter={this.handleChangeOption}
            onMouseLeave={this.handleChangeOption}
            onClick={this.affOptionBox}
            aria-hidden="true"
          />
          {displayOption && <Optionbox affOptionBox={this.affOptionBox} />}
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
