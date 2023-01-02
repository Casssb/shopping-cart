import {
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import React from 'react';
import { ShopContext } from '../../context/ShopContext';

const ProductInfo = ({ params }) => {
  const {
    cachedState: {
      state: { products, cart },
    },
  } = ShopContext();
  const { dispatch } = ShopContext();
  const activeProduct = products.find((prod) => prod.id === params.id);
  const isInCart = cart.some((item) => item.id === activeProduct.id);
  const cartElem = cart.find((item) => item.id === activeProduct.id);
  console.log(activeProduct, cart, isInCart);

  return (
    <Card>
      <CardContent>
        <Typography variant="h3" gutterBottom color={'primary'}>
          {activeProduct.name}
        </Typography>
        <Typography variant="h5" gutterBottom color={'text.secondary'}>
          By {activeProduct.ai}
        </Typography>
        <Typography variant="h4" fontWeight={'500'}>
          Cost: {activeProduct.price}
        </Typography>
      </CardContent>
      <CardActions sx={{ flexDirection: 'column', gap: '1rem', alignItems: 'start', p: '1rem' }}>
        <ButtonGroup size="small" aria-label="increment=decrement buttons">
          {isInCart ? (
            <>
              <Button
                size="large"
                color={cartElem.quantity === 1 ? 'error' : 'primary'}
                onClick={
                  cartElem.quantity === 1
                    ? () =>
                        dispatch({
                          type: 'REMOVE_FROM_CART',
                          payload: cartElem,
                        })
                    : () =>
                        dispatch({
                          type: 'DECREASE_ITEM_COUNT',
                          payload: cartElem,
                        })
                }
              >
                {cartElem.quantity === 1 ? 'X' : '-'}
              </Button>
              <Button size="large" disabled>
                {cartElem.quantity}
              </Button>
            </>
          ) : null}
          <Button
            size="large"
            color={!isInCart ? 'success' : 'primary'}
            onClick={
              !isInCart
                ? () =>
                    dispatch({
                      type: 'ADD_TO_CART',
                      payload: activeProduct,
                    })
                : () =>
                    dispatch({
                      type: 'INCREASE_ITEM_COUNT',
                      payload: cartElem,
                    })
            }
          >
            + {!isInCart && 'add to cart'}
          </Button>
        </ButtonGroup>
        {isInCart && (
          <Button
            size="large"
            color="error"
            variant='outlined'
            onClick={() =>
              dispatch({ type: 'REMOVE_FROM_CART', payload: cartElem })
            }
          >
            Delete
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default ProductInfo;
