import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Navbar from '../../components/shared/Navbar';

const Contract = () => {
    return (
        <>
            <Navbar></Navbar>
            
            <Box sx={{ flexGrow: 1 }}>
            <Container sx={{my:6}}>
            <Grid container spacing={2} sx={{textAlign:'start'}}>
            
            <Grid item xs={12} md={4}>
            
            <Typography variant="h5" sx={{color:'crimson',fontWeight:'bold',textDecoration:'underline'}} gutterBottom component="div">
             Contract Us
           </Typography>
            
            </Grid>
            <Grid item xs={12} md={8}>
            
            <Typography variant="h5" sx={{fontWeight:'bold'}} gutterBottom component="div">
            Consumer Inquiries: <br />
           <span style={{color:'info.main'}}>advisor@carshouse.com</span> 
           </Typography>

            <Typography variant="h5" sx={{mt:5}} gutterBottom component="div">
            <span style={{fontWeight:'bold'}}>Dealer Inquiries: </span><br />
           <span style={{color:'blue'}}>dealerquestions@carshouse.com</span> 
           </Typography>

            <Typography variant="h6" sx={{fontWeight:'bold',my:5}} gutterBottom component="div">
            If you're an auto dealer looking to connect with in-market new car, used car, and special finance car shoppers, please contract us for information on our dealer offerings.
           </Typography>
          
           <hr />

            </Grid>

            <Grid item xs={12} md={4}>
            
            <Typography variant="h5" sx={{color:'crimson',fontWeight:'bold',textDecoration:'underline',my:5}} gutterBottom component="div">
             Advertising Opportunities
           </Typography>
            
            </Grid>
            <Grid item xs={12} md={8}>
            <Typography variant="h5" sx={{fontWeight:'bold',my:5}} gutterBottom component="div">
            Reach In-Market Car Buyers At The Ideal Time To Impact Purchase Decisions!
           </Typography>
            
            <Typography variant="subtitle1" sx={{fontSize:'20px'}} gutterBottom component="div">
            'Car House' has an unbeatable, 20-year-strong reputation of helping car shoppers get a great deal on a new car by providing them with exclusive pricing insights and buying advice. As a result, we're proud to attract a valuable in-market audience that is ideal for automotive marketers to connect with.<br />

            Our typical visitor is actively considering two to three new vehicles, and has plans to buy within three months. In fact, 60 percent of 'Car House' visitors go on to purchase a vehicle within 60 days of visiting us! 
            <br />
            <br />
            To get in front of our motivated, in-market audience, please contact us.
           </Typography>


            
          
           <hr />
            </Grid>


            </Grid>
            </Container>
            </Box>
            
        </>
    );
};

export default Contract;