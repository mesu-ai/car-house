import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Rating, Typography } from '@mui/material';
import './ServiceCard.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({latest,url,btnName}) => {
    useEffect(()=>{
        AOS.init();

    },[]);
    const {_id,model,feature,price,rating,photo} =latest;



    return (
        <Grid item xs={12} sm={4} md={4} sx={{mx:'auto'}}>
            <Card data-aos="zoom-in-up" className="card-container" sx={{p:2,borderRadius:'12px', boxShadow: 3,bgcolor:'antiquewhite'}}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image={photo}
                alt="green iguana"
                />
                <CardContent >

                <Grid container spacing={2}>
                    <Grid item xs={12} md={7}>
                    
                    <Typography sx={{textTransform:'capitalize',fontWeight:'bold'}} gutterBottom variant="h6" component="div">
                    {model}
                    </Typography>
                        
                    </Grid>
                    <Grid item xs={12} md={5}>
                    <Typography color='error' sx={{fontWeight:'bold'}} gutterBottom variant="h6" component="div">
                    $ {price}
                    </Typography>
                    
                    </Grid>
                </Grid>

                <Box sx={{float:'end',textAlign:'end'}}>
                    <Rating size='small' name="half-rating-read" value={rating} precision={0.5} readOnly />
                </Box>
                

                <Typography sx={{textTransform:'capitalize',textAlign:'start'}} variant="body1" gutterBottom component="div">

                    {feature}
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions sx={{}}>

                <Link style={{textDecoration:'none'}} to={`${url}/${_id}`}>
                <Button sx={{backgroundColor:'darkcyan',ml:1}} size="small" variant="contained">
                {btnName}
                </Button>
                </Link>

            </CardActions>
             </Card>
            
        </Grid>
    );
};

export default ServiceCard;