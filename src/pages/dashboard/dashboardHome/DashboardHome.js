import { Button } from '@mui/material';
import React from 'react';
import cover from '../../../images/carfest.png';

const DashboardHome = () => {
    return (
        <div style={{marginTop:'-70px',backgroundColor:'#cfd8dc',padding:'15px'}}>
            <img src={cover} alt="" width="100%" height="100%"></img>
            
            <Button  sx={{ mt: { xs:'none',sm:'none', lg: -13 },fontSize:{ xs:'2vw',sm:'2vw', md:'1vw' } }} color="error" variant='contained' >Register Free &gt;&gt;</Button>
            
            
            
        </div>
    );
};

export default DashboardHome;