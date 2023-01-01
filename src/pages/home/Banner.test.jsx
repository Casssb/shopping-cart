import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';
import Banner from './Banner';
import { BrowserRouter } from 'react-router-dom';

describe('Banner', () => {
  it('renders correctly', () => {
    render(
      <BrowserRouter>
        <Banner />
      </BrowserRouter>
    );

    const banner = screen.getAllByRole('section');

    expect(banner).toBeInTheDocument();
  });
});
