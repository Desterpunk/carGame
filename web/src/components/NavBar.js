import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css'

export const Navbar = () => {

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo'>
            HorseGame
            <i class='fab fa-typo3' />
          </Link>
          <ul className={'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links'>
                Home
              </Link>
            </li>
            <li>
            <Link
                to='/aboutus'
                className='nav-links'
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}