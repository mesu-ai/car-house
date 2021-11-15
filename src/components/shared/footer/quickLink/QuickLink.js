
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import '../Footer.css';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

const QuickLink = () => {
    const {user,userLogOut}= useAuth();
    return (
        <>
        <Typography sx={{textAlign:'start',fontWeight:'bold'}} variant="h6" gutterBottom component="div">
        Quick Link:
        </Typography>
        <Box className="quick-link" sx={{display:'flex',flexDirection:'column',alignItems:'start'}}>
            
            <Link to="/">Home</Link>
            <Link to="/explore">Explore</Link>
            <Link to="/about">About</Link>
            <Link to="/contract">Contract</Link>

            
            <Box sx={{my:4}}>
            {!user.email? 
            <Link  to="/login">
            <Button  variant="contained" color="error">Login</Button>
            </Link> :

            <Button onClick={userLogOut} variant="contained" color="error">LogOut</Button>
            }
            </Box>





        
        </Box>
        </>
    );
};

export default QuickLink;