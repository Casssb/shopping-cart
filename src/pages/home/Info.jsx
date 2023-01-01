import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { ShopContext } from '../../context/ShopContext';

const Info = () => {
  const {
    cachedState: {
      state: { products },
    },
  } = ShopContext();
  return (
    <Box width={'100%'} height={{ xs: '100%', md: '60vh' }} mt={6}>
      <Container
        maxWidth={'xl'}
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        <Box
          bgcolor={'#272727'}
          width={{ xs: '100%', md: '50%' }}
          padding={'2rem'}
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          gap={'0.5rem'}
        >
          <Typography variant="h4" align="center" fontWeight={'500'}>
            A selection of the{' '}
            <Typography variant="span" color={'primary'}>
              finest
            </Typography>{' '}
            artwork
          </Typography>
          <Typography variant="h5" align="center" fontWeight={'500'}>
            Created by our future robot overlords
          </Typography>
          <Typography variant="h5" align="center" fontWeight={'500'}>
            Via the{' '}
            <Typography variant="span" color={'primary'}>
              Midjourney
            </Typography>{' '}
            &{' '}
            <Typography variant="span" color={'primary'}>
              Stable Diffusion
            </Typography>{' '}
            AI's
          </Typography>
          <Typography variant="p" align="center">
            The artwork is created by giving the AI a text 'prompt'. The nearby
            image was given the following promt; "A lonely stranger inside a
            hall of monumental cyberpunk industrial factory megacomplex; by
            tsutomi nihei; hyperrealistic, 4K wallpaper, highly detailed"{' '}
          </Typography>
        </Box>
        <Box
          height={'100%'}
          width={{ xs: '100%', md: '50%' }}
          bgcolor={'#272727'}
        >
          <img
            src={products[1].imageSrc}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              backgroundAttachment: 'fixed',
              padding: '1rem',
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Info;
