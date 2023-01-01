import { Box, CircularProgress } from '@mui/material';
import React from 'react';

const Loading = () => {
  return (
    <Box
      height={'100vh'}
      width={'100%'}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <CircularProgress color="secondary" />
    </Box>
  );
};

export default Loading;
