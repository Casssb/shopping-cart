import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Divider,
  Typography,
  useMediaQuery,
} from '@mui/material';
import React from 'react';
import { ShopContext } from '../../context/ShopContext';
import { useNavigate } from 'react-router-dom';

const CartItems = () => {
  const {
    cachedState: {
      state: { cart },
    },
  } = ShopContext();
  const { dispatch } = ShopContext();
  const isMobile = useMediaQuery(`(max-width:600px)`);
  const navigate = useNavigate();

  const cartItemsTotal = cart.reduce((acc, c) => acc + c.quantity, 0);

  return (
    <Box flex={3} component={'section'}>
      <Box
        display={{ xs: 'none', md: 'grid' }}
        gridTemplateColumns={'300px 1fr 1fr 1fr auto'}
        justifyContent={'center'}
        columnGap={'1rem'}
        py={'1rem'}
      >
        <Typography variant="h6">Item</Typography>
        <Typography variant="h6">Price</Typography>
        <Typography variant="h6">Quantity</Typography>
        <Typography variant="h6" display={{ xs: 'none', md: 'block' }}>
          Subtotal
        </Typography>
        <Typography variant="span"></Typography>
      </Box>
      <Divider />
      {cartItemsTotal === 0 && (
        <Typography variant="h6" padding={'1rem'}>
          Your cart is empty
        </Typography>
      )}
      {cart.map((item) => (
        <Box
          key={item.id}
          display={'grid'}
          gridTemplateColumns={{
            xs: 'minmax(200px, auto)  auto',
            sm: '300px 1fr 1fr  auto',
            md: '300px 1fr 1fr 1fr auto',
          }}
          justifyContent={'center'}
          columnGap={'1rem'}
          my={'1rem'}
        >
          <Box
            display={'flex'}
            justifyContent={'flex-start'}
            alignItems={'center'}
          >
            <Avatar
              variant="square"
              src={item.imageSrc}
              alt={item.name}
              sx={{ marginRight: '1rem' }}
            />
            <Typography>{item.name}</Typography>
          </Box>
          <Box
            display={'flex'}
            justifyContent={'flex-start'}
            alignItems={'center'}
          >
            <Typography>{item.price}</Typography>
          </Box>
          <Box
            display={'flex'}
            justifyContent={{ xs: 'center', sm: 'flex-start' }}
            alignItems={'center'}
            mt={{ xs: '1rem', sm: '0' }}
          >
            <ButtonGroup size="small" aria-label="increment=decrement buttons">
              <Button
                size="small"
                color={item.quantity === 1 ? 'error' : 'primary'}
                variant={isMobile ? 'contained' : 'outlined'}
                onClick={
                  item.quantity === 1
                    ? () =>
                        dispatch({
                          type: 'REMOVE_FROM_CART',
                          payload: item,
                        })
                    : () =>
                        dispatch({
                          type: 'DECREASE_ITEM_COUNT',
                          payload: item,
                        })
                }
              >
                {item.quantity === 1 ? 'X' : '-'}
              </Button>
              <Button
                size="small"
                disabled
                sx={{
                  '&.Mui-disabled': {
                    color: 'text.primary',
                  },
                }}
              >
                {item.quantity}
              </Button>
              <Button
                size="small"
                color={'primary'}
                variant={isMobile ? 'contained' : 'outlined'}
                onClick={() =>
                  dispatch({
                    type: 'INCREASE_ITEM_COUNT',
                    payload: item,
                  })
                }
              >
                +
              </Button>
            </ButtonGroup>
          </Box>
          <Box
            display={{ xs: 'none', md: 'flex' }}
            justifyContent={'flex-start'}
            alignItems={'center'}
          >
            <Typography>{item.quantity * item.price}</Typography>
          </Box>
        </Box>
      ))}
      <Divider />
      <Box display={'flex'} justifyContent={'space-between'} mt={'1rem'}>
        <Button
          variant={isMobile ? 'contained' : 'outlined'}
          onClick={() => navigate('/shop')}
        >
          Continue Shopping
        </Button>
        <Button
          color="error"
          disabled={cartItemsTotal > 0 ? false : true}
          variant={isMobile ? 'contained' : 'outlined'}
          onClick={() => {
            dispatch({ type: 'CLEAR_CART' });
          }}
        >
          Clear Cart
        </Button>
      </Box>
    </Box>
  );
};

export default CartItems;
