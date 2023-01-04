import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';
import Banner from './Banner';
import { BrowserRouter } from 'react-router-dom';
import { Context } from '../../context/ShopContext';

describe('Banner', () => {
  it('renders correctly', () => {
    render(
      <BrowserRouter>
        <Context>
          <Banner />
        </Context>
      </BrowserRouter>
    );

    const shopNowButton = screen.getByRole('button', { name: /shop now/i });
    const mainText = screen.getByRole('heading', { name: /The latest in/i });

    expect(shopNowButton).toBeInTheDocument();
    expect(mainText).toBeInTheDocument();
  });
});
