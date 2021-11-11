import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Footer = () => {

    return (
        <Box sx={{p:5}}>
             <Typography variant="subtitle1" gutterBottom component="div">
                &copy; 2021 All Right Served By Car House Ltd.
            </Typography>

        </Box>

            
    );
};

export default Footer;