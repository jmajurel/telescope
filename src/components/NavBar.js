import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = props => ((
  <nav className='navbar nav-bar-expand-lg nav-bar-light bg-light'> 
    <Link className='navbar-brand' to='/'><img width='40px' height='40px' src='telescopeIcon.png' alt='telescope'/></Link>
    <ul className='navbar-nav mr-auto'>
      <li className='nav-item'>
	<Link className='nav-link' to='/asteroids'>Asteroids</Link>
      </li>
      <li className='nav-item'>
	<a className='nav-link' disabled>Space Weather</a>
      </li>
    </ul>
    <ul className='navbar-nav navbar-right'>
      <li className='nav-item'>
	<a className='nav-link' disabled>Log In</a>
      </li>
      <li className='nav-item'>
	<a className='nav-link' disabled>Sign Up</a>
      </li>
    </ul>
  </nav>
));

export default NavBar;
