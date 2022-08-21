import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import PageHeading from './PageHeading';

test('Page Heading Component', () => {
  render(
    <Provider store={store}>
      <PageHeading>Hello</PageHeading>
    </Provider>
  );

  expect(screen.getByText(/Hello/i)).toBeInTheDocument();
});
