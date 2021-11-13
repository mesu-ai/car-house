import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {Grid,TextField} from '@mui/material';
// import axios from 'axios';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const UpdateModal = ({open,handleOpen,handleClose}) => {
    const [carData,setCarData]=React.useState({});

    const handleOnBlur=(e)=>{
        const field=e.target.name;
        const value=e.target.value;

        const newCarData={...carData};
        newCarData[field]=value;
        setCarData(newCarData);

    }
    
    const handleOnSubmit=(e)=>{
    
        handleClose();
        e.preventDefault();


    }



    return (
        <div>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <form className="form-container" onSubmit={handleOnSubmit} >

            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

            <Grid item xs={12} md={6}>

            <TextField fullWidth name="model" onBlur={handleOnBlur} label="Car Model" sx={{mb:2}}  />
                    
            </Grid>
            <Grid item xs={12} md={6}>

            <TextField fullWidth name="brand" onBlur={handleOnBlur} label="Car Brand" sx={{mb:2}}  />

            </Grid>
            <Grid item xs={12} md={6}>
            <TextField fullWidth name="price" onBlur={handleOnBlur} label="Car Price" sx={{mb:2}}  />
                    
            </Grid>
            <Grid item xs={12} md={6}>
            <TextField fullWidth name="rating" onBlur={handleOnBlur} label="Current Rating" sx={{mb:2}}  />
                
            </Grid>
            </Grid>

            <TextField
                sx={{mb:2}}
                fullWidth
                name="feature" onBlur={handleOnBlur}
                id="outlined-multiline-static"
                label="Key Feature"
                multiline
                rows={2}
                />
            <TextField
                sx={{mb:2}}
                fullWidth
                name="details" onBlur={handleOnBlur}
                id="outlined-multiline-static"
                label="Details"
                multiline
                rows={4}
                />

            <TextField name="photo" onBlur={handleOnBlur} fullWidth label="Photo URL" sx={{mb:3}}  />


            <Button type="submit" sx={{float:'right',backgroundColor:'info.main'}} variant="contained">Update Car</Button>

         </form>
            
          </Typography>

          
        </Box>
      </Modal>
       </div>
    );
};

export default UpdateModal;