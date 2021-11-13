import { Container, Paper, Rating, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Order = () => {
  const [selectedCar,setSelectedCar]=useState([]);
  const {id}=  useParams();
  const url=`http://localhost:5000/cars/${id}`;

  useEffect(()=>{
      fetch(url)
      .then(res=>res.json())
      .then(data=>setSelectedCar(data));
  },[url]);





    return (
        <Box sx={{ flexGrow: 1 }}>
        
        <Container>
         <Typography sx={{fontWeight:'bold',mt:4}} variant="h4" gutterBottom component="div">
          {selectedCar.model} Car Details
         </Typography>
        <Grid container spacing={4} sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Grid sx={{textAlign:'start'}} item xs={6} md={7}>
                

                <Box>
                <Grid container spacing={2}>
                    <Grid item xs={6} md={8}>
                    
                    <Typography sx={{fontWeight:'bold',mt:4}} variant="h5" gutterBottom component="div">
                    Price: {selectedCar.price}
                    </Typography>
                        
                    </Grid>
                    <Grid item xs={6} md={4} sx={{mt:4}}>
                    <Rating name="read-only" value={selectedCar.rating} readOnly />

                    </Grid>
                    
                </Grid>
                </Box>

            
            <Typography sx={{fontWeight:'bold',mt:4,color:'info.main'}} variant="h5" gutterBottom component="div">
            Brand: {selectedCar.brand}
            </Typography>
            <Typography sx={{fontWeight:'bold',mt:2,textTransform:'capitalize'}} variant="h6" gutterBottom component="div">
            Speciality: {selectedCar.feature}
            </Typography>
            <Typography sx={{textAlign:'justify'}} variant="body1" gutterBottom>
            Brand: {selectedCar.details}
            </Typography>
            
            
            </Grid>
            
            <Grid item xs={6} md={5}>
            <Paper sx={{p:3,mx:'auto'}} elevation={3} >
                <img src={selectedCar?.photo} alt="" width='100%'/>
            </Paper>
            </Grid>
            
        </Grid>
        </Container>
        </Box>
    );
};

export default Order;