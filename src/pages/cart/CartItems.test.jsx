import { render, screen } from '../../../tests/test-utils';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import CartItems from './CartItems';

describe('CartItems', () => {
  it('renders correctly', () => {
    render(<CartItems />);

    const headingText = screen.getByRole('heading', {name: /Item/i});
    expect(headingText).toBeInTheDocument();
  });

  it('Continue button navigates to correct page when clicked', async () => {
    render(<CartItems />);

    const shopButton = screen.getByRole('button', { name: /Continue Shopping/i });
    await userEvent.click(shopButton);
    expect(global.window.location.href).toContain('/shop');
  });
});