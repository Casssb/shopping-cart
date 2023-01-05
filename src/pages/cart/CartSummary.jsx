import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
  useMediaQuery,
} from '@mui/material';
import React from 'react';
import { ShopContext } from '../../context/ShopContext';

const CartSummary = () => {
  const {
    cachedState: {
      state: { cart },
    },
  } = ShopContext();

  const cartPriceTotal = cart.reduce((acc, c) => acc + c.quantity * c.price, 0);
  const cartItemsTotal = cart.reduce((acc, c) => acc + c.quantity, 0);

  const isMobile = useMediaQuery(`(max-width:600px)`);

  return (
    <Box flex={1} component={'section'} raised='true'>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h6" mb={'1rem'}>
            Order Summary
          </Typography>
          <Divider />
          <Typography mt={'0.5rem'}>
            Subtotal {`(${cartItemsTotal} items) `}:{' '}
            <Typography variant="span" fontWeight={'bold'} color="primary">
              {cartPriceTotal}
            </Typography>
          </Typography>
          <Typography mb={'0.5rem'}>
            Shipping:{' '}
            <Typography variant="span" fontWeight={'bold'}>
              Free
            </Typography>
          </Typography>
          <Divider />
          <Typography fontWeight={'700'} mt={'1rem'} variant="h6">
            Total:{' '}
            <Typography variant="span" fontWeight={'bold'} color="secondary">
              {cartPriceTotal}
            </Typography>
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="large"
            disabled={cartItemsTotal > 0 ? false : true}
            variant={isMobile ? 'contained' : 'outlined'}
            color="success"
          >
            Buy Now
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default CartSummary;
