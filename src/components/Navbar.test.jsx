import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';
import Navbar from './Navbar';
import { BrowserRouter } from 'react-router-dom';
import { Context } from '../context/ShopContext';

describe('Navbar', () => {
  it('renders correctly', () => {
    render(
      <BrowserRouter>
        <Context>
          <Navbar />
        </Context>
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
        <Context>
          <Navbar />
        </Context>
      </BrowserRouter>
    );

    const links = screen.queryAllByRole('link');
    expect(links.length).toBe(5);
  });
});
