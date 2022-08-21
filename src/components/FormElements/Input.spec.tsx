import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import Input from './Input';

test('renders Input field Component', () => {
  render(
    <Provider store={store}>
      <Input id='title' name='title' value='my field' onChange={jest.fn} />
    </Provider>
  );

  expect(screen.getByText(/title/i)).toBeInTheDocument();
});

test('renders Input checkbox field Component', () => {
  render(
    <Provider store={store}>
      <Input id='title' type='checkbox' name='title' value='my field' onChange={jest.fn} />
    </Provider>
  );
    const checkboxField = screen.getByLabelText(/title/i);
  expect(checkboxField).toBeInTheDocument();
  expect(checkboxField).not.toBeChecked();
  fireEvent.click(checkboxField );
  expect(checkboxField).toBeChecked();
});
