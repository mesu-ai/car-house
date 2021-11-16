import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Rating, Typography } from '@mui/material';
import './ServiceCard.css';
import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({latest,url,btnName}) => {
    const {_id,model,feature,price,rating,photo} =latest;



    return (
        <Grid item xs={12} sm={4} md={4} sx={{mx:'auto'}}>
            <Card className="card-container" sx={{p:2,}}>
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
                    
                    <Typography sx={{textTransform:'capitalize',fontWeight:'bold'}} gutterBottom variant="h5" component="div">
                    {model}
                    </Typography>
                        
                    </Grid>
                    <Grid item xs={12} md={5}>
                    <Typography sx={{fontWeight:'bold',color:'info.main'}} gutterBottom variant="h5" component="div">
                    $ {price}
                    </Typography>
                    
                    </Grid>
                </Grid>

                <Rating name="read-only" value={rating} readOnly />

                <Typography sx={{textTransform:'capitalize',textAlign:'start'}} variant="subtitle1" gutterBottom component="div">

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