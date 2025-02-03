
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Dashboard from './Dashboard';


test('Dashboard Renders', () => {
  render(<Dashboard />);
  const titleText = screen.getByText("Dashboard");
  expect(titleText).toBeInTheDocument();
});
