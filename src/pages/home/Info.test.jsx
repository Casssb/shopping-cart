import { render, screen } from '../../../tests/test-utils';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';
import Info from './Info';

describe('Info', () => {
  it('renders correctly', () => {
    render(<Info />);

    const headingText = screen.getByRole('heading', {
      name: /A selection of the/i,
    });
    expect(headingText).toBeInTheDocument();
  });
});
