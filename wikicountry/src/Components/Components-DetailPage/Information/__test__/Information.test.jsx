import React from 'react';
// import { render } from 'react-dom';
import { createRoot } from 'react-dom/client';
import Information from './../Information';
import { act } from 'react-dom/test-utils';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


let container;
const test_data = {
  'flag': 'https://flagcdn.com/w320/sd.png',
  'name': 'Sudan',
  'nativeName': 'Sudan',
  'Population': '43,849,269',
  'Region': 'Africa',
  'Subregion': 'Northern Africa',
  'Capital': [
    'Khartoum'
  ],
  'Tld': '.sd',
  'Currencies': 'Sudanese pound',
  'Languages': [
    'Arabic',
    'English'
  ],
  'Borders': [
    'Central African Republic',
    'Chad',
    'Egypt',
    'Eritrea',
    'Ethiopia',
    'Libya',
    'South Sudan'
  ]
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
  act(() => {
    createRoot(container).render(<Information card={test_data.name} />);
  });
});


it('should Information icon be visible without crashing', () => { 
  // const looding = <Information card={test_data.name} />;
  const {getByTestId} = render(<Information card={test_data.name} />);
  // expect(getByTestId('Information-icon-test')).toBeVisible();
  // expect(getByTestId('Information-icon-test')).toHaveTextContent('Loading...');

});

// it('should render Information h1 correctly', () => { 
//   const {getByTestId} = render(<Information/>);
//   expect(getByTestId('Information-h1-test')).toHaveTextContent('Where in the world?');
// });


// it('should render Information p correctly', () => { 
//   const {getByTestId} = render(<Information/>);
//   expect(getByTestId('Information-p-test')).toHaveTextContent('Dark Mode');
// });
