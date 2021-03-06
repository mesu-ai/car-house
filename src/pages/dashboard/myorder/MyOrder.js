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
import { Alert, AlertTitle, Button } from '@mui/material';
import axios from 'axios';
import useMyself from '../../../hooks/useMyself';


export default function MyOrder() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const {myself,setMyself}= useMyself();
  const [success,setSuccess]=React.useState(false);


  const handleDelete=(id)=>{
    const url=`https://boiling-falls-94406.herokuapp.com/orders/${id}`;
      const proceed=window.confirm('Are You Sure Cancle The Order?')
      if(proceed){
        axios.delete(url)
        .then(result=>{
            setSuccess(true);
            const remainingOrder=myself.filter(my=>my._id !== id);
            setMyself(remainingOrder);

        })
      }      
  }


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
         Selected Order Cancled from the list — <strong>check it out!</strong>
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
            <TableCell sx={{fontWeight:'bold'}} align="right">Payable</TableCell>

            <TableCell sx={{fontWeight:'bold'}} align="right">Status</TableCell>
            {/* <TableCell sx={{fontWeight:'bold'}} align="right">Update</TableCell> */}
            <TableCell sx={{fontWeight:'bold'}} align="right">Action</TableCell>

          </TableRow>
        </TableHead>
          <TableBody>
            {myself
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                    <TableRow hover role="checkbox" tabIndex={-1}
                    key={Math.random()}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
              <TableCell sx={{textTransform:'capitalize',}} component="th" scope="row">
                {row.model}
              </TableCell>

              <TableCell sx={{textTransform:'uppercase'}} align="right">{row.brand}</TableCell>

              <TableCell align="right">{row.totalPrice}</TableCell>

              <TableCell sx={{fontWeight:'bold'}} align="right"><span style={{backgroundColor:'green',padding:'8px 8px',color:'white',borderRadius:'5px'}}>{row?.orderStatus}</span></TableCell>
              
              
              {/* <TableCell align="right"><Button variant="contained">Update</Button></TableCell> */}
              

              <TableCell  align="right"><Button onClick={()=>handleDelete(row._id)} variant="contained" color="error" >Cancle</Button></TableCell>

            </TableRow>
                  

                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={myself.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>

    
    
    </>
  );
}