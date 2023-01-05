import { render, screen } from '../../../tests/test-utils';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';
import ProductInfo from './ProductInfo';

const params = {
  id: 'shape01',
};

describe('ProductInfo', () => {
  it('renders correctly (with props)', () => {
    render(<ProductInfo params={params} />);

    const productTittle = screen.getByRole('heading', {
      name: /Band Logo/i,
    });
    expect(productTittle).toBeInTheDocument();
  });
});
