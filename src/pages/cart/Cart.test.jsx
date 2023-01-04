import { render, screen } from '../../../tests/test-utils';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';
import Cart from './Cart';

describe('Cart', () => {
  it('renders correctly', () => {
    render(<Cart />);

    const mainWrapper = screen.getByRole('main');
    expect(mainWrapper).toBeInTheDocument();
  });
});
