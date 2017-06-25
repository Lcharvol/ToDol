import React, { Component } from 'react';

import './addbox.css';

class Addbox extends Component {

  state = {
    open: false,
  }

  render() {
    const { affaddbox } = this.props;

    return (
      <div className="addbox">
        <i className="fa fa-times cross fa-2x" aria-hidden="true" onClick={affaddbox} />
        <div className="addboxinner">
          <form>
            <input type="text" name="todo" />
            <input type="submit" value="Add" className="validate" />
          </form>
        </div>
      </div>
    );
  }
}

export default Addbox;
