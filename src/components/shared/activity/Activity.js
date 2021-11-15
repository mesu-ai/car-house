import { Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import carfest from '../../../images/carfest.png';

const bg={
    background:`url(${carfest})`,
    backgroundRepeat:'no-repeat',
    backgroundSize: 'content',
    backgroundPosition: 'center',
    height:'200px'
     
}

const Activity = () => {
    return (
        <Box style={bg}  >
            
            <Button color="success" variant='contained' sx={{mt:16}}>Register Free &gt;&gt;</Button>

            
        </Box>
    );
};

export default Activity;