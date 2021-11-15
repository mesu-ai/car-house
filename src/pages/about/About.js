import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Navbar from '../../components/shared/Navbar';
import aboutus1 from '../../images/aboutUs-1.jpg';
import aboutus2 from '../../images/aboutUs-2.jpg';
import aboutus3 from '../../images/aboutUs-3.jpg';

const About = () => {
    return (
        
         <>   
         <Navbar></Navbar>
        <Box sx={{ flexGrow: 1 }}>
        <Container>
        <Grid container spacing={3} sx={{textAlign:'start',my:4}}>
          
          <Grid item xs={12} sm={6} md={7}>
          
          <Typography variant="h5" sx={{color:'crimson',fontWeight:'bold',textDecoration:'underline'}} gutterBottom component="div">
          What We do
           </Typography>
          <Typography variant="h4" sx={{color:'info.main',fontWeight:'bold'}} gutterBottom component="div">
          WE HELP YOU GET A GREAT DEAL ON A CAR!
           </Typography>

          <Typography variant="p" gutterBottom component="div">
          'Car House' helps you get a great deal on a new or used car by giving you up-to-the-minute car pricing information so that you're fully armed with the knowledge you need as you shop for a car. We also help buyers with less-than-perfect credit find special financing options through our network of trusted lending partners.
           </Typography>

          </Grid>
          <Grid item xs={12} sm={6} md={5} >
              <img src={aboutus1} alt="" width="100%" />
 
          </Grid>

          <Grid item xs={12} sm={6} md={5}>
          <img src={aboutus2} alt="" width="100%" />
            
          </Grid>
          <Grid item xs={12} sm={6} md={7}>
          <Typography variant="h5" sx={{color:'crimson',fontWeight:'bold',textDecoration:'underline'}} gutterBottom component="div">
          How We Do It
           </Typography>
          <Typography variant="h4" sx={{color:'info.main',fontWeight:'bold'}} gutterBottom component="div">
          EXCLUSIVE, OBJECTIVE PRICING INSIGHTS
           </Typography>

          <Typography variant="p" gutterBottom component="div">
          Our full-time team of pricing experts is constantly analyzing the latest car pricing data to identify hot deals and pricing trends that are useful to car shoppers. In fact, our pricing experts dig so deep that they often break industry news stories that are reported by the world's biggest car news publications! <br />
          As an independent company, you can rest assured that our pricing information is totally objective and not influenced by any outside factors.
           </Typography>

          </Grid>

          
          <Grid item xs={12} sm={6} md={7} sx={{mt:2}}>
          
          <Typography variant="h5" sx={{color:'crimson',fontWeight:'bold',textDecoration:'underline'}} gutterBottom component="div">
          Who We Are
           </Typography>
          <Typography variant="h4" sx={{color:'info.main',fontWeight:'bold'}} gutterBottom component="div">
          TWO DECADES OF SERVING CAR SHOPPERS

           </Typography>

          <Typography variant="p" gutterBottom component="div">
          We're proud to have invented the concept of shopping for cars online when we launched in 2021. We've served millions of car shoppers over the past two decades, and we hope we can serve you, too!
           </Typography>

          </Grid>

          <Grid item xs={12} sm={6} md={5} sx={{mt:2}}>
          <img src={aboutus3} alt="" width="100%" />
            
          </Grid>

        </Grid>
        </Container>
      </Box>
      </>




    );
};

export default About;