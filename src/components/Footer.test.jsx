import { getByRole, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';
import Footer from './Footer';

describe('footer', () => {
  it('renders correctly', () => {
    render(<Footer />);

    const footer = screen.getByRole('contentinfo');
    const nav = screen.getByRole('navigation');
    const navList = screen.getByRole('list');

    expect(footer).toBeInTheDocument();
    expect(nav).toBeInTheDocument();
    expect(navList).toBeInTheDocument();
  });
});
