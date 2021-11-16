import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import reviewcover from '../../../images/reviewcover.png';

import {Alert, AlertTitle, Container, Grid,Paper,TextField} from '@mui/material';
import axios from 'axios';
import useAuth from '../../../hooks/useAuth';

const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  };


const AddReview = () => {
    
    const {user}=useAuth();
    const initialInfo={name: user.displayName,email:user.email};
    const [review,setReview]=React.useState(initialInfo);
    const [success,setSuccess]=React.useState(false);

    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);
    

const handleOnBlur=(e)=>{
    const field=e.target.name;
    const value=e.target.value;

    const newReview={...review};
    newReview[field]=value;
    setReview(newReview);

}


const handleOnSubmit=(e)=>{
    const reviewData={...review,rating:value,date:Date().toLocaleString()}
    
        
    const url='https://boiling-falls-94406.herokuapp.com/reviews';
    axios.post(url,reviewData)
    .then(result=>{
        if(result.data.insertedId){
            console.log(result);
            setSuccess(true);


        }
    })


    
    e.preventDefault();


}





return (
    
    
    <Box sx={{mt:-5}}>
    <Container>
        <Typography variant="h4" sx={{color:'darkorchid',fontWeight:'bold'}}  component="div">
            Customer Feedback
        </Typography>
        <Typography variant="h6" sx={{fontWeight:'bold',mb:6}} gutterBottom component="div">
            Give Your Review & Rate Our Service
        </Typography>
        
        {success &&
        <Paper elevation={2} sx={{mb:3,width: '80%',mx:'auto',textAlign:'start'}}>
        <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
         Customer Feedback Placed — <strong>Successfully!</strong>
        </Alert>   
        </Paper> 
      }
        <Grid container spacing={2}>
        <Grid item xs={12} md={7}>
      
        {/* rating */}
        
    
       <Paper elevation={3} sx={{mx:'auto',p:2,mb:4,textAlign:'start'}}>
       <Typography variant="h6" sx={{fontWeight:'bold'}} gutterBottom component="div">
            Rate Our Service:
        </Typography>
        <Box
            sx={{
                width: 200,
                display: 'flex',
                alignItems: 'center',
            }}
            >
            <Rating
                name="hover-feedback"
                value={value}
                precision={0.5}
                onChange={(event, newValue) => {
                setValue(newValue);
                }}
                onChangeActive={(event, newHover) => {
                setHover(newHover);
                }}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
            {value !== null && (
                <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
            )}
         </Box>
         </Paper>



        {/* rating */}
        <form className="form-container" onSubmit={handleOnSubmit} >

        <Grid container rowSpacing={1} >

        <TextField fullWidth type="email" name="email" disabled label="Email" value={user.email || ""} sx={{mb:2}}  />

        <TextField required fullWidth name="name" onBlur={handleOnBlur} label="Customer Name" defaultValue={user.displayName} sx={{mb:2}}  />
 
        <TextField required fullWidth name="address" onBlur={handleOnBlur} label="Address" sx={{mb:2,textTransform:'capitalize'}}  />

        <TextField name="picture" onBlur={handleOnBlur} fullWidth label="User Photo URL" sx={{mb:3}} id="fullWidth" />

        <TextField required sx={{mb:2}} fullWidth name="review" onBlur={handleOnBlur} id="outlined-multiline-static" label="Write Your Opinion" multiline rows={2} />

        </Grid>

        <Button fullWidth type="submit" sx={{backgroundColor:'info.main',mt:2,p:1,textTransform:'capitalize'}} variant="contained">Place Feedback</Button>

        </form>    
        </Grid>

        <Grid item xs={12} md={5}>
        
        <div style={{display:'flex',justifyContent:'center',marginTop:'50px'}}>

        <img src={reviewcover} alt="" width="100%" />
        
        </div>
        </Grid>
        
    </Grid>

                    
    </Container>

        
    </Box>
    
    
);
};

export default AddReview;