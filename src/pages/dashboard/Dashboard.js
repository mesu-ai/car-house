import * as React from 'react';
import '../dashboard/Dashboard.css';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FeedbackIcon from '@mui/icons-material/Feedback';
import IconButton from '@mui/material/IconButton';
import {Switch,Route,Link,useRouteMatch} from "react-router-dom";
import { Logout,Home, LocalTaxi,Reviews,AdminPanelSettings,BookOnline,RateReview,CarRental,DashboardCustomize} from '@mui/icons-material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import PaymentIcon from '@mui/icons-material/Payment';
import Typography from '@mui/material/Typography';
import { ListItemButton } from '@mui/material';
import useAuth from '../../hooks/useAuth';
import MyOrder from './myorder/MyOrder';
import MyReview from './myreview/MyReview';
import AddCar from './addCar/AddCar';
import ManageCar from './manageCar/ManageCar';
import ManageReview from './manageReview/ManageReview';
import AddAdmin from './addAdmin/AddAdmin';
import UpdateCar from './manageCar/updateCar/UpdateCar';
import ManageOrder from './manageOrder/ManageOrder';
import AdminRoute from '../login/adminRoute/AdminRoute';
import Navbar from '../../components/shared/Navbar';
import AddReview from './myreview/AddReview';
import Payment from './payment/Payment';
import DashboardHome from './dashboardHome/DashboardHome';

const drawerWidth = 240;

