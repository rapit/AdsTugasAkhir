import React, { useState } from "react";
import './Login.css';
import { Register } from "../Register/Register";
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';

export const Login = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [showRegister, setShowRegister] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }

  const handleRegister = () => {
    setShowRegister(true);
  };
  
  const handleFormSwitch = (form) => {
    setShowRegister(form === 'register');
  };
  
  if (showRegister) {
    return <Register onFormSwitch={handleFormSwitch} />;
  }

  return (
    <div className="login-header-container">
      <div className="auth-form-container">
        <Navbar />  
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email :</label>
          <input className="kotak" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Masukan Email" id="email" name="email" />
          <label htmlFor="password">Password :</label>
          <input className="kotak" value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Masukan Password" id="password" name="password" />
          <button type="submit">Log In</button>
          </form>
      <Link to="/register" className='link-btn'>Don't have an account? Register here.</Link>
    </div>
  </div>
);
}

export default Login;