import { render, screen } from '../../../tests/test-utils';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';
import CartItems from './CartItems';

describe('CartItems', () => {
  it('renders correctly', () => {
    render(<CartItems />);

    const headingText = screen.getByRole('heading', {name: /Item/i});
    expect(headingText).toBeInTheDocument();
  });
});