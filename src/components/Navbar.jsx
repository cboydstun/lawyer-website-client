//Importing the libraries for React
import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

//Creating the functions for the Navbar
const Navbar = () => {
 const [click, setClick]   = useState(false);
 const handleClick = () => setClick(!click);
 const closeMobileMenu = () => setClick(false);
  return (
   <>
   <nav className="navbar">
 <div className="navbar-container">
<Link to="/" className="navbar-logo">
Jacqueline R. Kriebel
</Link>
<div className="menu-icon" onClick={handleClick}>
   <i className={click ? 'fas fa-times': 'fas fa-bars'} />
</div>
<ul className={click ?'nav-menu active': 'nav-menu'}>
   <li className='nav-item'>
    <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
    Home
    </Link>
   </li>
   <li className='nav-item'>
    <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
    About
    </Link>
   </li>
   <li className='nav-item'>
    <Link to='/attorneyprofile' className='nav-links' onClick={closeMobileMenu}>
    Attorney Profile
    </Link>
   </li>
   <li className='nav-item'>
    <Link to='/practieareas' className='nav-links' onClick={closeMobileMenu}>
    Practice Areas
    </Link>
   </li>
   <li className='nav-item'>
    <Link to='/clienttestimonials' className='nav-links' onClick={closeMobileMenu}>
  Client Testimonials
    </Link>
   </li>
</ul>
<li className='nav-item'>
    <Link to='/more' className='nav-links' onClick={closeMobileMenu}>
   More
    </Link>
   </li>
 </div>
   </nav>
   </>
  )
}

//Exporting the default Navbar
export default Navbar