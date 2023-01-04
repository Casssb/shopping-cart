import { Box, Container } from '@mui/material';
import React from 'react';
import CartItems from './CartItems';
import CartSummary from './CartSummary';

const Cart = () => {
  return (
    <Container component={'main'}>
      <Box
        display={'flex'}
        flexDirection={{ xs: 'column', md: 'row' }}
        justifyContent={'space-between'}
        padding={'1rem'}
        gap={'2rem'}
      >
        <CartItems />
        <CartSummary />
      </Box>
    </Container>
  );
};

export default Cart;
