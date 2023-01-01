import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import React from 'react';
import RootLayout from './layouts/RootLayout';
import Loading from './components/Loading';

const Cart = React.lazy(() => import('./pages/cart/Cart'));
const Home = React.lazy(() => import('./pages/home/Home'));
const Shop = React.lazy(() => import('./pages/shop/Shop'));
const NoMatch = React.lazy(() => import('./pages/NoMatch'));
const Product = React.lazy(() => import('./pages/product/Product'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="cart" element={<Cart />} />
      <Route path="product/:id" element={<Product />} />
      <Route path="*" element={<NoMatch />} />
    </Route>
  )
);
function App() {
  return (
    <RouterProvider router={router} fallbackElement={<Loading />} />
  );
}

export default App;
