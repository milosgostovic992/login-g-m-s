import React from 'react'
import { useContext } from 'react'
import { LoginContext } from '../../context/LoginContext'
import './Home.scss'

const Header = ({heading, buttonName, backButton}) => {

    const context = useContext(LoginContext);
    const {signOutHandler, goBack} = context;

  return (
    <header className='header'>
    <h1 className='header__heading'>{heading}</h1>
   <div className="header__button-holder">
   {backButton &&  <button  onClick={goBack} type='button'>{backButton}</button>}
   <button onClick={signOutHandler} type='button'>{buttonName}</button>
   </div>
</header>
  )
}

export default Header