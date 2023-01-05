import { render, screen } from '../../../tests/test-utils';
import { describe, expect, it, vi } from 'vitest';
import '@testing-library/jest-dom';
import Product from './Product';

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useParams: () => ({
      id: 'shape01',
    }),
  };
});

describe('Product', () => {
  it('renders correctly', () => {
    render(<Product />);

    const mainWrapper = screen.getByRole('main');
    expect(mainWrapper).toBeInTheDocument();
  });
});
