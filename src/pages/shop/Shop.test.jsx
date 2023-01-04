import { render, screen } from '../../../tests/test-utils';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';
import Shop from './Shop';

describe('Shop', () => {
  it('renders correctly', () => {
    render(<Shop />);

    const mainWrapper = screen.getByRole('main');
    expect(mainWrapper).toBeInTheDocument();
  });
});