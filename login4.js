import React, { useState } from 'react';
import './login4.css';
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = () => {
    if (!email) {
      setEmailError('Email is required');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Invalid email format');
    } else {
      setEmailError('');
    }
  };

  const validatePassword = () => {
    if (!password) {
      setPasswordError('Password is required');
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
    } else {
      setPasswordError('');
    }
  };

  const handleLogin = () => {
    validateEmail();
    validatePassword();

    if (!emailError && !passwordError) {
      // Perform your login logic here
    }
  };

  return (
    <div className="container-fluid"><br></br><br></br><br></br><br></br><br></br><br></br>
      <div className="row justify-content-center ">
        <div className="col-md-4">
            <h3 class="text-center">Login</h3>
          <form>
            <div className="form-group ">
              <label class="text-center">Email</label>
              <input
                type="email"
                className={`form-control ${emailError ? 'is-invalid' : ''}`}
                value={email}
                onBlur={validateEmail}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && <div className="invalid-feedback">{emailError}</div>}
            </div>
            <div className="form-group">
              <label class="text-center">Password</label>
              <input
                type="password"
                className={`form-control ${passwordError ? 'is-invalid' : ''}`}
                value={password}
                onBlur={validatePassword}
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError && <div className="invalid-feedback">{passwordError}</div>}
            </div><br></br>
            <button id="btn"
              type="button"
              className="btn btn-primary  w-75 "
              onClick={handleLogin}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;