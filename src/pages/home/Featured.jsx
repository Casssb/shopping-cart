import {
  Box,
  Container,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
  useMediaQuery,
} from '@mui/material';
import React from 'react';
import { ShopContext } from '../../context/ShopContext';
import { generateRandomIndexes } from '../../utils/helpers';
import { useNavigate } from 'react-router-dom';

const Featured = () => {
  const {
    cachedState: {
      state: { products },
    },
  } = ShopContext();
  const randomProductIndexes = generateRandomIndexes(products, 3);
  const matches = useMediaQuery(`(min-width:900px)`);
  const navigate = useNavigate();
  return (
    <Box width={'100%'} height={'100%'} mt={6}>
      <Container
        maxWidth={'xl'}
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography variant="h4" align="center" fontWeight={'500'}>
          Featured Projects
        </Typography>
        <ImageList
          cols={matches ? 3 : 1}
          sx={{ width: '100%', height: 500, mt: '4rem' }}
        >
          {randomProductIndexes.map((index) => (
            <ImageListItem
              key={products[index].imageSrc}
              sx={{ cursor: 'pointer' }}
              onClick={() => navigate(`/product/${products[index].id}`)}
            >
              <img
                src={products[index].imageSrc}
                srcSet={products[index.imageSrc]}
                alt={products[index].name}
                loading="lazy"
              />
              <ImageListItemBar title={products[index].name} />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    </Box>
  );
};

export default Featured;
