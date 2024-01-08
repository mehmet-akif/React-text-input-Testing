import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('renders text input with placeholder', () => {
  const { getByPlaceholderText } = render(<App />);
  const inputElement = getByPlaceholderText('Type something...');
  expect(inputElement).toBeInTheDocument();
});

test('updates input value on change', () => {
  const { getByPlaceholderText, getByText } = render(<App />);
  const inputElement = getByPlaceholderText('Type something...');
  const displayElement = getByText(/You typed/i);

  fireEvent.change(inputElement, { target: { value: 'Hello, World!' } });

  expect(displayElement).toHaveTextContent('You typed: Hello, World!');
});
