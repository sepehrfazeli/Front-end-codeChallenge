import React from 'react';
import { createRoot } from 'react-dom/client';
import Results from '../Results';
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
    createRoot(container).render(<Results />);
  });
});


it('should CardList be visible without crashing', () => { 

  const {getByTestId} = render(<Results/>);
  expect(getByTestId('Results-test')).toBeVisible();

});


