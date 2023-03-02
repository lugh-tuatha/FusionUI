import React, { useState } from 'react'
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './header.css'

import * as BsIcon from "react-icons/bs";
import * as FaIcon from "react-icons/fa";


function Header() {
  const [navbar, setNavbar] = useState(false)

  const showNavbar = () => setNavbar(!navbar)

  return (
    <div>
      <nav className='d-flex align-items-center justify-content-between navbar-wide'>
        <h1 className='d-none d-md-block'>LOGO</h1>

        <div className='d-md-flex d-none'>
          <ul className='d-md-flex my-auto gap-5 me-4'>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/docs">DOCS</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/blogs">BLOGS</Link></li>
            <li><Link to="/showcase">SHOWCASE</Link></li>
          </ul>

          <div className='d-md-flex align-items-center gap-4'>
            <div className="line"></div>
            <BsIcon.BsFillMoonFill size={24}/>
            <BsIcon.BsGithub size={26}/>
          </div>
        </div>
      </nav>

      <nav className='d-md-none'>
        <div className="d-flex justify-content-between align-items-center navbar-mobile">
          <h1 className='my-auto'>LOGO</h1>
          
          <FaIcon.FaBars size={32} className='show ?' onClick={showNavbar}/>
        </div>

        <div className={navbar ? 'nav-menu active' : 'nav-menu'}>
          <div className="d-flex align-items-center justify-content-between head">
            <h1 className='my-auto'>LOGO</h1>
            <BsIcon.BsXLg size={30} className='show ?' onClick={showNavbar}/>
          </div>
          <ul className='text-center' onClick={showNavbar}>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/docs">DOCS</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/blogs">BLOGS</Link></li>
            <li><Link to="/showcase">SHOWCASE</Link></li>
          </ul>
        </div>

        <div className="starter"></div>
      </nav>
    </div>

  )
}

export default Header