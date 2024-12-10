import React from 'react'
import { Link } from 'react-router-dom';
import './header.css'
 const Header = () => {
  return (
    <>
    <nav>
    <h3 className='logo'>Ashok jangid</h3>
    <ul>
        <li><Link to='/'>home</Link></li>
        <li><Link to='/about'>about</Link></li>
        <li><Link to='/skill'>skill</Link></li>
        <li><Link to='/contact'>contact</Link></li>
    </ul>
    </nav>
   
    </>
  )
}
export default Header;