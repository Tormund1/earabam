import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import { StoreProvider } from './Store';

vi.mock('axios', () => ({
  default: {
    get: vi.fn(() => Promise.resolve({ data: [] })),
  },
}));

test('renders app brand', async () => {
  render(
    <StoreProvider>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </StoreProvider>
  );
  expect(await screen.findByText(/EArabam/i)).toBeInTheDocument();
});
