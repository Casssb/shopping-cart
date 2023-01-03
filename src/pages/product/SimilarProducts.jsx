import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  ListSubheader,
} from '@mui/material';
import React from 'react';
import { ShopContext } from '../../context/ShopContext';
import { useNavigate } from 'react-router-dom';

const SimilarProducts = ({ params }) => {
  const {
    cachedState: {
      state: { products },
    },
  } = ShopContext();
  const navigate = useNavigate();
  const activeProduct = products.find((prod) => prod.id === params.id);
  const sameCat = products.filter(
    (prod) =>
      prod.category === activeProduct.category && prod.id !== activeProduct.id
  );

  return (
    <ImageList
      sx={{
        width: { xs: '100%', md: 400 },
        height: { xs: '100%', md: 460 },
        padding: { xs: '0 4rem 0 0', md: 0 },
      }}
    >
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">Similar Products</ListSubheader>
      </ImageListItem>
      {sameCat.map((item, index) => {
        if (index < 4) {
          return (
            <ImageListItem
              key={item.id}
              sx={{ cursor: 'pointer' }}
              onClick={() => navigate(`/product/${item.id}`)}
            >
              <img src={item.imageSrc} srcSet={item.imageSrc} alt={item.name} />
              <ImageListItemBar title={item.name} />
            </ImageListItem>
          );
        }
      })}
    </ImageList>
  );
};

export default SimilarProducts;
