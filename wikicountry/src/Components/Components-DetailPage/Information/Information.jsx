import React from 'react';
import { UilArrowLeft } from '@iconscout/react-unicons';
import './Information.css';
// import { Link } from 'react-router-dom';

function Information() {
  return (
    <div className="Information">
      <div className="navbar">
        <div to="/" className="back">
          <a href="./index.html">
            <button>
              <UilArrowLeft size="20" color="#0000004d" /> Back
            </button>
          </a>
        </div>
      </div>
      <div className="flaginfo">
        <img src='https://flagcdn.com/w320/be.png' alt="" />
        <div className="info">
          <h4>Belgium</h4>
          <div className="detail">
            <ul>
              <li>Native Name: België</li>
              <li>Population: 11,555,997</li>
              <li>Region: Europe</li>
              <li>Sub Region: Western Europe</li>
              <li>Capital: Brussels</li>
            </ul>
            <ul>
              <li>Top Level Domain: .be</li>
              <li>Currencies: Euro</li>
              <li>Languages: GermanFrenchDutch</li>
            </ul>
          </div>
          <div className="refers">
            <h5>Border Countries:</h5>
            <div className="links">
              <button>France</button>
              <button>Germany</button>
              <button>Netherlands</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;
