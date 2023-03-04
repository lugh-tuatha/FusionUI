import React from 'react'
import './searchbar.css'

import * as BsIcon from "react-icons/bs";

function Searchbar() {
  return (
    <div>
      <input type="search" placeholder='Quick Search' />
      <BsIcon.BsSearch className='searchIcon' size={24} />
    </div>
  )
}

export default Searchbar