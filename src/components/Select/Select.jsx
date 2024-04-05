import React from 'react'
import './Select.scss'
const Select = ({onChange}) => {
  return (
    <select className='select' onChange={onChange}>
    <option value="rating">Sort by Name</option>
    <option value="wins">Sort by wins</option>
    <option value="name">Sort by rating</option>
  </select>
  )
}

export default Select