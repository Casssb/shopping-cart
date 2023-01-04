import { render, screen } from '../../../tests/test-utils';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';
import Featured from './Featured';

describe('Featured', () => {
  it('renders correctly', () => {
    render(<Featured />);

    const headingText = screen.getByRole('heading', { name: /Featured Art/i });
    expect(headingText).toBeInTheDocument();
  });
});
