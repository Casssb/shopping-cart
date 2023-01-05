import { render, screen } from '../../tests/test-utils';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';
import Navbar from './Navbar';

describe('Navbar', () => {
  it('renders correctly', () => {
    render(<Navbar />);

    const header = screen.getByRole('banner');
    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
    expect(header).toBeInTheDocument();
  });
  it('has the correct number of links', () => {
    render(<Navbar />);

    const links = screen.queryAllByRole('link');
    expect(links.length).toBe(4);
  });
});
