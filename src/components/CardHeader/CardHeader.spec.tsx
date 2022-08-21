import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import CardHeader from './CardHeader';

test('renders Card Header Component', () => {
  render(
    <Provider store={store}>
      <CardHeader title='My Card' onDelete={jest.fn} />
    </Provider>
  );

  expect(screen.getByText(/My Card/i)).toBeInTheDocument();
});
