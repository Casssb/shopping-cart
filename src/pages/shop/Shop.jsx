import { Box, Container } from '@mui/material';
import React, { useState } from 'react';
import ShopFilters from './ShopFilters';
import ShopProducts from './ShopProducts';
import { sortFully } from '../../utils/helpers';
import { ShopContext } from '../../context/ShopContext';

const Shop = () => {
  const [category, setCategory] = useState('all');
  const [value, setValue] = useState('highToLow');

  const {
    cachedState: {
      state: { products },
    },
  } = ShopContext();

  const sortedProducts = sortFully(products, value, category);

  const handleCatChange = (event, nextcategory) => {
    setCategory(nextcategory);
  };

  const handleValueChange = (event, nextValue) => {
    setValue(nextValue);
  };

  return (
    <Container maxWidth={'xl'} component={'main'}>
      <Box
        display={'flex'}
        flexDirection={{ xs: 'column', md: 'row' }}
        justifyContent={'space-around'}
        padding={'2rem'}
      >
        <ShopFilters
          category={category}
          handleCatChange={handleCatChange}
          value={value}
          handleValueChange={handleValueChange}
        ></ShopFilters>
        <ShopProducts sortedProducts={sortedProducts}></ShopProducts>
      </Box>
    </Container>
  );
};

export default Shop;
