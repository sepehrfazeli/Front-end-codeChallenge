import React from 'react';
import './FilterBar.css';


function FilterBar(props) {


  function handleTermChange(e) {
    props.onfilter(e.target.value);
  }

  return (
    <div data-testid='FilterBar-test' className="filterbar">
      <select
        name="filter"
        className="filter"
        onChange={handleTermChange}
      >
        <option defaultValue> Filter by Region </option>
        <option value="Africa"> Africa </option>
        <option value="America"> America </option>
        <option value="Asia"> Asia </option>
        <option value="Europe"> Europe </option>
        <option value="Oceania"> Oceania </option>
      </select>
    </div>
  );
}

export default FilterBar;