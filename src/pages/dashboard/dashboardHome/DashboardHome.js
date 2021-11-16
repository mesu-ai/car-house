import { Button } from '@mui/material';
import React from 'react';
import cover from '../../../images/carfest.png';

const DashboardHome = () => {
    return (
        <div style={{marginTop:'-70px'}}>
            <img src={cover} alt="" width="100%" height="100%"></img>
            
            <Button color="success" variant='contained' sx={{mt:-15}}>Register Free &gt;&gt;</Button>
            
            
        </div>
    );
};

export default DashboardHome;