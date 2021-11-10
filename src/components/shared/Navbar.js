import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import {InfoRounded,Home,LoginRounded,LogoutRounded,LocalTaxiRounded,DashboardRounded } from '@mui/icons-material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import { ListItemButton, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';


export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      
        <Link style={{textDecoration:'none',color:'black'}} to='/home'>     
          <MenuItem>
          <IconButton size="large" color="inherit" >   
          <Home /> 
          </IconButton>
          <p>Home</p>
          </MenuItem>
        </Link>

        <Link style={{textDecoration:'none',color:'black'}} to='/explore'>     
          <MenuItem>
          <IconButton size="large" color="inherit" >   
          <LocalTaxiRounded/> 
          </IconButton>
          <p>Explore Car</p>
          </MenuItem>
        </Link>
             
                
      <Link style={{textDecoration:'none',color:'black'}} to='/about'>
      <MenuItem>
        <IconButton
          size="large"
          color="inherit"
        >   
         <InfoRounded/> 
        </IconButton>
        <p>About</p>
      </MenuItem>
      </Link>

      <Link style={{textDecoration:'none',color:'black'}} to='/dashboard'>
      <MenuItem>
        <IconButton
          size="large"
          color="inherit"
        >   
         <DashboardRounded/> 
        </IconButton>
        <p>Dashboard</p>
      </MenuItem>
      </Link>

      
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>

      <MenuItem>
          <IconButton size="large" color="inherit" >   
          <LogoutRounded /> 
          </IconButton>
          <p>LogOut</p>
        </MenuItem>
        
        <Link style={{textDecoration:'none',color:'black'}} to='/login'>     
          <MenuItem>
          <IconButton size="large" color="inherit" >   
          <LoginRounded/> 
          </IconButton>
          <p>LogIn</p>
          </MenuItem>
        </Link>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'block', sm: 'block' } }}
          >
            Car House
          </Typography>
          
          <Box sx={{ flexGrow: 1 }} />
          
          
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

            
          
          <Link style={{textDecoration:'none',color:'white'}} to='/home'>
          <ListItemButton>
           <ListItemText primary="Home" />
          </ListItemButton>
          </Link>
          <Link style={{textDecoration:'none',color:'white'}} to='/explore'>
          <ListItemButton>
           <ListItemText primary="Explore Car" />
          </ListItemButton>
          </Link>
          <Link style={{textDecoration:'none',color:'white'}} to='/about'>
          <ListItemButton>
           <ListItemText primary="About" />
          </ListItemButton>
          </Link>
          
          <Link style={{textDecoration:'none',color:'white'}} to='/login'>
          <ListItemButton>
           <ListItemText primary="Login" />
          </ListItemButton>
          </Link>

          <Link style={{textDecoration:'none',color:'black'}} to='/dashboard'>
          <ListItemButton>
          <DashboardRounded/> 
          <ListItemText sx={{ml:1,fontWeight:'bold'}} primary="Dashboard" />      
         </ListItemButton>
          
          </Link>

            

              
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />

            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
