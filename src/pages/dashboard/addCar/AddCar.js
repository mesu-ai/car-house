
import { Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import axios from 'axios';
import '../Dashboard.css';


const AddCar = () => {
    const [carData,setCarData]=useState({});

    const handleOnBlur=(e)=>{
        const field=e.target.name;
        const value=e.target.value;

        const newCarData={...carData};
        newCarData[field]=value;
        setCarData(newCarData);


    }
    const handleOnSubmit=(e)=>{
        const url=('http://localhost:5000/cars')
        const car={...carData};
        axios.post(url,car)
        .then(result=>{
            if(result.data.insertedId){
                alert('New Car Added To List');
                setCarData('');
            }
        })
    

        

        e.preventDefault();


    }



    return (
        <Box className="addcarbg" sx={{ flexGrow: 1, pt:5 }}>
             
        <Container >
        
            <Paper elevation={3} sx={{mx:'auto',p:5}} className="addcar-form"  style={{width:'70%',backgroundColor:'rgba(253, 247, 222, 0.884)'}}>
            
            <Typography variant="h4" sx={{color:'darkorchid',fontWeight:'bold',p:3}} gutterBottom component="div">
              Add Latest Car
            </Typography>
                <div >
                <form className="form-container" onSubmit={handleOnSubmit} >

                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                <Grid item xs={12} md={6}>

                 <TextField fullWidth name="model" onBlur={handleOnBlur} label="Car Model" sx={{mb:2}} id="fullWidth" />
                        
                </Grid>
                <Grid item xs={12} md={6}>

                 <TextField fullWidth name="brand" onBlur={handleOnBlur} label="Car Brand" sx={{mb:2}} id="fullWidth" />

                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField fullWidth name="price" onBlur={handleOnBlur} label="Car Price" sx={{mb:2}} id="fullWidth" />
                        
                </Grid>
                <Grid item xs={12} md={6}>
                 <TextField fullWidth name="rating" onBlur={handleOnBlur} label="Current Rating" sx={{mb:2}} id="fullWidth" />
                       
                </Grid>
                </Grid>

                <TextField
                    sx={{mb:2}}
                    fullWidth
                    name="feature" onBlur={handleOnBlur}
                    id="outlined-multiline-static"
                    label="Key Feature"
                    multiline
                    rows={2}
                     />
                <TextField
                    sx={{mb:2}}
                    fullWidth
                    name="details" onBlur={handleOnBlur}
                    id="outlined-multiline-static"
                    label="Details"
                    multiline
                    rows={4}
                     />

                <TextField name="photo" onBlur={handleOnBlur} fullWidth label="Photo URL" sx={{mb:3}} id="fullWidth" />


                <Button type="submit" variant="contained">Add A New Car</Button>

                </form>
                </div>
                </Paper>
        
          
        </Container>
        </Box>
    );
};

export default AddCar;