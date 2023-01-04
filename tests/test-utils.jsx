import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Context } from '../src/context/ShopContext';

const AllTheProviders = ({ children }) => {
  return (
    <BrowserRouter>
      <Context>{children}</Context>
    </BrowserRouter>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
