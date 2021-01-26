import { render, screen } from '@testing-library/react';
import House from './House';

test('renders House', () => {
  render(<House />);
  const linkElement = screen.getByText(/Floor GF/i);
  expect(linkElement).toBeInTheDocument();
});
