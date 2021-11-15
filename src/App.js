import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from './pages/about/About';
import Contract from './pages/contract/Contract';
import Home from './pages/home/Home';
import FAQ from './pages/faq/FAQ';
import Login from './pages/login/Login';
import Explore from './pages/explore/Explore.js';
import Dashboard from './pages/dashboard/Dashboard';
import Footer from './components/shared/footer/Footer';
import Register from './pages/login/register/Register';
import  AuthProvider  from '../src/contex/AuhProvider';
import PrivateRoute from './pages/login/privateRoute/PrivateRoute';
import OrderDetails from './pages/order/OrderDetails';
import OrderPlace from './pages/order/OrderPlace';


function App() {
  return (
    <div className="App">
    <AuthProvider>
    <BrowserRouter>
    
    <Switch>
    
      <Route exact path="/"><Home /> </Route>
      
      <Route path="/home"> <Home /> </Route>
      <PrivateRoute path='/explore'> <Explore/> </PrivateRoute>
      <Route path="/about"> <About/> </Route>
      <Route path="/contract"> <Contract/></Route>

      <Route path="/orderdetails/:id"> <OrderDetails/></Route>
      <PrivateRoute path="/orderplace/:id"> <OrderPlace/></PrivateRoute>
      

      <Route path="/login"> <Login /> </Route>
      <Route path="/register"> <Register /> </Route>

      <PrivateRoute path='/dashboard'> <Dashboard/> </PrivateRoute>
      
        
      <Route path="/faq"><FAQ /> </Route>
        
      </Switch>
      <Footer></Footer>
    </BrowserRouter>
    </AuthProvider>

    
  </div>
  );
}

export default App;
