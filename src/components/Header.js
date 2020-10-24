import React from 'react';
import logo from '../images/header/logo.png';

function Header() {
  return (
    <header>
    	<nav className='flexBox flexBox2'>
    		<NavLink to='/'><img src={logo} alt='' /></NavLink>
    		<NavLink to='/Memoir'>Memoir</NavLink>
			<NavLink to='/About'>About</NavLink>
			<form>
				<input type='search' name='search' id='searchField'/>
			</form>
			<NavLink to='#'><button>Login</button></NavLink>
    	</nav>
    </header>
  );
}

export default Header;