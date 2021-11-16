import { Grid, Paper, Rating } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';

import React from 'react';

const ReviewCard = ({creview}) => {
    const {name,address,picture,review,rating}=creview;
    return (
        <Grid item xs={12} sm={4} md={4}  sx={{mx:'auto'}}>
        <Paper elevation={3} sx={{p:2}}>
            <Typography sx={{textAlign:'justify'}} variant="subtitle1" gutterBottom component="div">
            <i style={{color:'crimson'}} className="fas fa-quote-left"></i> <br />
            {review.slice(0,100)}
            
           </Typography>

           <Box sx={{display:'flex'}}>

           <img src={picture} alt="" width="100px" height="80px"  />
           <div style={{textAlign:'start',marginLeft:'15px'}}>
           
           <Rating name="half-rating-read" value={rating} precision={0.5} readOnly />

           <Typography sx={{color:'info.main',textTransform:'capitalize'}} variant="h5" component="div">
           {name}
          </Typography>
           <Typography variant="p" component="div">
           {address}
          </Typography>

          </div>

          </Box>







        </Paper>
        </Grid>
    );
};

export default ReviewCard;