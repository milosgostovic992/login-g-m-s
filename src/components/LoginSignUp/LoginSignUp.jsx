import React from 'react'
import {  useContext } from 'react';
import './LoginSignUp.scss';
import { LoginContext } from '../../context/LoginContext';
import Form from '../Form/Form';


const LoginSignUp = () => {

    const context = useContext(LoginContext);
    const {signUpHandler, action, loginHandler} = context;


  return (
    <div className="container">
         <div className="submit-container">
            <button onClick={signUpHandler} type='button' className={action === "Log in" ? "btn innactive" : "btn"}>
                 <p class="text">Sign Up</p>
            </button>
            <button onClick={loginHandler} type='button' className={action === "Sign Up" ? "btn innactive" : "btn"}>
                <p class="text">Login</p>
            </button>
        </div>
        <div className="login__header">
            <div className="text">
               {action}
            </div>
            <div className="underline"></div>
        </div>
        <Form/>
        {action === "Sign Up" ? '' :  <div className="forgot-password">Lost Password? <span>Click Here!</span></div>}
    </div>
  )
}

export default LoginSignUp