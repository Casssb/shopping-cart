import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types'
import { ShopContext } from '../../context/ShopContext';

const ProductDisplay = ({ params }) => {
  const {
    cachedState: {
      state: { products },
    },
  } = ShopContext();
  const activeProduct = products.find((prod) => prod.id === params.id);

  return (
    <Card sx={{ height: '100%', margin: '2rem', flex: 1 }}>
      <CardMedia
        sx={{ height: { xs: 350, sm: 550 } }}
        image={activeProduct.imageSrc}
        title={activeProduct.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {activeProduct.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Prompt: {activeProduct.prompt}
        </Typography>
      </CardContent>
    </Card>
  );
};

ProductDisplay.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ProductDisplay;
