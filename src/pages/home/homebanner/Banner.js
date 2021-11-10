
import { Container, Grid,Button,Typography } from '@mui/material';
import { Box,} from '@mui/system';
import React from 'react';
import banner from '../../../images/homebanner.png';
import bannercover from '../../../images/bomecover.png';

const bannerBg={
    background:`url(${banner})`,
    backgroundRepeat:'no-repeat',
    backgroundColor:'rgba(223, 219, 228, 0.911)', 
    backgroundBlendMode:'screen',
    // objectFit: 'cover',
    backgroundPosition: 'center',
    backgroundSize: 'cover'

}


const Banner = () => {
    
    return (
        
        <Box style={bannerBg} className="home-banner"  sx={{ flexGrow: 1,mb:5, display:'flex',alignItems:'center',justifyContent:'center',}}>
            <Container >
            <Grid container spacing={5} >
                <Grid item xs={12} md={6} lg={5} sx={{textAlign:'start',display:'flex',flexDirection:'column',alignItems:'start',justifyContent:'center'}}>
                    <Typography  sx={{fontWeight:'bold'}} variant="h3">
                        Your New Smile <br />
                        Starts Here

                    </Typography>

                    <Typography sx={{my:5}} component="div" variant="p">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut harum eius, laboriosam totam odit aliquam officiis in enim quis neque quas non omnis culpa ab?
                    </Typography>

                <Button variant="contained">GET APPOINTMENT</Button>


               
                </Grid>
                <Grid item xs={12} md={6} lg={7} sx={{display:"flex",justifyContent:"end"}}>
                    <img   src={bannercover} alt="" width="80%" />
                </Grid>
                
            </Grid>
            </Container>
        </Box>
        
    );
};

export default Banner;