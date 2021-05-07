import React from 'react';
import { Link } from 'react-router-dom';

import './Login.css';

function Login() {
  return (
    <div className="login flex_col_align_center">
      <Link to="/">
        <img
          className="login__logo"
          src="https://i1.wp.com/www.joptimisemonsite.fr/wp-content/uploads/2015/02/logo-amazon.jpg?fit=300%2C109&ssl=1&is-pending-load=1"
          alt="Amazon logo"
        />
      </Link>
    </div>
  );
}

export default Login;
