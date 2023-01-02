import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { ShopContext } from '../../context/ShopContext';

const ProductDisplay = ({ params }) => {
  const {
    cachedState: {
      state: { products },
    },
  } = ShopContext();
  const activeProduct = products.find((prod) => prod.id === params.id);

  return (
    <Card sx={{ width: 500, height: '80%', margin: '2rem' }}>
      <CardMedia
        sx={{ height: 500 }}
        image={activeProduct.imageSrc}
        title={activeProduct.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {activeProduct.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Prompt: {activeProduct.prompt}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductDisplay;
