import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import useReview from '../../../hooks/useReview';
import ReviewCard from './ReviewCard';
import bg from '../../../images/reviewbg.png';


const reviewbg={
    background:`url(${bg})`,
    backgroundRepeat:'no-repeat',
    // backgroundColor:'rgba(223, 219, 228, 0.911)', 
    // backgroundBlendMode:'screen',
    // objectFit: 'cover',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    paddingBottom:'80px'
}

const CustomerReview = () => {

    const {topReviews} = useReview();
    
    return (
        <Box style={reviewbg} sx={{mt:10, mb:4}}>
        <Container sx={{}}>
        <Box sx={{textAlign:'start',py:4}}>
        <Typography sx={{fontWeight:'bold',color:'info.main'}} variant="h5" gutterBottom component="div">
        Customer Review
        </Typography>
        <Typography sx={{fontWeight:'bold',color:'black'}} variant="h4" gutterBottom component="div">
        What Customer Are Saying
        </Typography>
        
        </Box>

        <Box sx={{ flexGrow: 1,mt:5 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {
            topReviews.map(creview=><ReviewCard key={Math.random()} creview={creview}></ReviewCard>)

            }
        </Grid>
        
        </Box>
        </Container>
        </Box>
    );
};

export default CustomerReview;