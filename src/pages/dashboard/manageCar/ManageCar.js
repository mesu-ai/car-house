import * as React from 'react';
import '../Dashboard.css';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import useCars from '../../../hooks/useCars';
import { Alert, AlertTitle, Button } from '@mui/material';
import axios from 'axios';

// import UpdateModal from './updateModal/UpdateModal';
// import { Link } from 'react-router-dom';



export default function ManageCar() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const {cars,setCars}=useCars();
  const [success,setSuccess]=React.useState(false);

//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);
// let { path, url } = useRouteMatch();
// const history=useHistory();


  const handleDelete=(id)=>{
    const url=`http://localhost:5000/cars/${id}`;
      const proceed=window.confirm('Are You Sure Remove The Car?')
      if(proceed){
        axios.delete(url)
        .then(result=>{
            setSuccess(true);
            const remainingCar=cars.filter(car=>car._id !== id);
            setCars(remainingCar);

        })
      }      
  }

//   const handleUpdate=(id)=>{
      
//     const url=to={`${url}/updatecar`}
//     history.push(url);


//   }
   


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
    {success &&
    <Paper elevation={2} sx={{mt:-5,mb:2,width: '80%',mx:'auto',textAlign:'start'}}>
         <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
         Selected Car Removed from the list — <strong>check it out!</strong>
        </Alert>   
    </Paper> 
    }

    <Paper elevation={3} sx={{ width: '80%', overflow: 'hidden',p:2,mx:'auto' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell sx={{fontWeight:'bold'}}>Car Model</TableCell>
            <TableCell sx={{fontWeight:'bold'}} align="right">Brand</TableCell>
            <TableCell sx={{fontWeight:'bold'}} align="right">Price</TableCell>
            <TableCell sx={{fontWeight:'bold'}} align="right">Update</TableCell>
            <TableCell sx={{fontWeight:'bold'}} align="right">Delete</TableCell>

          </TableRow>
        </TableHead>
          <TableBody>
            {cars
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                    <TableRow hover role="checkbox" tabIndex={-1}
                    key={Math.random()}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
              <TableCell sx={{textTransform:'uppercase'}} component="th" scope="row">
                {row.model}
              </TableCell>

              <TableCell sx={{textTransform:'uppercase'}} align="right">{row.brand}</TableCell>

              <TableCell align="right">{row.price}</TableCell>
              

              
              <TableCell align="right"><Button variant="contained">Update</Button></TableCell>
              

              <TableCell  align="right"><Button onClick={()=>handleDelete(row._id)} variant="contained" color="error" >Delete</Button></TableCell>

            </TableRow>
                  

                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={cars.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>

    {/* <UpdateModal open={open} handleOpen={handleOpen} handleClose={handleClose}></UpdateModal> */}
    
    </>
  );
}