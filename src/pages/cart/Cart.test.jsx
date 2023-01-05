import { render, screen } from '../../../tests/test-utils';
import { describe, expect, it, vi } from 'vitest';
import '@testing-library/jest-dom';
import Cart from './Cart';

vi.mock('./CartItems', () => {
  return {
    default: () => {
      <section data-testid="cart-items">test</section>;
    },
  };
});

describe('Cart', () => {
  it('renders correctly', () => {
    render(<Cart />);

    const mainWrapper = screen.getByRole('main');
    expect(mainWrapper).toBeInTheDocument();
  });

  // it('renders the correct child-components', () => {
  //   render(<Cart />);
  //   const cartItems = screen.getByTestId('cart-items');
  //   expect(cartItems).toBeInTheDocument();
  // });
});
