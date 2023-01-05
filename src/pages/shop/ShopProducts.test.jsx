import { render, screen } from '../../../tests/test-utils';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';
import ShopProducts from './ShopProducts';

const sortedProducts = [
  {
    ai: 'Midjourney',
    category: 'misc',
    id: 'misc01',
    imageSrc: '/src/assets/images/misc-innocence-stars.webp',
    name: 'Stars (innocence)',
    price: 500,
    prompt: 'Thoughts of innocence falling from the stars',
  },
];

describe('ShopProducts', () => {
  it('renders correctly', () => {
    render(<ShopProducts sortedProducts={sortedProducts} />);

    const priceHeading = screen.getByRole('heading', { name: /Price: 500/i });
    expect(priceHeading).toBeInTheDocument();
  });

  it('renders with the correct number of buttons', () => {
    render(<ShopProducts sortedProducts={sortedProducts} />);

    const buttonGroup = screen.queryAllByRole('button');
    expect(buttonGroup).toHaveLength(2);
  });
});
