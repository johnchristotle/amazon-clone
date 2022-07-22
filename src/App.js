import './App.css';
import React, { useEffect } from 'react';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import Signup from './Signup';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will run just once when the app component loads..

    auth.onAuthStateChanged((authUser) => {
      console.log('THE USER IS >>> ', authUser);

      if (authUser) {

        // the user just loged in / user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, []);


  return (
    <Router>  
    <div className="App">
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
     </div>
    </Router>
    
  );
}

export default App;
