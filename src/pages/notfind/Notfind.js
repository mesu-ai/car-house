import { Typography } from '@mui/material';
import React from 'react';
import Navbar from '../../components/shared/Navbar';

const Notfind = () => {
    return (
        <>
        <Navbar></Navbar>
        <div style={{height:'100vh',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
  
  
      <Typography style={{color:'crimson',fontWeight:'bold',paddingBottom:'0px'}} variant="h2" gutterBottom component="div">
      Error 404 !
      </Typography>
      <Typography style={{padding:'0px',margin:'0px',fontWeight:'bold'}} variant="h4" gutterBottom component="div">
        Page Not Found
      </Typography>
        </div>
        </>
    );
};

export default Notfind;