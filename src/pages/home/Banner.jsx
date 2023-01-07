import React from 'react';
import { ShopContext } from '../../context/ShopContext';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { Box, Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const navigate = useNavigate();
  const {
    cachedState: {
      state: { products },
    },
  } = ShopContext();

  return (
    <Box
      position="relative"
      component={'section'}
      maxWidth={'1490px'}
      margin={'auto'}
    >
      <Box
        position="absolute"
        top="20%"
        right="40vw"
        zIndex="99"
        color={'black'}
      >
        <Container maxWidth="xl">
          <Typography variant="h5" component={'h1'} fontWeight={'700'}>
            The latest in
          </Typography>
          <Typography variant="h3" component={'h1'} fontWeight={'500'}>
            AI generated
          </Typography>
          <Typography
            variant="h1"
            fontWeight={'700'}
            color={'black'}
            letterSpacing={'4px'}
          >
            Art
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/shop')}
          >
            Shop Now
          </Button>
        </Container>
      </Box>
      <Carousel
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
      >
        <div>
          <img
            src={products[19].imageSrc}
            alt={products[19].name}
            style={{
              width: '100%',
              height: '90vh',
              objectFit: 'cover',
              backgroundAttachment: 'fixed',
            }}
          />
        </div>
        <div>
          <img
            src={products[2].imageSrc}
            alt={products[2].name}
            style={{
              width: '100%',
              height: '90vh',
              objectFit: 'cover',
              backgroundAttachment: 'fixed',
            }}
          />
        </div>
        <div>
          <img
            src={products[20].imageSrc}
            alt={products[20].name}
            style={{
              width: '100%',
              height: '90vh',
              objectFit: 'cover',
              backgroundAttachment: 'fixed',
            }}
          />
        </div>
      </Carousel>
    </Box>
  );
};

export default Banner;
