import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';

const Product = () => {
  const {
    cachedState: {
      state: { products },
    },
  } = ShopContext();
  const params = useParams();
  const activeProduct = products.find((prod) => prod.name === params.id);
  return (
    <Box
      display={'flex'}
      width={'100%'}
      height={'100vh'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Card sx={{ width: 600 }}>
        <CardMedia
          sx={{ height: 500 }}
          image={activeProduct.imageSrc}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {activeProduct.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Prompt: {activeProduct.prompt}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Product;
