import React from 'react';
import './Header.css';
import { UilMoon } from '@iconscout/react-unicons';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="Header" data-testid="Header-test">
      <div className="container">
        <Link to="/" >
          <h1 data-testid="Header-h1-test"> Where in the world? </h1>
        </Link>
        <button data-testid="Header-button-test">
          <UilMoon data-testid="Header-icon-test" className="icon" />
          <p data-testid="Header-p-test">Dark Mode</p>
        </button>
      </div>
    </header>
  );
}

export default Header;
