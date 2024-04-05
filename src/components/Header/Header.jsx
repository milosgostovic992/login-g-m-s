import {React, useState} from 'react'
import { useContext } from 'react'
import { LoginContext } from '../../context/LoginContext'
import './Home.scss'

const Header = ({heading, buttonName, backButton}) => {

    const context = useContext(LoginContext);
    const {signOutHandler, goBack} = context;

      const [isActive, setIsActive] = useState(false);

  const handleScroll = ()=> {
    if(window.scrollY >= 10) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  };

  window.addEventListener('scroll', handleScroll);


  return (
    <header className={`header ${isActive ? 'active' : ''}`}>
    <h1 className='header__heading'>{heading}</h1>
   <div className="header__button-holder">
   {backButton &&  <button className='btn'  onClick={goBack} type='button'><p className="text">{backButton}</p></button>}
   <button className='btn btn--signout' onClick={signOutHandler} type='button'><p className="text">{buttonName}</p></button>
   </div>
</header>
  )
}

export default Header