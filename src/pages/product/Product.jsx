import { Box, Container } from '@mui/material';
import React from 'react';
import ProductDisplay from './ProductDisplay';
import { useParams } from 'react-router-dom';
import ProductInfo from './ProductInfo';
import SimilarProducts from './SimilarProducts';

const Product = () => {
  const params = useParams();
  return (
    <Container maxWidth={'xl'}>
      <Box
        display={'flex'}
        width={'100%'}
        height={'100%'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <ProductDisplay params={params} />
        <Box display={'flex'} flexDirection={'column'}>
          <ProductInfo params={params} />
          <SimilarProducts params={params} />
        </Box>
      </Box>
    </Container>
  );
};

export default Product;
