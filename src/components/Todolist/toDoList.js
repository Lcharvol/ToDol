import React, { Component, PropTypes } from 'react';

import Subtasks from '../subtasks';
import Optionbox from '../Optionbox';
import './toDoList.css';

class toDoList extends Component {

  static propTypes = {
    todo: PropTypes.string.isRequired,
    since: PropTypes.string.isRequired,
    fore: PropTypes.string.isRequired,
    remove: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    subtasks: PropTypes.array.isRequired,
    research: PropTypes.string.isRequired,
  };

  static defaultProps = {
    todo: 'Null',
    since: '00/00/0000',
    fore: '00/00/0000',
    id: 0,
    research: '',
    subtasks: {
    },
  }

  state = {
    checked: false,
    trashfocus: false,
    wrap: false,
    progress: 0,
    progDrag: false,
    startDrag: 0,
    optionfocus: false,
    displayOption: false,
    displayProgressBar: false,
    displaySubtasks: false,
    displayArrow: false,
    minimize: 0,
  }

  componentDidMount = () => {
    window.addEventListener('mousemove', this.updateProgress, false);
    window.addEventListener('mouseup', this.dragOff, false);
  }

  handletrashfocus = () => {
    if (this.state.trashfocus === false) { this.setState({ trashfocus: true }); } else {
      this.setState({ trashfocus: false });
    }
  };

  affmore = () => {
    if (this.state.wrap === false) { this.setState({ wrap: true }); } else {
      this.setState({ wrap: false });
    }
  }

  updateProgress = (e) => {
    if (this.state.progDrag === true) {
      let percentage = ((e.screenX - (this.state.startDrag)) / 8);

      if (percentage < 0) { percentage = 0; }
      if (percentage > 100) { percentage = 100; this.setState({ checked: true }); }
      this.setState({ progress: percentage });
    }
  }


  gocheck = () => {
    if (this.state.checked === false) {
      this.setState({ checked: true });
    } else { this.setState({ checked: false }); }
  };

  dragOn = (e) => {
    this.setState({ progDrag: true });
    if (this.state.startDrag === 0) { this.setState({ startDrag: e.screenX }); }
  }
  dragOff = () => { this.setState({ progDrag: false }); }

  researchMatch = (research, todo) => {
    if (todo.toUpperCase().match(research.toUpperCase())) { return (true); }

    return (false);
  }

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

  displayProgressBar = () => {
    if (this.state.displayProgressBar === false) {
      this.setState({ displayProgressBar: true });
    } else {
      this.setState({ displayProgressBar: false });
    }
  }

  displayArrow = () => {
    if (this.state.displayArrow === false) {
      this.setState({ displayArrow: true });
    } else {
      this.setState({ displayArrow: false });
    }
  }

  displaySubtasks = () => {
    if (this.state.displaySubtasks === false) {
      this.setState({ displaySubtasks: true });
    } else {
      this.setState({ displaySubtasks: false });
    }
  }

  handleChangeMinimize = () => {

  }

  render() {
    const { props: { todo, fore, since, id, subtasks, remove, research } } = this;
    const { minimize, checked, trashfocus, wrap, progress, optionfocus, displayOption,
      displayProgressBar, displaySubtasks, displayArrow } = this.state;

    let barStyle = {
      width: `${progress}%`,
    };

    if (progress < 3) { barStyle = { width: '3%' }; }

    return (
      <div className={this.researchMatch(research, todo) ? 'toDoList' : 'toDoList hiddenlist'}>
        <div className={wrap ? 'toDoListElem unwraped' : 'toDoListElem'}>
          <div className="toDoListElemInfo">
            <div role="checkbox" aria-checked="false" className="checkbox" onClick={this.gocheck}>
              <i className={checked ? 'fa fa-check check' : ''} aria-hidden="true" />
            </div>
            <p className="to_do">{todo}</p>
            {minimize <= 1 && <p className="since">Since: {since}</p>}
            {minimize === 0 && <p className="fore">For: {fore}</p>}
            <div className="pictogrammes">
              {displayArrow && <div className="more">
                <i
                  className={wrap ? 'fa fa-chevron-up chev' : 'fa fa-chevron-down chev'}
                  aria-hidden="true"
                  onClick={this.affmore}
                />
              </div>}
              <div className="option_elem">
                <i
                  className={optionfocus ? 'fa fa-cog optionhover' : 'fa fa-cog option'}
                  onMouseEnter={this.handleChangeOption}
                  onMouseLeave={this.handleChangeOption}
                  onClick={this.affOptionBox}
                  aria-hidden="true"
                />
              </div>
              <div className="delete">
                <i
                  className={trashfocus ? 'fa fa-trash poubelle' : 'fa fa-trash-o poubelle'}
                  aria-hidden="true"
                  onMouseEnter={this.handletrashfocus}
                  onMouseLeave={this.handletrashfocus}
                  onClick={() => remove(id)}
                />
              </div>
            </div>
          </div>
          {displayProgressBar &&
          <div className="progressElem">
            <div className="progressBar">
              <div className="progressBarInner" style={barStyle}>
                <div
                  className="cursor"
                  role="switch"
                  aria-checked="true"
                  onMouseDown={this.dragOn}
                  onMouseUp={this.dragOff}
                />
              </div>
            </div>
            <p className="progressScore">{Math.round(progress)}%</p>
          </div>}
          {displaySubtasks && <Subtasks
            subtasks={subtasks}
          />}
        </div>
        <Optionbox
          affOptionBox={this.affOptionBox}
          displayOption={displayOption}
          displayProgressBar={this.displayProgressBar}
          displaySubtasks={this.displaySubtasks}
          displayArrow={this.displayArrow}
        />
      </div>
    );
  }
}

export default toDoList;
