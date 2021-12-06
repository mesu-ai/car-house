import { Button } from '@mui/material';
import { Box, fontSize, width } from '@mui/system';
import React from 'react';
import './Activity.css';
import carfest from '../../../images/carfest.png';
import carfestMd from '../../../images/carfest-md.png';
import carfestSm from '../../../images/carfest-sm.png';
import carfestXs from '../../../images/carfest-xs.png';

const bg={
    background:`url(${carfest})`,
    backgroundRepeat:'no-repeat',
    backgroundSize: 'content',
    backgroundPosition: 'center',
    height:'200px'
     
}
const bgMd={
    background:`url(${carfestMd})`,
    backgroundRepeat:'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height:'150px',   
}
const bgSm={
    background:`url(${carfestSm})`,
    backgroundRepeat:'no-repeat',
    backgroundSize: 'content',
    backgroundPosition: 'center',
    height:'100px',
     
}
const bgXs={
    background:`url(${carfestXs})`,
    backgroundRepeat:'no-repeat',
    backgroundSize: 'content',
    backgroundPosition: 'center',
    height:'100px',
     
}

const Activity = () => {
    return (
        <>
        <Box style={bg} sx={{ display: { xs: 'none',sm:'none', md: 'none',lg:'flex' },justifyContent:'center',alignItems:'flex-end' }}  >
            
            <Button color="success" variant='contained' sx={{mb:3}}>Register Free &gt;&gt;</Button>

        </Box>
        <Box style={bgMd} sx={{ display: { xs: 'none',sm:'none', md: 'flex',lg:'none' },justifyContent:'center',alignItems:'flex-end' }}  >
            
            <Button color="success" variant='contained' sx={{mb:3,fontSize:'1vw'}}>Register Free &gt;&gt;</Button>

        </Box>
        <Box style={bgSm} sx={{ display: { xs: 'none',sm:'flex', md: 'none',lg:'none' },justifyContent:'center',alignItems:'flex-end' }}  >
            
            <Button color="success" variant='contained' sx={{mb:1,fontSize:'1vw'}}>Register Free &gt;&gt;</Button>

        </Box>
        <Box style={bgXs} sx={{ display: { xs:'flex',sm:'none', md: 'none',lg:'none' },justifyContent:'center',alignItems:'flex-end' }}  >
            
            <button className="active-btn">Register Free &gt;&gt;</button>

        </Box>
        
        
        </>
    );
};

export default Activity;