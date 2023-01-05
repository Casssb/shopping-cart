import { Box, Breadcrumbs, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import React from 'react';

const Footer = () => {
  return (
    <Box width={'100%'} display={'flex'} justifyContent={'center'} mt={'2rem'} component={'footer'} paddingX={'2rem'}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          color="text.primary"
          href="https://github.com/Casssb/shopping-cart"
          target={'_blank'}
          rel={'noopener'}
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          <GitHubIcon sx={{mr: '5px', fontSize: 'inherit'}}/>
          Casssb
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="https://openart.ai/"
          target={'_blank'}
          rel={'noopener'}
        >
          Openart.ai
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="https://www.midjourney.com"
          target={'_blank'}
          rel={'noopener'}
        >
          Midjourney
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="https://stablediffusionweb.com/"
          target={'_blank'}
          rel={'noopener'}
        >
          Stable Diffusion
        </Link>
      </Breadcrumbs>
    </Box>
  );
};

export default Footer;
