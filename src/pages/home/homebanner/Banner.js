import './Banner.css';
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
    backgroundSize: 'cover',
    paddingBottom:'80px'

}


const Banner = () => {
    
    return (
        
        <Box style={bannerBg} className="home-banner"  sx={{ flexGrow: 1,mb:5, display:'flex',alignItems:'center',justifyContent:'center',}}>
            <Container >
            <Grid container spacing={5} >
                <Grid item xs={12} md={6} lg={5} sx={{textAlign:'start',display:'flex',flexDirection:'column',alignItems:'start',justifyContent:'center'}}>

                    
                    
                    <Typography variant="h3">
                    <span className="textfont" style={{fontWeight:'bold',color:'crimson'}}>The Easiest way  </span> <br />
                    To find your new car !

                    </Typography>

                    <Typography sx={{my:5}} component="div" variant="p">
                    CarHouse is building a better automotive buying experience for everyone, by offering the largest selection of new and used cars in the Bangladesh. It's a largest place where you can find Your Desired Car !
                    </Typography>

                <Button style={{backgroundColor:'darkcyan'}} variant="contained">Explore More</Button>


               
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