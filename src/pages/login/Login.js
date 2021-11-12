import { Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';

import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import cover from '../../images/logincover.png';
import google from '../../images/google.png';
import bg from '../../images/loginbg.png';


const loginBg={
     background:`url(${bg})`,
    backgroundRepeat:'no-repeat',
    // backgroundImage: 'linear-gradient(rgb(238, 238, 183),rgb(33, 146, 167))',
    // backgroundBlendMode:'darken',
     height:'100vh',
    
    
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    // paddingBottom:'80px'

}

const Login = () => {

    const submitHandler=(e)=>{

    }
    return (
        <Box style={loginBg} sx={{ flexGrow: 1,}}>
            <Container sx={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh'}} >
            <Paper elevation={3} sx={{display:'flex',justifyContent:'center',alignItems:'center',p:3,backgroundColor:'rgba(255, 255, 255, 0)'}}>

            <Grid container spacing={2}>
                

                <Grid item xs={12} md={7} sx={{}}>
                    <img width="80%" src={cover} alt="Login Car Cover" />
                
                </Grid>
                <Grid item xs={12} md={5}>
                <Typography sx={{fontWeight:'bold',mb:4}} variant="h4" gutterBottom component="div">
                Login Your Account
               </Typography>

               <form  style={{}} onSubmit={submitHandler}>
               
               <TextField
               fullWidth
                required
                sx={{display:'flex', flexDirection:'column' ,justifyContent:'center',alignItems:'center'}}
                id="outlined-required"
                label="Email Id"
                type="email"
                /> <br />

                <TextField
                fullWidth
                
                id="outlined-password-input"
                label="Password"
                type="password"
                
                /> <br />

                <Button  fullWidth type="submit" sx={{backgroundColor:'info.main',mt:3,fontWeight:'bold'}} variant="contained">Login</Button>


               </form>
                
                <Link style={{textDecoration:'none'}} to="/register">
               <Typography sx={{mt:3,fontWeight:'bold',fontSize:20}} variant="p" display="block" gutterBottom>
                New member? <span style={{color:'darkcyan'}}>Sign Up</span> 
                </Typography>
                </Link>

                <h3 style={{color:'crimson'}}>OR</h3>
                <img src={google} alt="" height="" width="40px"></img>


               
                </Grid>
                
                
            </Grid>
            </Paper>
            </Container>
        </Box>
    );
};

export default Login;