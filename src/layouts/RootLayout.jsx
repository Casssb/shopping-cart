import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { CircularProgress } from '@mui/material';

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<CircularProgress color="secondary" />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default RootLayout;