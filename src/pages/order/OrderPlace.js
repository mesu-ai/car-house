import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import {Container, Grid,TextField} from '@mui/material';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import Navbar from '../../components/shared/Navbar';


  const OrderPlace = () => {
       const {id}= useParams();
       const {user}=useAuth();
       const [car,setCar]=React.useState([]);
       
       const initialInfo={customername: user.displayName,email:user.email};
       const [carData,setCarData]=React.useState(initialInfo);


    const loadUrl=`http://localhost:5000/cars/${id}`;

  React.useEffect(()=>{
      fetch(loadUrl)
      .then(res=>res.json())
      .then(data=>setCar(data));
  },[loadUrl]);
 
    const price=parseInt(car?.price);
    const tax=(price * .15);
    const total=parseFloat(price+tax).toFixed(2);
   
    // console.log(price,tax,total);

    const handleOnBlur=(e)=>{
        const field=e.target.name;
        const value=e.target.value;

        const newCarData={...carData};
        newCarData[field]=value;
        setCarData(newCarData);

    }
    const history=useHistory();
    const postUrl='http://localhost:5000/orders';
    const handleOnSubmit=(e)=>{
        const orderdata={
            ...carData,model:car.model, brand: car.brand,totalPrice:total, orderStatus: 'Pending'
            
        }
        
        
        axios.post(postUrl,orderdata)
        .then(result=>{
            if(result.data.insertedId){
                alert('Order Placed Successfully');
                history.push('/home');
                console.log(orderdata);

            }
        })


        console.log(orderdata);
    
       
        e.preventDefault();


    }

    



    return (
        
      
        <Box>
         <Navbar></Navbar>
        <Container>
          <Typography sx={{my:5}} variant="h6" component="h2">
            Text in a modal {id}
          </Typography>
          
           <Grid container spacing={1}>
            <Grid item xs={12} md={7}>
            <form className="form-container" onSubmit={handleOnSubmit} >

            <Grid container rowSpacing={1} >
            <Grid item xs={12} md={6}>

            <TextField fullWidth name="model"  label="Car Model" sx={{mb:2,textTransform:'capitalize'}} value={car.model || ''} disabled />
                    
            </Grid>
            <Grid item xs={12} md={6}>

            <TextField fullWidth name="brand" 
             label="Car Brand" sx={{mb:2,textTransform:'capitalize'}} value={car.brand || ''} disabled />

            </Grid>

            <TextField fullWidth type="email" name="email" disabled label="Email" value={user.email || ""} sx={{mb:2}}  />

            <TextField fullWidth name="customername" onBlur={handleOnBlur} label="Customer Name" defaultValue={user.displayName} sx={{mb:2}}  />

            <TextField fullWidth type="tel" name="phone" onBlur={handleOnBlur} label="Phone Number" sx={{mb:2}}  />

            
            <TextField fullWidth name="address" onBlur={handleOnBlur} label="Address" sx={{mb:2,textTransform:'capitalize'}}  />

            </Grid>

            <Button fullWidth type="submit" sx={{backgroundColor:'info.main',mt:2,p:1}} variant="contained">Order Car</Button>

            </form>    
            </Grid>

            <Grid item xs={12} md={5}>
            
            <div style={{textAlign:'end',marginRight:'50px',marginTop:'50px'}}>

            <Typography variant="h4" sx={{color:'blue',fontWeight:'bold',mb:5}} gutterBottom component="div">
              Total Payable
            </Typography>
            
            <Grid container spacing={0}>
                <Grid item xs={4}>
                </Grid>

                <Grid item xs={4} sx={{textAlign:'end',fontSize:'20px',fontWeight:'bold'}}>
                   <span>Price</span><hr />
                   <span>Tax</span><hr /><hr />
                   <span>Total Price</span>
                        
                </Grid>
                <Grid item xs={4} sx={{textAlign:'end',fontSize:'20px',fontWeight:'bold'}}>
                   <span>$ {price}</span><hr />
                   <span>$ {tax}</span><hr /><hr />
                   <span>$ {total}</span>
                        
                </Grid>
                
                
            </Grid>

            </div>


            
            </Grid>
            
        </Grid>

                     
        </Container>

          
        </Box>
     
       
    );
};

export default OrderPlace;