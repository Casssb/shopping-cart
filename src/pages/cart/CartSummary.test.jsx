import { render, screen } from '../../../tests/test-utils';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';
import CartSummary from './CartSummary';

describe('CartSummary', () => {
  it('renders correctly', () => {
    render(<CartSummary />);

    const headingText = screen.getByRole('heading', { name: /Order Summary/i });
    const buyNowButton = screen.getByRole('button', { name: /Buy Now/i });
    expect(headingText).toBeInTheDocument();
    expect(buyNowButton).toBeInTheDocument();
  });
});
