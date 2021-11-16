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
import useReview from '../../../hooks/useReview';

// import UpdateModal from './updateModal/UpdateModal';
// import { Link } from 'react-router-dom';



export default function ManageReview() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const {reviews,setReviews}=useReview();
  const [success,setSuccess]=React.useState(false);


  const handleDelete=(id)=>{
    console.log(id);
    const url=`https://boiling-falls-94406.herokuapp.com/reviews/${id}`;
      const proceed=window.confirm('Are You Sure Dalete the Review?')
      if(proceed){
        axios.delete(url)
        .then(result=>{
            setSuccess(true);
            const remainingReview=reviews.filter(review=>review._id !== id);
            setReviews(remainingReview);

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
         Selected Review Removed from the list — <strong>check it out!</strong>
        </Alert>   
    </Paper> 
    }

    <Paper elevation={3} sx={{ width: '80%', overflow: 'hidden',p:2,mx:'auto' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell sx={{fontWeight:'bold'}}>Customer Name</TableCell>
            <TableCell sx={{fontWeight:'bold'}} align="right">Rating</TableCell>
            <TableCell sx={{fontWeight:'bold'}} align="right">Feedback</TableCell>
            {/* <TableCell sx={{fontWeight:'bold'}} align="right">Update</TableCell> */}
            <TableCell sx={{fontWeight:'bold'}} align="right">Delete</TableCell>

          </TableRow>
        </TableHead>
          <TableBody>
            {reviews
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                    <TableRow hover role="checkbox" tabIndex={-1}
                    key={Math.random()}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
              <TableCell sx={{textTransform:'capitalize'}} component="th" scope="row">
                {row.name}
              </TableCell>

              <TableCell sx={{}} align="right">{row.rating}</TableCell>

              <TableCell sx={{textAlign:'justify'}} align="right">{row.review}</TableCell>

              {/* <TableCell align="right">{row._id}</TableCell> */}


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
        count={reviews.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>

    
    
    </>
  );
}