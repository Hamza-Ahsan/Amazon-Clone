import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Components/Header';
import Home from './Components/Home';
import Checkout from './Components/Checkout';
import Login from './Components/Login';
import { auth } from './Components/firebase';
import { useStateValue } from './Components/StateProvider';

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: 'ADD_USER',
          user: authUser,
        })

      } else {
        dispatch({
          type: 'ADD_USER',
          user: null,
        })
      }
    })
  }, [])

  console.log('===>>', user);

  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route path='/login'>
            <Login />
            <h1>Login</h1>
          </Route>

          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>

          {/* This is a default path */}
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
