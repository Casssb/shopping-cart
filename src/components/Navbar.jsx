import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Tooltip,
  Button,
  Container,
  Menu,
  Box,
  MenuItem,
  Badge,
} from '@mui/material';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';

const pages = [
  { name: 'Home', to: '/' },
  { name: 'Shop', to: 'shop' },
  { name: 'Cart', to: 'cart' },
];

const cartItems = ['item1', 'item2', 'item3'];

const Navbar = () => {
  const [anchorElMenu, setanchorElMenu] = useState(null);
  const [anchorElCart, setanchorElCart] = useState(null);

  const handleOpenMenu = (event) => {
    setanchorElMenu(event.currentTarget);
  };

  const handleOpenCart = (event) => {
    setanchorElCart(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setanchorElMenu(null);
  };

  const handleCloseCart = () => {
    setanchorElCart(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        {/* Large Screen leftside display */}
        <Toolbar disableGutters component={'nav'}>
          <IconButton
            aria-label="logo"
            component={NavLink}
            to="/"
            sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
          >
            <SmartToyIcon fontSize="large" />
          </IconButton>
          <Typography
            noWrap
            variant="h6"
            sx={{
              flexGrow: 1,
              mr: 2,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              display: { xs: 'none', md: 'flex' },
            }}
          >
            ROBO ART
          </Typography>

          {/* Mobile menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElMenu}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElMenu)}
              onClose={handleCloseMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.name}
                  onClick={handleCloseMenu}
                  component={NavLink}
                  to={page.to}
                >
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Mobile logo (centered) */}
          <IconButton
            aria-label="logo"
            component={NavLink}
            to="/"
            sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
          >
            <SmartToyIcon fontSize="large" />
          </IconButton>
          <Typography
            noWrap
            variant="h6"
            sx={{
              flexGrow: 1,
              mr: 2,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              display: { xs: 'flex', md: 'none' },
            }}
          >
            ROBO ART
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                component={NavLink}
                to={page.to}
                onClick={handleCloseMenu}
                sx={{
                  my: 2,
                  color: 'text.primary',
                  display: 'block',
                  '&.active': {
                    color: 'primary.main',
                  },
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          {/* Cart Section */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open cart">
              <IconButton onClick={handleOpenCart} sx={{ p: 0 }}>
                <Badge badgeContent={cartItems.length} color="primary">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElCart}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElCart)}
              onClose={handleCloseCart}
            >
              {cartItems.map((item) => (
                <MenuItem key={item} onClick={handleCloseCart}>
                  <Typography textAlign="center">{item}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
