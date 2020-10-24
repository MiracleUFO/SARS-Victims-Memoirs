import React from 'react';
import logo from '../images/header/logo.png';
import searchIcon from '../images/header/searchIcon.png';
import {NavLink} from 'react-router-dom';

function Header(e) {

  let form = React.createRef();
  let input = React.createRef();
  let icon = React.createRef();
  

  function revealBar(e) {
    e.preventDefault();
    input.current.setAttribute('class', 'revealField searchField');
    form.current.setAttribute('class', 'revealForm flexBox4');
    icon.current.parentElement.style.display = 'none';
}

  function closeBar(e) {
    e.preventDefault();
    form.current.setAttribute('class', 'flexBox4');
    input.current.setAttribute('class', 'searchField');
}

  return (
    <header className='flexBox2 flexBox3'>
      <NavLink to='/'><img src={logo} alt='' id='logo'/></NavLink>
    	<nav className='flexBox2 flexBox3'>
    	 <NavLink to='/Memoir'>Memoir</NavLink>
			 <NavLink to='/About'>About</NavLink>

			 <form  ref={form} >
				  <input type='search' name='search' className='searchField' ref={input} placeholder='Search here...' onBlur={closeBar}/>
          <button id='searchButton' onClick={revealBar}><img src={searchIcon} alt='' id='icon'  ref={icon}/></button>
			 </form> 
    	</nav>

      <NavLink to='#'><button>Login</button></NavLink>
    </header>
  );
}

export default Header;