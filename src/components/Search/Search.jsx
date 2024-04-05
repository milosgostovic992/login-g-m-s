import React from 'react'
import  './Search.scss'

const Search = ({onSearch}) => {
  return (
        <input className='search' onChange={onSearch} type="seach" placeholder="Search..."/>
  )
}

export default Search