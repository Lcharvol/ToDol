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
    sortBy: 'none',
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

    console.log(date);
    this.setState({
      list: [{
        todo,
        fore: date,
        since: '15/10/2017',
        done: 'no',
        id: index,
        done: false,
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
    } else {
      this.setState({ displayFakeResearchBox: true })
    }
  }

  sortByName = (a, b) => {
    this.setState({ sortBy: 'name' })
    if (a.todo < b.todo) {
      return (-1);
    }
    return (1);
  }

  sortByFor = (a, b) => {
    const yearA = a.fore.substring(6,10);
    const monthA = a.fore.substring(3,5);
    const dayA = a.fore.substring(0,2);
    const yearB = b.fore.substring(6,10);
    const monthB = b.fore.substring(3,5);
    const dayB = b.fore.substring(0,2);

    this.setState({ sortBy: 'for' })
    if (yearA < yearB) {
      return (-1);
    } else if (yearA > yearB) {
      return (1);
    }
    if (monthA < monthB) {
      return (-1);
    } else if (monthA > monthB) {
      return (1);
    }
    if (dayA < dayB) {
      return (-1);
    } else if (monthA > monthB) {
      return (1);
    }
    return (1);
  }


  sortBySince = (a, b) => {
    const yearA = a.since.substring(6,10);
    const monthA = a.since.substring(3,5);
    const dayA = a.since.substring(0,2);
    const yearB = b.since.substring(6,10);
    const monthB = b.since.substring(3,5);
    const dayB = b.since.substring(0,2);

    this.setState({ sortBy: 'since' })
    if (yearA < yearB) {
      return (-1);
    } else if (yearA > yearB) {
      return (1);
    }
    if (monthA < monthB) {
      return (-1);
    } else if (monthA > monthB) {
      return (1);
    }
    if (dayA < dayB) {
      return (-1);
    } else if (monthA > monthB) {
      return (1);
    }
    return (1);
  }

  sortBy = (by) => {
    let { list } = this.state;
    const { sortBy } = this.state;

    if (by === 1 && sortBy !== 'name') {
      list = list.sort(this.sortByName);
    } else if (by === 2 && sortBy !== 'for') {
      list = list.sort(this.sortByFor);
    } else if (by === 3 && sortBy !== 'since') {
      list = list.sort(this.sortBySince);
    }
    this.setState({ list })
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
        <SortBox
          sortBy={this.sortBy}
        />
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
