import { render, screen } from '../../../tests/test-utils';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';
import SimilarProducts from './SimilarProducts';

describe('SimilarProducts', () => {
  it('renders correctly', () => {
    render(<SimilarProducts />);

    const mainWrapper = screen.getByRole('main');
    expect(mainWrapper).toBeInTheDocument();
  });
});