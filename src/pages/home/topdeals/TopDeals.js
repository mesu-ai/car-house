import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import useCars from '../../../hooks/useCars';
import ServiceCard from '../serviceCard/ServiceCard';

const TopDeals = () => {
   const {latestCars} = useCars();
//    console.log(cars,latestCars);

const url='/orderplace';


    return (
        <Box sx={{mt:10, mb:4}}>
        <Container>
        
        <Typography sx={{color:'info.main',fontWeight:'bold'}} variant="h5" gutterBottom component="div">
        Choice Your Car
        </Typography>
        <Typography sx={{fontWeight:'bold',color:'black'}} variant="h4" gutterBottom component="div">
        Latest Car Deals 2021
        </Typography>
        

        <Box sx={{ flexGrow: 1,mt:5 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {
            latestCars.map(latest=><ServiceCard key={Math.random()} latest={latest} url={url}></ServiceCard>)

            }
        </Grid>
        
        </Box>
        </Container>
        </Box>
    );
};

export default TopDeals;