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
  Divider,
  ListItemIcon,
  ListItemText,
  Avatar,
} from '@mui/material';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { ShopContext } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';

const pages = [
  { name: 'Home', to: '/' },
  { name: 'Shop', to: 'shop' },
];

const Navbar = () => {
  const {
    cachedState: {
      state: { cart },
    },
  } = ShopContext();
  const { dispatch } = ShopContext();
  const navigate = useNavigate();

  const cartItemsTotal = cart.reduce((acc, c) => acc + c.quantity, 0);
  const cartPriceTotal = cart.reduce((acc, c) => acc + c.quantity * c.price, 0);

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
    <AppBar position="sticky">
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
                  sx={{ padding: '2rem 4rem' }}
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
            <Tooltip title={cartItemsTotal > 0 ? 'Open cart' : 'Cart is empty'}>
              <IconButton
                onClick={cartItemsTotal > 0 ? handleOpenCart : null}
                sx={{ p: 0 }}
              >
                <Badge badgeContent={cartItemsTotal} color="primary">
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
              {cart.map((item) => (
                <Box display={'flex'} key={item.id}>
                  <MenuItem
                    onClick={() => {
                      handleCloseCart();
                      navigate(`/product/${item.id}`);
                    }}
                  >
                    <Avatar
                      variant="square"
                      src={item.imageSrc}
                      alt={item.name}
                      sx={{ marginRight: '1rem' }}
                    />
                    <Typography textAlign="center">{`${item.name}${
                      item.quantity > 1 ? ` (${item.quantity})` : ''
                    }`}</Typography>
                  </MenuItem>
                  <Button
                    sx={{
                      marginLeft: 'auto',
                      padding: '1rem',
                    }}
                    onClick={() => {
                      cart.length === 1 && handleCloseCart();
                      dispatch({
                        type: 'REMOVE_FROM_CART',
                        payload: item,
                      });
                    }}
                  >
                    <DeleteForeverIcon fontSize="small" color="error" />
                  </Button>
                </Box>
              ))}
              <Divider sx={{ padding: '0.2rem' }} />
              <MenuItem
                disabled={true}
                sx={{
                  '&.Mui-disabled': { color: 'text.primary', opacity: '1' },
                }}
              >
                <Typography textAlign={'center'} pt="0.2rem">
                  Total: {cartPriceTotal}
                </Typography>
              </MenuItem>
              <Divider />
              <MenuItem
                onClick={() => {
                  handleCloseCart();
                  navigate(`/cart`);
                }}
                sx={{ padding: '0.5rem 2rem 0.5rem 2rem' }}
              >
                <ListItemIcon>
                  <ShoppingCartIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText color="primary" sx={{ color: '#90CAF9' }}>
                  Go to Basket
                </ListItemText>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
