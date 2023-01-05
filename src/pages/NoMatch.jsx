import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const NoMatch = () => {
  const {
    cachedState: {
      state: { products },
    },
  } = ShopContext();

  const navigate = useNavigate();

  return (
    <Box height={'100%'} mt={'3rem'}>
      <Container
        maxWidth={'xl'}
        sx={{
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Card>
          <CardMedia
            component={'img'}
            alt={products[15].name}
            height={350}
            image={products[15].imageSrc}
          ></CardMedia>
          <CardContent>
            <Typography variant="h4">404 error: Page not found</Typography>
          </CardContent>
          <CardActions>
            <Button
              size="large"
              variant="outlined"
              onClick={() => navigate(-1)}
            >
              Go Back
            </Button>
            <Button
              size="large"
              variant="outlined"
              color="success"
              onClick={() => navigate('/')}
            >
              Home
            </Button>
            <Button
              size="large"
              variant="outlined"
              color="secondary"
              onClick={() => navigate('/shop')}
            >
              Shop
            </Button>
          </CardActions>
        </Card>
      </Container>
    </Box>
  );
};

export default NoMatch;
