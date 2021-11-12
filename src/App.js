import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from './pages/about/About';
import Contract from './pages/contract/Contract';
import Home from './pages/home/Home';
import FAQ from './pages/faq/FAQ';
import Login from './pages/login/Login';
import Explore from './pages/explore/Explore.js';
import Navbar from './components/shared/Navbar';
import Dashboard from './pages/dashboard/Dashboard';
import Footer from './components/shared/footer/Footer';
import Register from './pages/login/register/Register';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar></Navbar>
    <Switch>
    
      <Route exact path="/"><Home /> </Route>
      
      <Route path="/home"> <Home /> </Route>
      <Route path='/explore'> <Explore/> </Route>
      <Route path="/about"> <About/> </Route>
      <Route path="/contract"> <Contract/></Route>
      <Route path="/login"> <Login /> </Route>
      <Route path="/register"> <Register /> </Route>

      <Route path='/dashboard'> <Dashboard/> </Route>
      
        
      <Route path="/faq"><FAQ /> </Route>
        
      </Switch>
      <Footer></Footer>
    </BrowserRouter>

    
  </div>
  );
}

export default App;
