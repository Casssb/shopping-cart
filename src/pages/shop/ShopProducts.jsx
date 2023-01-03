import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  useMediaQuery,
} from '@mui/material';
import React from 'react';
import { ShopContext } from '../../context/ShopContext';
import { useNavigate } from 'react-router-dom';

const ShopProducts = ({ sortedProducts }) => {
  const {
    cachedState: {
      state: { cart },
    },
  } = ShopContext();
  const { dispatch } = ShopContext();
  const isMobile = useMediaQuery(`(max-width:600px)`);
  const navigate = useNavigate();

  return (
    <Box flex={3} component={'section'}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, lg: 12 }}
      >
        {sortedProducts.map((prod) => {
          const isInCart = cart.some((item) => item.id === prod.id);
          return (
            <Grid item xs={4} sm={4} lg={4} key={prod.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <CardMedia
                  sx={{ height: 250 }}
                  image={prod.imageSrc}
                  title={prod.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {prod.name}
                  </Typography>
                  <Typography variant="h6" color="primary">
                    Price: {prod.price}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    marginTop: 'auto',
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  {isInCart ? (
                    <Button
                      size="large"
                      color="error"
                      variant={isMobile ? 'contained' : 'outlined'}
                      onClick={() =>
                        dispatch({
                          type: 'REMOVE_FROM_CART',
                          payload: prod,
                        })
                      }
                    >
                      X Remove
                    </Button>
                  ) : (
                    <Button
                      size="large"
                      color="success"
                      variant={isMobile ? 'contained' : 'outlined'}
                      onClick={() =>
                        dispatch({
                          type: 'ADD_TO_CART',
                          payload: prod,
                        })
                      }
                    >
                      + Add to cart
                    </Button>
                  )}
                  <Button
                    size="large"
                    color="primary"
                    variant={isMobile ? 'contained' : 'outlined'}
                    onClick={() => navigate(`/product/${prod.id}`)}
                  >
                    Details
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default ShopProducts;
