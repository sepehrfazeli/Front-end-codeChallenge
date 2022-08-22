import React, { useState,useEffect} from 'react';
import './Results.css';
import { API } from '../../../util/API';
import CardList from '../CardList/CardList';

function Results(props) {
  const [searchResults, setsearchResults] = useState(null);

  useEffect(() => {
    API.init().then((searchResults) => {
      setsearchResults(searchResults);
    });
  }, []);
  
  try {
    return (
      <div className="Results">
        <div className="navbar">
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