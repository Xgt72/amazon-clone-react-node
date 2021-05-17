import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import Payment from "./components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import "./App.css";

const promise = loadStripe("pk_test_51IrmDbJ3PcttZ6W83mEd6LwNex0qPkuQnPQRg6gM131hGFTOIYpkB6dQsQORiXqqPhEIKAE9363iQr6U8qn6sYBO00Ev5i1swP");

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
          <Elements stripe={promise}>
            <Payment />
          </Elements>
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
