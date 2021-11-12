import React, { useState } from 'react';
import '../login/Login.css';
import { useHistory,useLocation } from 'react-router';

import { Button, CircularProgress, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import cover from '../../images/logincover.png';
import google from '../../images/google.png';
import bg from '../../images/loginbg.png';
import useAuth from '../../hooks/useAuth';


const loginBg={
    background:`url(${bg})`,
    backgroundRepeat:'no-repeat',
    height:'100vh',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    // paddingBottom:'80px'

}

const Login = () => {
   const {isLoading,error,signInUsingGoogle,signInUsingEmailPassword}= useAuth();
    const [loginData,setLoginData]=useState({});

    const location= useLocation();
    const history= useHistory();


    const googleLogin=()=>{
        signInUsingGoogle(location,history);
    }


    const handleOnBlur=(e)=>{
        const field=e.target.name;
        const value=e.target.value;

        const newLoginData={...loginData};
        newLoginData[field]=value;
        setLoginData(newLoginData);

    }


    const submitHandler=(e)=>{
        console.log(loginData);
       
        signInUsingEmailPassword(loginData.email,loginData.password,location,history);

        e.preventDefault();

    }
    return (
        <Box style={loginBg} sx={{ flexGrow: 1,}}>
            <Container sx={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh'}} >
            <Paper elevation={3} sx={{display:'flex',justifyContent:'center',alignItems:'center',p:3,backgroundColor:'rgba(255, 255, 255, 0)'}}>

            <Grid container spacing={2}>
                

                <Grid  item xs={12} sm={6} md={7} sx={{ display: { xs: 'none',sm:'flex', md: 'flex' } }}>
                    <img  width="80%" src={cover} alt="Login Car Cover" />
                
                </Grid>
                <Grid item xs={12} sm={6} md={5}>
                <Typography className="loginfont" sx={{fontWeight:'bold',mb:4}} variant="h4" gutterBottom component="div">
                Login Your Account
               </Typography>

               { isLoading ? <CircularProgress/> :
               
               <Box>

               <form  onSubmit={submitHandler}>
               
               <TextField
               fullWidth
                required
                onBlur={handleOnBlur}
                name="email"
                sx={{mb:2}}
                id="outlined-required"
                label="Email Id"
                type="email"
                /> <br />

                <TextField
                fullWidth
                required
                onBlur={handleOnBlur}
                name="password"
                id="outlined-password-input"
                label="Password"
                type="password"
                
                /> <br />

                {error &&
                <Typography sx={{color:'crimson',mt:2,fontSize:20,fontWeight:'bold'}} variant="p" gutterBottom component="div"> {error} </Typography>
                
                }

                <Button  fullWidth type="submit" sx={{backgroundColor:'info.main',mt:3,fontWeight:'bold'}} variant="contained">Login</Button>

                   
               </form>

                
                <Link style={{textDecoration:'none'}} to="/register">
               <Typography sx={{mt:3,fontWeight:'bold',fontSize:20}} variant="p" display="block" gutterBottom>
                New member? <span style={{color:'darkcyan'}}>Sign Up</span> 
                </Typography>
                </Link>

                <h3 style={{color:'crimson'}}>OR</h3>
                <img onClick={googleLogin} src={google} alt="" height="" width="40px"></img>

                </Box>
                 }

                </Grid>
                  
                
            </Grid>
            </Paper>
            </Container>
        </Box>
    );
};

export default Login;