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
            <button onClick={signUpHandler} type='button' className={action === "Log in" ? "submit innactive" : "submit"}>
                Sign Up
            </button>
            <button onClick={loginHandler} type='button' className={action === "Sign Up" ? "submit innactive" : "submit"}>
                Log in
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