import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React from 'react';
import useMyreview from '../../../hooks/useMyreview';
import MyReviewCard from './MyReviewCard';

const MyReview = () => {
   const {reviewMyself,setReviewMyself}= useMyreview();
   const [success,setSuccess]=React.useState(false);

   const handleDelete=(id)=>{
    console.log(id);
    const url=`https://boiling-falls-94406.herokuapp.com/reviews/${id}`;
      const proceed=window.confirm('Are You Sure Dalete the Review?')
      if(proceed){
        axios.delete(url)
        .then(result=>{
            setSuccess(true);
            const remainingReview=reviewMyself.filter(review=>review._id !== id);
            setReviewMyself(remainingReview);

        })
      }      
  }






    return (
        <Box sx={{ flexGrow: 1,mt:5 }}>
        <Container>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {
            reviewMyself.map(creview=><MyReviewCard key={Math.random()} creview={creview} success={success} handleDelete={handleDelete}></MyReviewCard>)

            }
        </Grid>
        </Container>
        
        </Box>
    );
};

export default MyReview;