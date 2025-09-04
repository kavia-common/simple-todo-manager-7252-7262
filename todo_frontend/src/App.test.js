import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app title', () => {
  render(<App />);
  const titleEl = screen.getByText(/TODO APP/i);
  expect(titleEl).toBeInTheDocument();
});
