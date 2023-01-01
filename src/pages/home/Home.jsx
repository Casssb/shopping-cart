import React from 'react';


const Banner = React.lazy(() => import('./Banner'))

const Home = () => {
  return (
    <main>
      <Banner />
    </main>
  );
};

export default Home;
