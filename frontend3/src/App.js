import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Estate from './pages/Estate';
import About from './pages/About';
import Home from './pages/Home';
import Error from './pages/Error';
import Register from './components/Register';
import Signin from './components/Signin';
import './App.css';
import Navbar from './components/Navbar';
import Feature from './pages/Feature';
import Footer from './components/Footer';

function App() {
  return (
<div>
  <Navbar/>
  <Switch>
      <Route path="/" exact component={Home}/>
      <Route path='/estate' exact component={Estate}/>
      <Route path="/about" exact component={About}/>
      <Route path="/feature" exact component={Feature}/>
      <Route path="/register" exact component={Register}/>
      <Route path="/signin" exact component={Signin}/>
      <Route   component={Error}/>
    </Switch>
{/* <Footer/> */}
</div>
    
  )
}

export default App;
