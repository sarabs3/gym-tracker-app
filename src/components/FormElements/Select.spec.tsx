import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import Select from './Select';

test('renders Select field Component', () => {
  render(
    <Provider store={store}>
      <Select id='title' name='title' value='my field' onChange={jest.fn}>
        <option>First</option>
      </Select>
    </Provider>
  );

  expect(screen.getByText(/First/i)).toBeInTheDocument();
  expect(screen.getByText(/title/i)).toBeInTheDocument();
});
