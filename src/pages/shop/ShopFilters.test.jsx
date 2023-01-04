import { render, screen } from '../../../tests/test-utils';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';
import ShopFilters from './ShopFilters';

describe('ShopFilters', () => {
  it('renders correctly', () => {
    render(<ShopFilters />);

    const allSelectionButton = screen.getByRole('button', {name: /All/i});
    expect(allSelectionButton).toBeInTheDocument();
  });
});