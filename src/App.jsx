import { Routes, Route } from 'react-router-dom';
import React, { Suspense } from 'react';
const Cart = React.lazy(() => import('./pages/cart/Cart'));
const Home = React.lazy(() => import('./pages/home/Home'));
const Shop = React.lazy(() => import('./pages/shop/Shop'));
const NoMatch = React.lazy(() => import('./pages/NoMatch'));
import Navbar from './components/Navbar';
import { CircularProgress } from '@mui/material';

function App() {
  return (
    <>
      <Navbar/>
      <Suspense fallback={<CircularProgress color="secondary" />}>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="shop" element={<Shop />}></Route>
          <Route path="cart" element={<Cart />}></Route>
          <Route path="*" element={<NoMatch />}></Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
