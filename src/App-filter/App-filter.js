import React from 'react';
import './App-filter.css';

const AppFilter = (props) => {
  const buttonsData = [
    {
      name: 'all',
      label: 'All employees',
    },
    {
      name: 'boost',
      label: 'Career promotion',
    },

    {
      name: 'salary',
      label: 'Salary',
    },
  ];
  const buttons = buttonsData.map(({ name, label }) => {
    const active = props.filter === name;
    const clazz = active ? 'btn-light' : 'btn-outline-light';

    return (
      <button
        className={`btn ${clazz}`}
        type="button"
        key={name}
        onClick={() => props.onFilterSelect(name)}
      >
        {label}
      </button>
    );
  });

  return <div className="btn-group">{buttons}</div>;
};

export default AppFilter;
