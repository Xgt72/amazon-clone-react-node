import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';

import './App.css';

function App() {
  return (
    <main className="app">
      {/* <h1>Hello Amazon Clone App 🚀</h1> */}
      <Switch>
        <Route exact path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
    </main>
  );
}

export default App;
