import React from 'react';
import Header from "./components/Header";
import Home from "./components/Home";

import './App.css';

function App() {
  return (
    <main className="app">
      {/* <h1>Hello Amazon Clone App 🚀</h1> */}
      <Header />
      <Home />
    </main>
  );
}

export default App;
