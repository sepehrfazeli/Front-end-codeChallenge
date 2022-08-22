import React, { useEffect, useState } from 'react';
import { UilArrowLeft } from '@iconscout/react-unicons';
import './Information.css';
import { Link } from 'react-router-dom';
import { API } from '../../../util/API';


function Information(props) {

  
  const [searchResults, setsearchRestults] = useState(null);
  
  console.log(searchResults);

  useEffect(() => {
    API.showDetail(props.card).then((searchResults) => {
      setsearchRestults(searchResults);
    });
  }, [props.card]);

  function borderSelect(country) {
    props.onborder(country);
  }

  function bor(Borders) {
    return (
      <div className="links">
        
        {Borders &&
          Borders.map((country) => {
            return (
              <button key={country} onClick={() => borderSelect(country)}> {country} </button>
            );
          })}
        
      </div>
    );
  }

  if (!searchResults) return <div data-testid="Information-icon-test">Loading...</div>;
  try {
    return (
      <div className="Information">
        <div className="navbar">
          <Link to="/" className="back">
            <button>
              <UilArrowLeft data-testid="Information-icon-test" size="20" color="#0000004d" /> Back
            </button>
          </Link>
        </div>
        <div className="flaginfo">
          <img src={searchResults.flag} alt="" />
          <div className="info">
            <h4> {searchResults.name} </h4>
            <div className="detail">
              <ul>
                <li> Native Name: {searchResults.nativeName} </li>
                <li> Population: {searchResults.Population} </li>
                <li> Region: {searchResults.Region} </li>
                <li> Sub Region: {searchResults.Subregion} </li>
                <li> Capital: {searchResults.Capital} </li>
              </ul>
              <ul>
                <li> Top Level Domain: {searchResults.Tld} </li>
                <li> Currencies: {searchResults.Currencies} </li>
                <li> Languages: {searchResults.Languages} </li>
              </ul>
            </div>
            <div className="refers">
              <h5> Border Countries: </h5> {bor(searchResults.Borders)}
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.log(error);
  }
}

export default Information;
