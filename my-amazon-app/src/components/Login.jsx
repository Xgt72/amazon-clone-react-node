import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
    e.preventDefault();
    console.log(email, password);

    // login with backend.
  }

  const register = (e) => {
    e.preventDefault();

    // register with backend.
  }

  return (
    <div className="login flex_col_align_center">
      <Link to="/">
        <img
          className="login__logo"
          src="https://i1.wp.com/www.joptimisemonsite.fr/wp-content/uploads/2015/02/logo-amazon.jpg?fit=300%2C109&ssl=1&is-pending-load=1"
          alt="Amazon logo"
        />
      </Link>
      <div className="login__container flex_col_justify_between">
        <h1>Sign-in</h1>
        <form className="flex_col_justify_between">
          <label htmlFor="email">E-mail</label>
          <input type="mail" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor="email">Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit" className="login__signInButton" onClick={signIn}>
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to AMAZON FAKE CLONE Conditions of Use & Sale. Please Notice, our Cookies Notice and our Interest-Based Ads Notice.
        </p>
        <button type="button" className="login__registerButton" onClick={register}>
          {' '}
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
