import React from 'react';

const Banner = React.lazy(() => import('./Banner'));
const Info = React.lazy(() => import('./Info'));
const Featured = React.lazy(() => import('./Featured'));

const Home = () => {
  return (
    <main>
      <Banner />
      <Info />
      <Featured />
    </main>
  );
};

export default Home;
