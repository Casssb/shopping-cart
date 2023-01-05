import { render, screen } from '../../tests/test-utils';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';
import NoMatch from './NoMatch';
import userEvent from '@testing-library/user-event';

describe('NoMatch', () => {
  it('renders correctly', () => {
    render(<NoMatch />);

    const headingText = screen.getByRole('heading', {
      name: /404 error: Page not found/i,
    });
    expect(headingText).toBeInTheDocument();
  });

  it('has the correct number of buttons', () => {
    render(<NoMatch />);

    const navButtons = screen.queryAllByRole('button');
    expect(navButtons).toHaveLength(3);
  });

  it('shop button navigates to correct page when clicked', async () => {
    render(<NoMatch />);

    const shopButton = screen.getByRole('button', { name: /Shop/i });
    await userEvent.click(shopButton);
    expect(global.window.location.href).toContain('/shop');
  });
});
