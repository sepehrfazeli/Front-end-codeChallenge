import React from 'react';
import { createRoot } from 'react-dom/client';
import CardList from './../CardList';
import { act } from 'react-dom/test-utils';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


let container;

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
    createRoot(container).render(<CardList/>);
  });
});


it('should CardList be visible without crashing', () => { 

  const {getByTestId} = render(<CardList/>);
  expect(getByTestId('CardList-test')).toBeVisible();

});

// it('should render Header h1 correctly', () => { 
//   const {getByTestId} = render(<Header/>);
//   expect(getByTestId('Header-h1-test')).toHaveTextContent('Where in the world?');
// });


// it('should render Header p correctly', () => { 
//   const {getByTestId} = render(<Header/>);
//   expect(getByTestId('Header-p-test')).toHaveTextContent('Dark Mode');
// });
