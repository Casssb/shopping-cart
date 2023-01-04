import { render, screen } from '../../tests/test-utils';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';
import Loading from './Loading';

describe('Loading', () => {
  it('renders correctly', () => {
    render(<Loading />);

    const mainContent = screen.getByRole('main');
    expect(mainContent).toBeInTheDocument();
  });
});
