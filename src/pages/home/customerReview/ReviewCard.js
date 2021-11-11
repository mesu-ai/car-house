import { Grid, Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';

import React from 'react';

const ReviewCard = ({creview}) => {
    const {name,address,picture,review}=creview;
    return (
        <Grid item xs={12} sm={4} md={4}  sx={{mx:'auto'}}>
        <Paper elevation={3} sx={{p:2}}>
            <Typography sx={{textAlign:'justify'}} variant="subtitle1" gutterBottom component="div">
            <i style={{color:'crimson'}} className="fas fa-quote-left"></i> <br />
            {review.slice(0,100)}
            
           </Typography>

           <Box sx={{display:'flex'}}>

           <img src={picture} alt="" />
           <div style={{textAlign:'start',marginLeft:'15px'}}>

           <Typography sx={{color:'info.main'}} variant="h5" gutterBottom component="div">
           {name}
          </Typography>
           <Typography variant="h6" gutterBottom component="div">
           {address}
          </Typography>

          </div>

          </Box>







        </Paper>
        </Grid>
    );
};

export default ReviewCard;