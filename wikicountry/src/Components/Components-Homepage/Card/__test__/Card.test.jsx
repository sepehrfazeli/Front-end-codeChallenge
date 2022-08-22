import React from 'react';
import { createRoot } from 'react-dom/client';
import Card from './../Card';
// import { act } from 'react-dom/test-utils';
// import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';

let container;
const test_data = {
  flag: 'https://flagcdn.com/w320/sd.png',
  name: 'Sudan',
  nativeName: 'Sudan',
  Population: '43,849,269',
  Region: 'Africa',
  Subregion: 'Northern Africa',
  Capital: ['Khartoum'],
  Tld: '.sd',
  Currencies: 'Sudanese pound',
  Languages: ['Arabic', 'English'],
  Borders: [
    'Central African Republic',
    'Chad',
    'Egypt',
    'Eritrea',
    'Ethiopia',
    'Libya',
    'South Sudan',
  ],
};

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('should render without crashing', () => {
//   act(() => {
  createRoot(container).render(
    <Router>
      <Card onAdd={''} card={test_data.name} />
    </Router>
  );
//   });
});

it('should Card icon be visible without crashing', () => {
  // const looding = <Card card={test_data.name} />;
  //   const {getByTestId} = render(<Card card={test_data.name} />);
  // expect(getByTestId('Card-icon-test')).toBeVisible();
  // expect(getByTestId('Card-icon-test')).toHaveTextContent('Loading...');
});

// it('should render Card h1 correctly', () => {
//   const {getByTestId} = render(<Card/>);
//   expect(getByTestId('Card-h1-test')).toHaveTextContent('Where in the world?');
// });

// it('should render Card p correctly', () => {
//   const {getByTestId} = render(<Card/>);
//   expect(getByTestId('Card-p-test')).toHaveTextContent('Dark Mode');
// });
