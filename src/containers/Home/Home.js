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

  publish = (todo, date) => {
    const { list } = this.state;

    this.setState({
      list: [{
        todo,
        fore: date,
        since: '15/10/2017',
        done: 'no',
      },
        ...list,
      ],
      displaybox: false,
    });
  };

  render() {
    const { list, displaybox, close } = this.state;

    return (
      <div className="homepage">
        <Header />
        {list.map((li, index) => (
          <Todolist
            key={li.id}
            remove={this.remove}
            {...li}
          />
          ))}
        <Buttonadd
          affaddbox={this.affaddbox}
        />
        {displaybox && <Addbox
          affaddbox={this.affaddbox}
          publish={this.publish}
        />}
      </div>
    );
  }
}

export default Home;
