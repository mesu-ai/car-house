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
import { Alert, AlertTitle, Button} from '@mui/material';
import axios from 'axios';
import useOrder from '../../../hooks/useOrder';


export default function ManageOrder() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const {orders,setOrders}= useOrder();
  
  const [success,setSuccess]=React.useState(false);



  

  const handleStatus=(_id)=>{
   

    const orderId={_id:_id,orderStatus:'Approved'};
    // const status={orderStatus:'Approved'};
    const url=`http://localhost:5000/orders/orderStatus`;
    axios.put(url,orderId)
    .then(result=>{
      console.log(result);
    })
    

  }

  


  const handleDelete=(id)=>{
    const url=`http://localhost:5000/orders/${id}`;
      const proceed=window.confirm('Are You Sure Cancle The Order?')
      if(proceed){
        axios.delete(url)
        .then(result=>{
            setSuccess(true);
            const remainingOrder=orders.filter(order=>order._id !== id);
            setOrders(remainingOrder);

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
            <TableCell sx={{fontWeight:'bold'}}>Order Id</TableCell>
            <TableCell sx={{fontWeight:'bold'}} align="right">Customer Name</TableCell>
            <TableCell sx={{fontWeight:'bold'}} align="right">Product</TableCell>

            <TableCell sx={{fontWeight:'bold'}} align="right">Current Status</TableCell>
            

            <TableCell sx={{fontWeight:'bold'}} align="right">Update Status</TableCell>

            <TableCell sx={{fontWeight:'bold'}} align="right">Action</TableCell>

          </TableRow>
        </TableHead>
          <TableBody>
            {orders
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                
                return (
                    <TableRow hover role="checkbox" tabIndex={-1}
                    key={Math.random()}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
              <TableCell sx={{fontWeight:'bold',color:'info.main'}} component="th" scope="row">
                {row._id}
              </TableCell>

              <TableCell sx={{textTransform:'capitalize'}} align="right">
                {row.customername}
              </TableCell>

              <TableCell sx={{textTransform:'capitalize'}} align="right">
                {row.model}
              </TableCell>

              <TableCell sx={{fontWeight:'bold'}} align="right"><span style={{padding:'8px 8px',color:'green',borderRadius:'5px'}}>{row?.orderStatus}</span></TableCell>  
              
              <TableCell align="right">
                <Button onClick={()=>handleStatus(row._id)} variant="contained">Confirm</Button>

              
              </TableCell>

              
              

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
        count={orders.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>

    
    
    </>
  );
}