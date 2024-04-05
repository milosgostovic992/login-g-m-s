import React from 'react'
import { useContext } from 'react'
import { LoginContext } from '../../context/LoginContext'
import emailIcon from '../../assets/email.png';
import pswIcon from '../../assets/password.png';

const Form = () => {

    const context = useContext(LoginContext);

    const {submitHandler, emailRef, pswRef, action} = context;

  return (
    <form onSubmit={submitHandler} className="inputs">

        <div className="input">
            <img src={emailIcon} alt="" />
            <input ref={emailRef} type="email" placeholder='Email'/>
        </div>
        <div className="input">
            <img src={pswIcon} alt="" />
            <input ref={pswRef} type="password" placeholder='Password'/>
        </div>
        <button className='btn'><p className="text">{action === 'Log in' ? 'Log in' : "Sign up"}</p></button>
    </form>
  )
}

export default Form