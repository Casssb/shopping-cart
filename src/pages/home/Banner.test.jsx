import { render, screen } from '../../../tests/test-utils';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';
import Banner from './Banner';

describe('Banner', () => {
  it('renders correctly', () => {
    render(<Banner />);

    const shopNowButton = screen.getByRole('button', { name: /shop now/i });
    const mainText = screen.getByRole('heading', { name: /The latest in/i });

    expect(shopNowButton).toBeInTheDocument();
    expect(mainText).toBeInTheDocument();
  });
});
