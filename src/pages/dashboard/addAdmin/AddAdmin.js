import { Alert, AlertTitle, Button, CircularProgress, TextField } from '@mui/material';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import * as React from 'react';
import AccountCircle from '@mui/icons-material/AccountCircle';
// import axios from 'axios';

const AddAdmin = () => {
    const [email,setEmail]=React.useState([]);
    // const [error,setError]=React.useState('');
    const [isLoading,setLoading]=React.useState(false);
    const [success,setSuccess]=React.useState(false);

    const adminField=document.getElementById('input-with-sx');


    const handleOnBlur=(e)=>{
        
        setEmail(e.target.value);


    }

    const handleAdmin=(e)=>{
        e.preventDefault();
        setLoading(true);
        const user={email:email}
        
        fetch('https://boiling-falls-94406.herokuapp.com/users/admin',{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        }).then(result=>{
                adminField.value='';
                setSuccess(true);
                 console.log(result);
                 

             })

            //  .catch((error) => {
            //     setError(error.message);
            // })
            .finally(()=>setLoading(false));

        }




    return (
        

            <Box>
                <Paper elevation={3} sx={{width:'50%',mx:'auto',p:4}}>
                {isLoading? <CircularProgress/> :
                <Box>

                {success && 
                <Alert severity="success">
                <AlertTitle>Success</AlertTitle>
                 Admin Added — <strong>check it out!</strong>
              </Alert>
                
                }
                <form onSubmit={handleAdmin}>
                
                <Box sx={{ display: 'flex', alignItems: 'flex-end',mb:3 }}>
                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField required fullWidth id="input-with-sx" label="Admin Email" type="email" onBlur={handleOnBlur} variant="standard" />
                </Box>

                {/* {error &&
                <Typography sx={{color:'crimson',mt:2,fontSize:20,fontWeight:'bold'}} variant="p" gutterBottom component="div"> {error} </Typography> 
                
                }*/}
                
                <Button type="submit" variant="contained">Add Admin</Button>
                </form>

                </Box>
                }

                </Paper>
            </Box>


        
    );
};

export default AddAdmin;