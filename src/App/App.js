import { Component } from 'react';
import AppInfo from '../App-info/App-info';
import SearchPanel from '../Search-panel/Search-panel';
import AppFilter from '../App-filter/App-filter';
import EmployersList from '../Employers-list/Employers-list';
import EmployersAddForms from '../Employers-add-forms/Employers-add-forms';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: 'Andrii.S', salary: 1800, increase: false, boost: true, id: 1 },
        { name: 'Inna.K', salary: 1200, increase: true, boost: false, id: 2 },
        { name: 'Julia.T', salary: 800, increase: false, boost: false, id: 3 },
      ],
    };
    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      //const index = data.findIndex(elem => elem.id === id);

      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      boost: false,
      id: this.maxId++,
    };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  };

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      }),
    }));
  };

  // onToggleRise = (id) => {
  //   this.setState(({ data }) => ({
  //     data: data.map((item) => {
  //       if (item.id === id) {
  //         return { ...item, boost: !item.boost };
  //       }
  //       return item;
  //     }),
  //   }));
  // };

  render() {
    const employees = this.state.data.length;
    const increased = this.state.data.filter((item) => item.increase).length;
    return (
      <div className="app">
        <AppInfo employees={employees} increased={increased} />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployersList
          data={this.state.data}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <EmployersAddForms onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
