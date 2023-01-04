import { render, screen } from '../../../tests/test-utils';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';
import ProductDisplay from './ProductDisplay';

describe('ProductDisplay', () => {
  it('renders correctly', () => {
    render(<ProductDisplay params={params} />);

    const headingText = screen.getByRole('heading');
    expect(headingText).toBeInTheDocument();
  });
});
