import './App.css';
import React from 'react';
import Header from './Header';
import Home from './Home';
import { BrowserRouter, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import Signup from './Signup';
//import { auth } from './firebase';

function App() {

  return (
    
    
    <div className="App">
      <BrowserRouter>
      <Router>
        <Switch>

          <Route path='/login'>
          <Login />
          </Route>

          <Route path='/signup'>
          <Signup />
          </Route>

          <Route path='/checkout'>
          <Header />
          <Checkout />
          </Route>

          <Route exact path='/'>
          <Header />
          <Home />
          </Route>

        </Switch>
      </Router>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
