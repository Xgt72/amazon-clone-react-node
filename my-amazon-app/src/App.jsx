import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';

import './App.css';

function App() {
  return (
    <main className="app">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
      </Switch>
    </main>
  );
}

export default App;
