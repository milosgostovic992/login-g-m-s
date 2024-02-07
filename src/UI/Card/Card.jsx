import React from 'react'
import './Card.scss'

const Card = ({children, classname}) => {
  
  const combinedClassName = classname ? `${classname} card` : 'card';

  return (

    <li className={combinedClassName}>
      {children}
    </li>
  )
}

export default Card
