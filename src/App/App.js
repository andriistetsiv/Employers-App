import AppInfo from '../App-info/App-info';
import SearchPanel from '../Search-panel/Search-panel';
import AppFilter from '../App-filter/App-filter';
import EmployersList from '../Employers-list/Employers-list';
import EmployersAddForms from '../Employers-add-forms/Employers-add-forms';
import './App.css';


const data = [
  { name: 'Andrii.S', salary: 1800,  increase: true, boost: false},
  { name: 'Inna.K', salary: 1200, increase: false, boost: true},
  { name: 'Julia.T', salary: 800, increase: true, boost: false}
]

function App() {
  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter/>
      </div>

      <EmployersList data={data} />
      <EmployersAddForms/>

    </div>
  );
}

export default App;
