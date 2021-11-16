import { Button, Container, Paper, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Rating from '@mui/material/Rating';
import { useHistory, useParams } from 'react-router';
import Navbar from '../../components/shared/Navbar';

const OrderDetails = () => {
  const [selectedCar,setSelectedCar]=useState([]);
  
  
  
  
  const {id}=  useParams();
  const url=`https://boiling-falls-94406.herokuapp.com/cars/${id}`;

  useEffect(()=>{
      fetch(url)
      .then(res=>res.json())
      .then(data=>setSelectedCar(data));
  },[url]);

  const history= useHistory();
  const orderPlace=(id)=>{
      const url=`/orderplace/${id}`;
      history.push(url);

  }

     const rating=parseFloat(selectedCar?.rating);
  


  



    return (
         <>
         <Navbar></Navbar>
        <Box sx={{ flexGrow: 1 }}>
        
        <Container>
         <Typography sx={{fontWeight:'bold',mt:4,color:'black'}} variant="h4" gutterBottom component="div">
          {selectedCar.model} Car Details
         </Typography>
        <Grid container spacing={4} sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Grid sx={{textAlign:'start'}} item xs={12} md={7}>
                

                <Box>
                <Grid container spacing={2}>
                    <Grid item xs={6} md={7}>
                    
                    <Typography sx={{fontWeight:'bold',mt:4}} variant="h5" gutterBottom component="div">
                     Price: <span style={{color:'crimson'}}> $ {selectedCar.price}</span> 
                    </Typography>
                        
                    </Grid>
                    <Grid item xs={6} md={5} sx={{mt:4}}>

                    <Rating name="read-only" value={rating.toString() ||''} readOnly  />

                     

                    

                    </Grid>
                    
                </Grid>
                </Box>

            
            <Typography sx={{fontWeight:'bold',mt:4}} variant="h5" gutterBottom component="div">
            Brand: <span style={{color:'navy',textTransform:'capitalize'}}>{selectedCar.brand}</span> 
            </Typography>
            <Typography sx={{fontWeight:'bold',mt:2,textTransform:'capitalize'}} variant="h6" gutterBottom component="div">
            Speciality: {selectedCar.feature}
            </Typography>
            <Typography sx={{textAlign:'justify'}} variant="body1" gutterBottom>
            Brand: {selectedCar.details}
            </Typography>

            <Button onClick={()=>orderPlace(id)} fullWidth sx={{mt:3}} variant="contained" color="success">Order Place</Button>
            
            
            </Grid>
            
            <Grid item xs={12} md={5}>
            <Paper sx={{p:3,mx:'auto',mt:3}} elevation={3} >
                <img src={selectedCar?.photo} alt="" width='100%'/>

                <Typography  sx={{mt:3,backgroundColor:'crimson',p:1,color:'white'}}> {selectedCar.brand} Latest Edition</Typography>
            </Paper>
            </Grid>
            
        </Grid>
        </Container>
        </Box>
        </>
    );
};

export default OrderDetails;