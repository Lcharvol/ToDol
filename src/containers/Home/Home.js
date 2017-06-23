import React, { Component } from 'react';

import Header from '../../components/Header';
import Todolist from '../../components/Todolist';
import TodolistBox from '../../components/TodolistBox';
import { list } from '../../Constants';
import './Home.css';

class Home extends Component {

  state = {
    list,
  };

  remove = (index) => {
    const { list } = this.state;
    this.setState({ list: list.filter((li, i) => i !== index) });
  };

  render() {
    const { list } = this.state;
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
      </div>
    );
  }
}

export default Home;
