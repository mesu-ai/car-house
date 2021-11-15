import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';

const BuyCar = () => {
    return (
        <>
        <Typography sx={{textAlign:'start',fontWeight:'bold'}} variant="h6" gutterBottom component="div">
        Shop A Car:
        </Typography>
        <Box className="quick-link" sx={{display:'flex',flexDirection:'column',alignItems:'start'}}>
            
            <Link to="">New Car</Link>
            <Link to="">Recondition Car</Link>
            <Link to="">Used Car</Link>
            
        </Box>
        </>
    );
};

export default BuyCar;