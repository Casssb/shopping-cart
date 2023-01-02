import { Box, Container } from '@mui/material';
import React from 'react';
import ProductDisplay from './ProductDisplay';
import { useParams } from 'react-router-dom';
import ProductInfo from './ProductInfo';
import SimilarProducts from './SimilarProducts';

const Product = () => {
  const params = useParams();
  return (
    <Container maxWidth={'xl'} component={'main'}>
      <Box
        display={'flex'}
        flexDirection={{xs: 'column', md: 'row'}}
        width={'100%'}
        height={'100%'}
        justifyContent={'center'}
      >
        <ProductDisplay params={params} />
        <Box
          display={'flex'}
          height={'100%'}
          width={'100%'}
          flexDirection={'column'}
          margin={'2rem'}
          flex={1}
        >
          <ProductInfo params={params} />
          <SimilarProducts params={params} />
        </Box>
      </Box>
    </Container>
  );
};

export default Product;
