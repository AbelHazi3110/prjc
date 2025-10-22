import { render, screen } from '@testing-library/react';
import App from './App';
import axios from 'axios';

jest.mock('react-router-dom');
jest.mock('axios');

test('renders rate your landlord heading', async () => {
  axios.get.mockResolvedValue({ data: [] });
  render(<App />);
  const headingElement = await screen.findByText(/Rate Your Landlord/i);
  expect(headingElement).toBeInTheDocument();
});
