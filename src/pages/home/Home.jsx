import React from 'react';
import { ShopContext } from '../../context/ShopContext';

const Home = () => {
  const {
    state: { products },
  } = ShopContext();

  console.log(products);
  return <div><img src={products[1].imageSrc} alt="" /></div>;
};

export default Home;
