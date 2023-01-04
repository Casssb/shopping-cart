import { render, screen } from '../../../tests/test-utils';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';
import ShopProducts from './ShopProducts';

describe('ShopProducts', () => {
  it('renders correctly', () => {
    render(<ShopProducts />);

    const removeButton = screen.getByRole('button', {name: /X Remove/i});
    expect(removeButton).toBeInTheDocument();
  });
});