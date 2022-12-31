import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';
import Navbar from './Navbar';
import { BrowserRouter } from 'react-router-dom';

describe('Navbar', () => {
  it('renders correctly', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    const header = screen.getByRole('banner');
    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
    expect(header).toBeInTheDocument();
  });
  it('has the correct number of links', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    const links = screen.queryAllByRole('link');
    expect(links.length).toBe(5);
  });
});
