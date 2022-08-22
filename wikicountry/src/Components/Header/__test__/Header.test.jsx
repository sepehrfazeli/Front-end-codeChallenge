import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from './../Header';
import { act } from 'react-dom/test-utils';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';

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
  // render(<Header />, div);
  act(() => {
    createRoot(container).render(
      <Router>
        <Header />
      </Router>
    );
  });
  // ReactDOM.unmountComponentAtNode(div);
  // root.unmount();
});

it('should Header icon be visible without crashing', () => {
  const { getByTestId } = render(
    <Router>
      <Header />
    </Router>
  );
  expect(getByTestId('Header-icon-test')).toBeVisible();
});

it('should render Header h1 correctly', () => {
  const { getByTestId } = render(
    <Router>
      <Header />
    </Router>
  );
  expect(getByTestId('Header-h1-test')).toHaveTextContent(
    'Where in the world?'
  );
});

it('should render Header p correctly', () => {
  const { getByTestId } = render(
    <Router>
      <Header />
    </Router>
  );
  expect(getByTestId('Header-p-test')).toHaveTextContent('Dark Mode');
});
