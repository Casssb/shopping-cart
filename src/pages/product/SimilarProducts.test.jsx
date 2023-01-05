import { render, screen } from '../../../tests/test-utils';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';
import SimilarProducts from './SimilarProducts';

const params = {
  id: 'shape01',
};

describe('SimilarProducts', () => {
  it('renders correctly (with props)', () => {
    render(<SimilarProducts params={params} />);

    const productsList = screen.getByRole('list');
    expect(productsList).toBeInTheDocument();
  });
});