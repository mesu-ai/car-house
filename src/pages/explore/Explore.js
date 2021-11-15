import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import useCars from '../../hooks/useCars';
import ServiceCard from '../home/serviceCard/ServiceCard';
import Activity from '../../components/shared/activity/Activity';
import Navbar from '../../components/shared/Navbar';

const Explore = () => {
   const {cars} = useCars();
//    console.log(cars,latestCars);
   const url='/orderdetails';

    return (
        <>
        <Navbar></Navbar>
        <Box sx={{ mb:4,}}>
            <Activity/>
        <Container sx={{mt:4}}>
        
        <Typography sx={{color:'info.main',fontWeight:'bold'}} variant="h5" gutterBottom component="div">
        Choice Your Car
        </Typography>
        <Typography sx={{fontWeight:'bold',color:'black'}} variant="h4" gutterBottom component="div">
        Latest Car Deals
        </Typography>
        

        <Box sx={{ flexGrow: 1,mt:5 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {
            cars.map(latest=><ServiceCard key={Math.random()} url={url} latest={latest}></ServiceCard>)

            }
        </Grid>
        
        </Box>
        </Container>
        </Box>
        </>
    );
};

export default Explore;