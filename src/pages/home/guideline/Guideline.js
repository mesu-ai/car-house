import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import bg from '../../../images/guidebg.png';

const guidebg={
    background:`url(${bg})`,
    backgroundColor:'rgba(189, 231, 178, 0.911)',
    backgroundRepeat:'no-repeat',
    
    backgroundBlendMode:'difference',
    
    backgroundPosition: 'center',
    backgroundSize: 'cover',
}

const Guideline = () => {
    return (
        <Box style={guidebg} sx={{ flexGrow: 1 ,p:5}}>
            <Container>
            <Grid container spacing={2}>
                <Grid sx={{textAlign:'start',color:'white'}} item xs={12} md={6}>
                  <Typography sx={{fontWeight:'bold'}} variant="h4" gutterBottom component="div">
                     Not sure what car to buy?
                  </Typography>
                  <Typography sx={{textAlign:'justify'}} variant="subtitle1" gutterBottom component="div">
                  When you have the right skills and information, the car buying process is easy and enjoyable. Here are some of the guides we've put together to help you on your way to buying your perfect car.
                </Typography>
                
                </Grid>
                <Grid sx={{display:'flex',justifyContent:'center',alignItems:'center'}} item xs={12} md={6}>
                    <Button sx={{backgroundColor:'crimson'}}  variant="contained">Read GuideLine</Button>
               
                
                </Grid>
                
            </Grid>
            </Container>
        </Box>
    );
};

export default Guideline;