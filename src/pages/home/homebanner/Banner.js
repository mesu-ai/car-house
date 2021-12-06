import './Banner.css';
import { Container, Grid,Button,Typography } from '@mui/material';
import { Box,} from '@mui/system';
import { Link } from 'react-router-dom';
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
            <Grid sx={{pt:{xs:5,md:4}}} container spacing={5} >
                <Grid item  xs={12} md={6}  sx={{mb:5,textAlign:'start',display:'flex',flexDirection:'column',alignItems:'start',justifyContent:'center'}}>

                    
                    
                    <Typography sx={{fontSize:{xs:'6vw',md:'4vw'}}} variant="">
                    <span className="textfont" style={{fontWeight:'bold',color:'crimson'}}>The Easiest way  </span> <br />
                    To find your new car !

                    </Typography>
                    
                    <Typography sx={{fontSize:18,my:5,textAlign:'justify'}} component="div" variant="p">
                    CarHouse is building a better automotive buying experience for everyone, by offering the largest selection of new and used cars in the Bangladesh. It's a largest place where you can find Your Desired Car !
                    </Typography>
                   
                
                <Link style={{textDecoration:'none'}} to='/explore'>
                <Button style={{backgroundColor:'darkcyan'}} variant="contained">Explore More</Button>
                </Link>

               
                </Grid>
                <Grid item xs={12} md={6}  sx={{display:"flex",justifyContent:"end"}}>
                    <img   src={bannercover} alt="" width="80%" />
                </Grid>
                
            </Grid>
            </Container>
        </Box>
        
    );
};

export default Banner;