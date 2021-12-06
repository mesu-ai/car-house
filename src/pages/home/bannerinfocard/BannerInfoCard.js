import { Button, Container, Grid, Paper, Typography } from '@mui/material';
import { Box} from '@mui/system';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import car1 from '../../../images/infocard1.png';
import car2 from '../../../images/infocard2.png';
import car3 from '../../../images/infocard3.png';

const BannerInfoCard = () => {
    useEffect(()=>{
        AOS.init({
            delay: 0, 
            duration: 400,
            easing: 'ease'
        });

    },[]);
    return (
        <Box sx={{ width: '100%',mb:4,mt:-15 }}>
        <Container>
        <Grid  container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12} sm={6} md={6} lg={4}>
                <Paper data-aos="zoom-in-up" className="bannercard" sx={{p:2,backgroundColor:'rgba(200, 236, 236, 0.747)'}}  elevation={3}>
                     <img src={car1} alt="" width="200px" height="110px"/>
                    <Typography className="cardfont" sx={{fontWeight:'bold'}} variant="h5" gutterBottom component="div">
                    New Car
                    
                     </Typography>
                     <Link style={{textDecoration:'none'}} to="/explore">
                    <Button sx={{backgroundColor:'info.main'}} variant="contained">Explore</Button>
                    </Link>

                </Paper>
            
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
                <Paper data-aos="zoom-in-up" className="bannercard" sx={{p:2}} elevation={3}>
                    <img src={car2} alt="" width="200px" height="110px"/>
                    <Typography className="cardfont" sx={{fontWeight:'bold'}} variant="h5" gutterBottom component="div">
                    Recondition Car
                    </Typography>

                    <Link style={{textDecoration:'none'}} to="/explore">
                    <Button sx={{backgroundColor:'info.main'}} variant="contained">Explore</Button>
                    </Link>
                    
                    
                </Paper>
            
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
                <Paper data-aos="zoom-in-up" className="bannercard" sx={{p:2,backgroundColor:'rgba(200, 236, 236, 0.747)'}} elevation={3}>
                   <img src={car3} alt="" width="200px" height="110px"/>
                   <Typography className="cardfont" sx={{fontWeight:'bold'}} variant="h5" gutterBottom component="div">
                    Used Car
                    </Typography>
                    
                    <Link style={{textDecoration:'none'}} to="/explore">
                    <Button sx={{backgroundColor:'info.main'}} variant="contained">Explore</Button>
                    </Link>
                
                </Paper>
            
            </Grid>
        </Grid>
        </Container>
        </Box>
    );
};

export default BannerInfoCard;