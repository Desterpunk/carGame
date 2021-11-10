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
            <i className='fab fa-typo3' />
          </Link>
          <ul className={'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links'>
                Home
              </Link>
            </li>
            <li>
            <Link
                to='/game'
                className='nav-links'
              >
                Game Config
              </Link>
            </li>
            <li>
            <Link
                to='/games'
                className='nav-links'
              >
                Games
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}