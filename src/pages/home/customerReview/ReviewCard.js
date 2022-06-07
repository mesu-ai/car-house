import { Grid, Paper, Rating } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import AOS from 'aos';
import 'aos/dist/aos.css';

import React, { useEffect } from 'react';

const ReviewCard = ({creview}) => {
    useEffect(()=>{
        AOS.init();

    },[]);
    const {name,address,picture,review,rating}=creview;
    return (
        <Grid item xs={12} sm={4} md={4}  sx={{mx:'auto'}}>
        <Paper data-aos="fade-up" elevation={3} sx={{p:2,borderRadius:5}}>
            <Typography sx={{textAlign:'justify'}} variant="subtitle1" gutterBottom component="div">
            <i style={{color:'crimson'}} className="fas fa-quote-left"></i> <br />
            {review.slice(0,100)}
            
           </Typography>

           <Box sx={{display:'flex'}}>

           <img style={{borderRadius:'60%',padding:'1px'}} src={picture} alt="" width="80px" height="80px"  />
           <div style={{textAlign:'start',marginLeft:'15px'}}>
           
           <Rating size='small' name="half-rating-read" value={rating} precision={0.5} readOnly />

           <Typography sx={{color:'info.main',textTransform:'capitalize'}} variant="subtitle1" component="div">
           {name}
          </Typography>
           <Typography variant="body1" component="div">
           {address}
          </Typography>

          </div>

          </Box>







        </Paper>
        </Grid>
    );
};

export default ReviewCard;