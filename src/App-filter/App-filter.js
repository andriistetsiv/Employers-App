import React from 'react';
import './App-filter.css'

const AppFilter = () => {
  return (
    <div className="btn-group">
      <button className="btn btn-light" type="button">
        All employees
      </button>
      <button className="btn btn-outline-light" type="button">
        Career promotion
      </button>
      <button className="btn btn-outline-light" type="button">
        Salary
      </button>
    </div>
  );
};

export default AppFilter;
