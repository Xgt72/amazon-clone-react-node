import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Login from './components/Login';
import Payment from './components/Payment';

import './App.css';

function App() {
  return (
    <main className="app">
      <Switch>
        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/payment">
          <Header />
          <Payment />
        </Route>
        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
    </main>
  );
}

export default App;
