import { render, screen } from '../../../tests/test-utils';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';
import ProductInfo from './ProductInfo';

describe('ProductInfo', () => {
  it('renders correctly', () => {
    render(<ProductInfo params='1' />);

    const mainWrapper = screen.getByRole('main');
    expect(mainWrapper).toBeInTheDocument();
  });
});