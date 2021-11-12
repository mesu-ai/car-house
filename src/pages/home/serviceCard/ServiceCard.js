import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import './ServiceCard.css';
import React from 'react';

const ServiceCard = ({latest}) => {
    const {title,price,details} =latest;



    return (
        <Grid item xs={12} sm={4} md={4} sx={{mx:'auto'}}>
            <Card className="card-container" sx={{p:2,}}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
                />
                <CardContent >
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography sx={{textAlign:'justify'}} variant="body2" color="text.secondary">
                    {details}
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions sx={{}}>
                <Button sx={{backgroundColor:'darkcyan',mx:'auto'}} size="small" variant="contained">
                Buy Now
                </Button>
            </CardActions>
             </Card>
            
        </Grid>
    );
};

export default ServiceCard;