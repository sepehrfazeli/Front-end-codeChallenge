import React from 'react';
import './SearchBar.css';
import { UilSearch } from '@iconscout/react-unicons';
import { useState } from 'react';

function SearchBartest(props) {

  const [term, setTerm] = useState(null);

  function handleTermChange(e) {
    setTerm(e.target.value);
  }
  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      search();
    }
  }

  function search() {
    props.onSearch(term);
  }
  return (
    <div data-testid='searchbar-test' className="searchbar">
      <UilSearch
        onClick={search}
        className="icon"
        size="20"
        color="#0000004d"
      />
      <input
        onChange={handleTermChange}
        onKeyPress={handleKeyPress}
        className="searchbox"
        placeholder="Search for a country..."
      ></input>
    </div>
  );
}

export default SearchBartest;