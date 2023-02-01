import AppInfo from '../App-info/App-info';
import SearchPanel from '../Search-panel/Search-panel';
import AppFilter from '../App-filter/App-filter';
import EmployersList from '../Employers-list/Employers-list';
import EmployersAddForms from '../Employers-add-forms/Employers-add-forms';

import './App.css';

function App() {
  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter/>
      </div>

      <EmployersList/>
      <EmployersAddForms/>

    </div>
  );
}

export default App;
