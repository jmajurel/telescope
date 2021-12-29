import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = props => ((
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className='navbar-brand' to='/'>
      <img width='40px' height='40px' src='telescopeIcon.png' alt='telescope'/>
    </Link>

    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
      <ul className='navbar-nav'>
	<li className='nav-item active'>
	  <Link className='nav-link' to='/asteroids'>Asteroids</Link>
	</li>
	<li className='nav-item'>
	  <a className='nav-link' disabled>Space Weather</a>
	</li>
      </ul>
      <ul className='navbar-nav'>
	<li className='nav-item'>
	  <a className='nav-link' disabled>Log In</a>
	</li>
	<li className='nav-item'>
	  <a className='nav-link' disabled>Sign Up</a>
	</li>
      </ul>

    </div>
  </nav>
));

export default NavBar;