function Dashboard(props) {

    const {userLogOut,isAdmin,user}=useAuth();
    let { path, url } = useRouteMatch();


  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
       
      {/* <Toolbar /> */}
      <Toolbar sx={{fontWeight:'bold',fontSize:'20px',color:'green'}}><DashboardCustomize sx={{mr:1}}/>
          DashBoard
      
      </Toolbar>
      
      <Divider />
      <List>

      <Link className="dashboard-item" to="/home">
      <ListItem className="list-item" disablePadding>
              <ListItemButton >
                  <ListItemIcon  >
                  <Home color="primary" />
                  </ListItemIcon>
                  <ListItemText sx={{fontWeight:'bold'}}  primary="Home"/>
              </ListItemButton>
       </ListItem>
       </Link>

    {user.email && !isAdmin &&
    
    <>

      <Link className="dashboard-item" to={`${url}/myorder`} >
      <ListItem className="list-item" disablePadding>
              <ListItemButton >
                  <ListItemIcon  >
                  <BookOnline />
                  </ListItemIcon>
                  <ListItemText sx={{fontWeight:'bold'}}  primary="My Order"/>
              </ListItemButton>
       </ListItem>
       </Link>
       <Link className="dashboard-item" to={`${url}/addreview`} > 
       <ListItem className="list-item" disablePadding>
              <ListItemButton >
                  <ListItemIcon  >
                  <RateReview />
                  </ListItemIcon>
                  <ListItemText sx={{fontWeight:'bold'}}  primary="Add Review"/>
              </ListItemButton>
       </ListItem>
       </Link>
       <Link className="dashboard-item" to={`${url}/myreview`} > 
       <ListItem className="list-item" disablePadding>
              <ListItemButton >
                  <ListItemIcon  >
                  <FeedbackIcon />
                  </ListItemIcon>
                  <ListItemText sx={{fontWeight:'bold'}}  primary="My Review"/>
              </ListItemButton>
       </ListItem>
       </Link>
       </>
}

{user.email && isAdmin &&



       <>
       <Link className="dashboard-item" to={`${url}/addcar`} >
       <ListItem className="list-item" disablePadding>
              <ListItemButton >
                  <ListItemIcon  >
                  <LocalTaxi />
                  </ListItemIcon>
                  <ListItemText sx={{fontWeight:'bold'}}  primary="Add Car"/>
              </ListItemButton>
       </ListItem>
       </Link>
       
       <Link className="dashboard-item" to={`${url}/manageorder`} >
      <ListItem className="list-item" disablePadding>
              <ListItemButton >
                  <ListItemIcon  >
                  <AddShoppingCartIcon />
                  </ListItemIcon>
                  <ListItemText sx={{fontWeight:'bold'}}  primary="Manage Order"/>
              </ListItemButton>
       </ListItem>
       </Link>

       <Link className="dashboard-item" to={`${url}/managecar`} >
      <ListItem className="list-item" disablePadding>
              <ListItemButton >
                  <ListItemIcon  >
                  <CarRental />
                  </ListItemIcon>
                  <ListItemText sx={{fontWeight:'bold'}}  primary="Manage Car"/>
              </ListItemButton>
       </ListItem>
       </Link>

       

       <Link className="dashboard-item" to={`${url}/managereview`} >
      <ListItem className="list-item" disablePadding>
              <ListItemButton >
                  <ListItemIcon  >
                  <Reviews />
                  </ListItemIcon>
                  <ListItemText sx={{fontWeight:'bold'}}  primary="Manage Review"/>
              </ListItemButton>
       </ListItem>
       </Link>
      
       <Link className="dashboard-item" to={`${url}/addadmin`} >
      <ListItem className="list-item" disablePadding>
              <ListItemButton >
                  <ListItemIcon  >
                  <AdminPanelSettings />
                  </ListItemIcon>
                  <ListItemText sx={{fontWeight:'bold'}}  primary="Add Admin"/>
              </ListItemButton>
       </ListItem>
       </Link>
       </>

  }

    <Link className="dashboard-item" to={`${url}/payment`} >
      <ListItem className="list-item" disablePadding>
              <ListItemButton >
                  <ListItemIcon  >
                  <PaymentIcon color="success" />
                  </ListItemIcon>
                  <ListItemText sx={{fontWeight:'bold'}}  primary="Payment"/>
              </ListItemButton>
       </ListItem>
       </Link>


      </List>
      <Divider />
      <List>
          
          <ListItem className="list-item" onClick={userLogOut} disablePadding>
              <ListItemButton className="list-btn"  sx={{backgroundColor:'crimson',color:'white',fontWeight:'bold'}}>
                  <ListItemIcon className="list-icon" sx={{color:'white'}}>
                      <Logout/>
                  </ListItemIcon>
                  <ListItemText sx={{fontWeight:'bold'}}  primary="Log Out"/>
              </ListItemButton>
          </ListItem>
        
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
    <Navbar></Navbar>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Car House
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        
        
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />


        <Switch>
        <Route exact path={path}>
          <DashboardHome></DashboardHome>
        </Route>

        <Route path={`${path}/myorder`}>
          <MyOrder></MyOrder>
        </Route>

        <Route path={`${path}/addreview`}>
           <AddReview></AddReview>
        </Route>
        <Route path={`${path}/myreview`}>
           <MyReview></MyReview>
        </Route>

        <AdminRoute path={`${path}/addcar`}>
            <AddCar></AddCar>
        </AdminRoute>

        <AdminRoute path={`${path}/manageorder`}>
            <ManageOrder></ManageOrder>
        </AdminRoute>

        <AdminRoute path={`${path}/managecar`}>
            <ManageCar></ManageCar>
        </AdminRoute>

        <AdminRoute path={`${path}/updatecar/:id`}>
            <UpdateCar></UpdateCar>
        </AdminRoute>

        <AdminRoute path={`${path}/managereview`}>
            <ManageReview></ManageReview>
        </AdminRoute>

        <AdminRoute path={`${path}/addadmin`}>
            <AddAdmin></AddAdmin>
        </AdminRoute>

        <Route path={`${path}/payment`}>
            <Payment></Payment>
        </Route>

       

      </Switch>

        
        
      </Box>
    </Box>
    </>
  );
}

Dashboard.propTypes = {
  
  window: PropTypes.func,
};

export default Dashboard;
