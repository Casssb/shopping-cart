import { Box, ToggleButton, ToggleButtonGroup } from '@mui/material';
import React from 'react';

const ShopFilters = ({
  category,
  handleCatChange,
  value,
  handleValueChange,
}) => {
  return (
    <Box
      flex={1}
      component={'section'}
      display={'flex'}
      flexDirection={{xs: 'row', md: 'column'}}
      pb={'2rem'}
      gap={{xs: '1rem', md: 'none'}}
    >
      <Box position={{ xs: 'none', md: 'fixed' }}>
        <ToggleButtonGroup
          orientation="vertical"
          value={category}
          exclusive
          onChange={handleCatChange}
        >
          <ToggleButton value="all" aria-label="all">
            All
          </ToggleButton>
          <ToggleButton value="landscape" aria-label="landscape">
            Landscape
          </ToggleButton>
          <ToggleButton value="portrait" aria-label="portrait">
            Portrait
          </ToggleButton>
          <ToggleButton value="shape" aria-label="shape">
            Shape
          </ToggleButton>
          <ToggleButton value="misc" aria-label="misc">
            Misc
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Box position={{ xs: 'none', md: 'fixed' }} mt={{xs:'none', md: '18rem'}}>
        <ToggleButtonGroup
          orientation="vertical"
          color="primary"
          value={value}
          exclusive
          onChange={handleValueChange}
        >
          <ToggleButton value="highToLow" aria-label="highToLow">
            Price: High
          </ToggleButton>
          <ToggleButton value="lowToHigh" aria-label="lowToHigh">
            Price: Low
          </ToggleButton>
          <ToggleButton value="a-z" aria-label="a-z">
            A-Z
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
    </Box>
  );
};

export default ShopFilters;
