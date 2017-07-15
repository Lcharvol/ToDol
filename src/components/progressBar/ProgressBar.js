import React, { Component, PropTypes } from 'react';

import './ProgressBar.css';

class ProgressBar extends Component {

  static PropTypes = {
    progress: PropTypes.number.isRequired,
    updateProgress: PropTypes.func.isRequired,
  }

  state = {
    progDrag: false,
    startDrag: 0,
    progress: 0,
  }

  componentDidMount = () => {
    const { updateProgress } = this.props;

    window.addEventListener('mouseup', this.dragOff, false);
  }

  updateProgress = (e) => {
    const { handleChangeProgress } = this.props;

    if (this.state.progDrag === true) {
      let percentage = ((e.screenX - (this.state.startDrag)) / 8);

      if (percentage < 0) { percentage = 0; }
      if (percentage > 100) { percentage = 100; this.setState({ checked: true }); }
      this.setState({ progress: percentage });
    }
    handleChangeProgress(this.state.progress);
  }

  dragOn = (e) => {
    this.setState({ progDrag: true });
    if (this.state.startDrag === 0) { this.setState({ startDrag: e.screenX }); }
  }
  dragOff = () => { this.setState({ progDrag: false }); }

  render() {
    const { progDrag, startDrag, progress } = this.state;

    window.addEventListener('mousemove', this.updateProgress, false);

    let barStyle = {
      width: `${progress}%`,
    };

    if (progress < 3) { barStyle = { width: '3%' }; }

    return (
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
      </div>
    );
  }
}

export default ProgressBar;
