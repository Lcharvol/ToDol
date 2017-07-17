import React, { Component } from 'react';

import Header from '../../components/Header';
import Todolist from '../../components/Todolist';
import Buttonadd from '../../components/Buttonadd';
import Addbox from '../../components/AddBox';
import ResearchBox from '../../components/ResearchBox';
import SortBox from '../../components/SortBox';
import TopArrow from '../../components/TopArrow';
import { list } from '../../Constants';
import './Home.css';

class Home extends Component {

  state = {
    list,
    displaybox: false,
    research: '',
    displayTopArrow: false,
    displayFakeResearchBox: false,
  };

  remove = (index) => {
    const { list } = this.state;
    this.setState({ list: list.filter((li) => li.id !== index) });
  };

  affaddbox = () => {
    if (this.state.displaybox === false) {
      this.setState({ displaybox: true });
    } else {
      this.setState({ displaybox: false });
    }
  };

  generateId = () => {
    const { list } = this.state;
    let id = 0;

    for (let i = 0; i < list.length; i++) {
      if (list[i].id >= id) { id = list[i].id + 1; }
    }
    return (id);
  }

  publish = (todo, date) => {
    const { list } = this.state;
    const index = this.generateId();

    this.setState({
      list: [{
        todo,
        fore: date,
        since: '15/10/2017',
        done: 'no',
        id: index,
        subtasks: [],
      },
        ...list,
      ],
      displaybox: false,
    });
  };

  research = (value) => {
    this.setState({ research: value });
  }

  handleDisplayTopArrow = () => {
    if (window.scrollY < 194) { this.setState({ displayTopArrow: false }); }
    if (window.scrollY >= 194) { this.setState({ displayTopArrow: true }); }
  }

  displayFakeResearchBox = () => {
    if (this.state.displayFakeResearchBox === true) {
      this.setState({ displayFakeResearchBox: false })
    }
    else {
      this.setState({ displayFakeResearchBox: true })
    }
  }

  render() {
    const { list, displaybox, displayTopArrow, research, displayFakeResearchBox } = this.state;

    window.addEventListener('scroll', this.handleDisplayTopArrow, false);
    return (
      <div className="homepage">
        <Header />
        {displayFakeResearchBox && <div className="fakeResearchBox" />}
        <ResearchBox
          displayFakeResearchBox={this.displayFakeResearchBox}
          research={this.research}
        />
        <SortBox />
        {list.map((li) => (
          <Todolist
            key={li.id}
            remove={this.remove}
            research={research}
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
        {displayTopArrow && <TopArrow />}
      </div>
    );
  }
}

export default Home;
