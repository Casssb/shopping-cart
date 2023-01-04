import { Box } from '@mui/material';
import React from 'react';

const Banner = React.lazy(() => import('./Banner'));
const Info = React.lazy(() => import('./Info'));
const Featured = React.lazy(() => import('./Featured'));

const Home = () => {
  return (
    <Box component={'main'}>
      <Banner />
      <Info />
      <Featured />
    </Box>
  );
};

export default Home;
