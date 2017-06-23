import React, { Component, PropTypes } from 'react';

import './toDoList.css';

class toDoList extends Component {

  static propTypes = {
    todo: PropTypes.string.isRequired,
    since: PropTypes.string.isRequired,
    fore: PropTypes.string.isRequired,
    remove: PropTypes.func.isRequired,
  };

  static defaultProps = {
    todo: 'Null',
    since: '00/00/0000',
    fore: '00/00/0000',
  }

  state = {
    checked: false,
    trashfocus: false,
    wrap: false,
    progress: 30,
  }

  gocheck = () => {
    if (this.state.checked === false) { this.setState({ checked: true }); } else {
      this.setState({ checked: false });
    }
  };

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

  render() {
    const { props: { todo, since, fore, index, remove } } = this;
    const { checked, trashfocus, wrap, progress } = this.state;
    return (
      <div className="toDoList">
        <div className={wrap ? 'toDoListElem unwraped' : 'toDoListElem'}>
          <div className="checkbox" onClick={this.gocheck}>
            <i className={checked ? 'fa fa-check check' : ''} aria-hidden="true" />
          </div>
          <p className="to_do">{todo}</p>
          <p className="since">Since: {since}</p>
          <p className="fore">For: {fore}</p>
          <div className="more">
            <i
              className={wrap ? 'fa fa-chevron-up chev' : 'fa fa-chevron-down chev'}
              aria-hidden="true"
              onClick={this.affmore}
            />
          </div>
          <div className="delete">
            <i
              className={trashfocus ? 'fa fa-trash poubelle' : 'fa fa-trash-o poubelle'}
              aria-hidden="true"
              onMouseEnter={this.handletrashfocus}
              onMouseLeave={this.handletrashfocus}
              onClick={() => remove(index)}
            />
          </div>
          <div className="progressBar">
            <div className="progressBarInner">
              <div className="cursor" />
            </div>
            <p className="progressScore">{progress}%</p>
          </div>
        </div>
      </div>
    );
  }
}

export default toDoList;
