import { Alert, AlertTitle, Button, Grid, Paper, Rating } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import axios from 'axios';

import React from 'react';

const MyReviewCard = ({creview,handleDelete,success}) => {
    const {_id,name,address,picture,review,rating}=creview;
    


   
    return (
        <>
        {
        success &&
        <Paper elevation={2} sx={{mt:-5,mb:2,width: '80%',mx:'auto',textAlign:'start'}}>
         <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
         Selected Review Removed from the list — <strong>check it out!</strong>
        </Alert>   
        </Paper> 
    }

        <Grid item xs={12} sm={4} md={4}  sx={{mx:'auto'}}>
        <Paper elevation={3} sx={{p:2}}>
            <Typography sx={{textAlign:'justify'}} variant="subtitle1" gutterBottom component="div">
            <i style={{color:'crimson'}} className="fas fa-quote-left"></i> <br />
            {review}
            
           </Typography>

           <Box sx={{display:'flex'}}>

           <img src={picture} alt="" width="100px" height="80px"  />
           <div style={{textAlign:'start',marginLeft:'15px'}}>
           <Rating name="read-only" value={rating} readOnly />
           <Typography sx={{color:'info.main',textTransform:'capitalize'}} variant="h5" component="div">
           {name}
          </Typography>
           <Typography variant="p" component="div">
           {address}
          </Typography>

          </div>
          

          </Box>
          <Button sx={{width:'100%',mt:3}} onClick={()=>handleDelete(_id)} variant="contained" color="error" >Delete</Button>
        </Paper>
        </Grid>
        </>
    );
};

export default MyReviewCard;