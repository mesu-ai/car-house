import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {InfoRounded,Home,LoginRounded,LogoutRounded,LocalTaxiRounded,DashboardRounded } from '@mui/icons-material';
import { Button, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import brandlogo from '../../images/brandlogo.png';
import '../shared/navigation/Navbar.css';


export default function Navbar() {
  const {user,userLogOut}=useAuth();
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

      {user.email && 

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
      }
      

      {user.email &&
          <MenuItem>
          <IconButton size="large" >
           <AccountCircleIcon color="success" />
           </IconButton>
           <p style={{color:'navy',fontWeight:'bold'}}>{user.displayName}</p>
           
          </MenuItem>
      }
      
      {/* <MenuItem onClick={handleProfileMenuOpen}>
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
      </MenuItem> */}

      {
        !user.email ? 

        <Link style={{textDecoration:'none',color:'black'}} to='/login'>     
          <MenuItem>
          <IconButton size="large" color="inherit" >   
          <LoginRounded/> 
          </IconButton>
          <p>LogIn</p>
          </MenuItem>
        </Link> :

        <MenuItem onClick={userLogOut}>
          <IconButton  size="large" color="inherit" >   
          <LogoutRounded /> 
          </IconButton>
          <p>LogOut</p>
        </MenuItem>

      }

      
        
        
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <img src={brandlogo} alt="" height="60px"></img>
          
          <Typography className="brandfont"
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'block', sm: 'block', },color:'whete',fontWeight:'bold' }}
          >
            Car <span style={{color:'white',fontSize:'25px'}}>House</span>
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
          
          
         {user.email &&
         
         <Link style={{textDecoration:'none'}} to='/dashboard'>
         <ListItemButton sx={{display:'flex',alignItems:'center'}}>
         <DashboardRounded color="warning"/> 
         <ListItemText sx={{ml:1,fontWeight:'bold',color:'wheat'}} primary="Dashboard" />      
        </ListItemButton>
         </Link>
         
         }
          

          {/* <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />

            </IconButton> */}

            

            {user.email &&
            <List sx={{display:'flex',alignItems:'center',mx:1}}>
              <AccountCircleIcon  sx={{ color:'red',fontSize:25 }}/>
              <ListItemText sx={{ml:1,fontWeight:'bold',textTransform:'capitalize',color:'wheat'}} primary={user.displayName} /> 
               
            </List>
            
            }

          {
            !user.email?

            <Link style={{textDecoration:'none',color:'white'}} to='/login'>
            <ListItem>
              <Button variant="contained" sx={{backgroundColor:'crimson',ml:1}}>
              Login
              </Button>
            </ListItem>
            </Link>

            :
            <Box>
            <ListItem>
              <Button onClick={userLogOut} variant="contained"  sx={{backgroundColor:'crimson',ml:2}}>
              LogOut
              </Button>
            </ListItem>
            </Box>

          }

          
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
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
