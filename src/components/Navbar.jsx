import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Stack,
  Button,
} from '@mui/material';
import PianoIcon from '@mui/icons-material/Piano';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'secondary' }}>
      <Toolbar>
        <IconButton color="inherit" edge="start" aria-label="logo">
          <PianoIcon fontSize='large' />
        </IconButton>
        <Typography variant="h4" sx={{ flexGrow: 1 }}>
          Synth Ware
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button>
            <NavLink to="/">Home</NavLink>
          </Button>
          <Button>
            <NavLink to="/shop">Shop</NavLink>
          </Button>
          <Button>
            <NavLink to="/cart">Cart</NavLink>
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
