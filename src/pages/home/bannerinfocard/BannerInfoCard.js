import { Container, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import './BannerInfo.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import car1 from '../../../images/infocard1.png';
import car2 from '../../../images/infocard2.png';
import car3 from '../../../images/infocard3.png';
import { experimentalStyled as styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    background:'aliceblue',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    borderRadius:'12px'
}));

const infoCards = [
    {
        "id": 1,
        "title": "New Car",
        "image": car1
    },
    {
        "id": 2,
        "title": "Reconditon Car",
        "image": car2
    },
    {
        "id": 3,
        "title": "Used Car",
        "image": car3
    },
]

const BannerInfoCard = () => {
    useEffect(() => {
        AOS.init({
            delay: 0,
            duration: 400,
            easing: 'ease'
        });

    }, []);
    return (
        <Box sx={{ width: '100%', mb: 4, mt: -15 }}>
            <Container>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {infoCards.map((item, index) => (
                        <Grid item xs={2} sm={4} md={4} key={index}>
                            <Item data-aos="zoom-in-up" className='bannerInfo2' >
                                <img src={item.image} alt="" width="200px" height="110px" />
                                <Typography className="card-text" sx={{ fontWeight: 'normal' }} variant="h6" gutterBottom component="div">
                                    {item.title}
                                </Typography>

                            </Item>
                        </Grid>
                    ))}
                </Grid>


            </Container>
        </Box>
    );
};

export default BannerInfoCard;