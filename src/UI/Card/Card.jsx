import React from 'react'

const Card = ({children, classname}) => {
  
  const combinedClassName = classname ? `${classname} card` : 'card';

  return (

    <li className={combinedClassName}>
      {children}
    </li>
  )
}

export default Card
