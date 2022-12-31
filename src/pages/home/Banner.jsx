import React from 'react';
import { ShopContext } from '../../context/ShopContext';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
  const {
    cachedState: {
      state: { products },
    },
  } = ShopContext();

  console.log(products);
  return (
    <Carousel
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
    >
      <div>
        <img
          src={products[1].imageSrc}
          style={{
            width: '100%',
            height: '80vh',
            objectFit: 'cover',
            backgroundAttachment: 'fixed',
          }}
        />
      </div>
      <div>
        <img
          src={products[2].imageSrc}
          style={{
            width: '100%',
            height: '80vh',
            objectFit: 'cover',
            backgroundAttachment: 'fixed',
          }}
        />
      </div>
      <div>
        <img
          src={products[16].imageSrc}
          style={{
            width: '100%',
            height: '80vh',
            objectFit: 'cover',
            backgroundAttachment: 'fixed',
          }}
        />
      </div>
    </Carousel>
  );
};

export default Banner;
