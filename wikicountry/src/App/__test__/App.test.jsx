import React from 'react';
// import { render } from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from '../App';
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
  // render(<App />, div);
  act(() => {
    createRoot(container).render(<App/>);
  });
  // ReactDOM.unmountComponentAtNode(div);
  // root.unmount();
});

it('should render App correctly', () => { 
  const {getByTestId} = render(<App/>);
  expect(getByTestId('App-test')).toHaveTextContent('g');
});
