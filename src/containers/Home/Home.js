import React, { Component } from 'react';

import Header from '../../components/Header';
import Todolist from '../../components/Todolist';
import Buttonadd from '../../components/Buttonadd';
import Addbox from '../../components/AddBox';
import { list } from '../../Constants';
import './Home.css';

class Home extends Component {

  state = {
    list,
    displaybox: false,
  };

  remove = (index) => {
    const { list } = this.state;
    this.setState({ list: list.filter((li, i) => i !== index) });
  };

  affaddbox = () => {
    if (this.state.displaybox === false) {
      this.setState({ displaybox: true });
    } else {
      this.setState({ displaybox: false });
    }
  };

  render() {
    const { list, displaybox, close } = this.state;
    return (
      <div className="homepage">
        <div className="todolist">
          <Header />
          {list.map((li, index) => (
            <Todolist
              key={index}
              index={index}
              remove={this.remove}
              {...li}
            />
          ))}
        </div>
        <Buttonadd
          affaddbox={this.affaddbox}
        />
        {displaybox && <Addbox
          affaddbox={this.affaddbox}
        />}
      </div>
    );
  }
}

export default Home;
