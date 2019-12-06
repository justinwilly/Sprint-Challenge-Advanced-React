import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import Search from './components/Search';
import App from './App';



test('Search renders without crashing', () => {
  render(<App />)
})

test("Header is found", () => {
  const { getByText } = render(<App />);

  getByText(/Women's World Cup/i)
})

test("Button works", () => {
  const {getByText} = render(<App />)
  fireEvent.click(getByText("Search"))
})

test("Player exists", () => {
  const {findByText} = render(<App />)
  findByText(/Alex Morgan/i)
})