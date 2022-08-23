import React, { useEffect, useState } from 'react';
import { UilArrowLeft } from '@iconscout/react-unicons';
import './Information.css';
import { Link } from 'react-router-dom';
import { API } from '../../../util/API';


function Information(props) {

  
  const [searchResults, setsearchRestults] = useState(null);
  
  

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
        <div className='navbox'>
          <div className="navbar">
            <Link to="/" className="back">
              <button>
                <UilArrowLeft data-testid="Information-icon-test" size="20" color="#0000004d" /> Back
              </button>
            </Link>
          </div>
        </div>
        <div className="flaginfo">
          <div className='image'>
            <img src={searchResults.flag} alt="" />
          </div>
          <div className="info">
            <h4> {searchResults.name} </h4>
            <div className="detail">
              <ul>
                <li><em> Native Name: </em>{searchResults.nativeName} </li>
                <li>  <em>  Population: </em>{searchResults.Population} </li>
                <li>  <em>  Region: </em>{searchResults.Region} </li>
                <li>  <em>  Sub Region: </em>{searchResults.Subregion} </li>
                <li>  <em>  Capital: </em>{searchResults.Capital} </li>
              </ul>
              <ul>
                <li>  <em>  Top Level Domain: </em>{searchResults.Tld} </li>
                <li>  <em>  Currencies: </em>{searchResults.Currencies} </li>
                <li>  <em>  Languages: </em>{searchResults.Languages} </li>
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
