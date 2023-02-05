import './App-info.css';
import React from 'react';

const AppInfo = ({ employees, increased }) => {
  return (
    <div className="app-info">
      <h1>Accounting Employees in Company</h1>
      <h2>Total quantity of employee - {employees}</h2>
      <h3>Will receive an award - {increased}</h3>
    </div>
  );
};

export default AppInfo;
