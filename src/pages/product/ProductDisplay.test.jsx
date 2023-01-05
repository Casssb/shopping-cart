import { render, screen, act } from '../../../tests/test-utils';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';
import ProductDisplay from './ProductDisplay';

const params = {
  id: 'shape01',
};

describe('ProductDisplay', () => {
  it('renders correctly (with props)', async () => {
    render(<ProductDisplay params={paramsh} />);
    await act(async () => {
      const headingText = await screen.findByRole('heading');
      expect(headingText).toBeInTheDocument();
    });
  });
});
