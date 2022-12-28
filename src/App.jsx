import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import React, { Suspense } from 'react';
import { CircularProgress } from '@mui/material';

const Cart = React.lazy(() => import('./pages/cart/Cart'));
const Home = React.lazy(() => import('./pages/home/Home'));
const Shop = React.lazy(() => import('./pages/shop/Shop'));
const NoMatch = React.lazy(() => import('./pages/NoMatch'));

import RootLayout from './layouts/RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
  )
);
function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
