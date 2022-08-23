import React, { useState, useEffect } from 'react';
import './Results.css';
import SearchBar from '../SearchBar/SearchBar';
import FilterBar from '../FilterBar/FilterBar';
import { API } from '../../../util/API';
import CardList from '../CardList/CardList';

function Results(props) {
  const [searchResults, setsearchResults] = useState(null);

  useEffect(() => {
    API.init().then((searchResults) => {
      setsearchResults(searchResults);
    });
  }, []);

  function search(name) {
    API.search(name).then((searchResults) => {
      setsearchResults(searchResults);
    });
  }

  function filter(region) {
    region = region !== 'Filter by Region' ? region : 'all';
    API.init(region).then((searchResults) => {
      setsearchResults(searchResults);
    });
  }
  try {
    return (
      <div data-testid="Results-test" className="Results">
        <div className="navbox">
          <div className="navbar">
            <SearchBar onSearch={search} />
            <FilterBar onfilter={filter} />
          </div>
        </div>
        <CardList
          isRemoval={false}
          onAdd={props.onAdd}
          cards={searchResults}
        />
      </div>
    );
  } catch (error) {
    console.log(error);
  }
}

export default Results;
