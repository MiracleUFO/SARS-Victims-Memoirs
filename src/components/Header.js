import React from 'react';
import logo from '../images/header/logo.png';
import searchIcon from '../images/header/searchIcon.png';
import {NavLink} from 'react-router-dom';

function Header(e) {

  let form = React.createRef();
  let input = React.createRef();
  let icon = React.createRef();
  let navTextDiv = React.createRef();
  let searchButton = React.createRef();
  

  function revealBar(e) {
    e.preventDefault();
    input.current.setAttribute('class', 'revealField searchField');
    input.current.focus();
    form.current.setAttribute('class', 'revealForm flexBox5');
    searchButton.current.setAttribute('class', 'searchButtonOnReveal');
    navTextDiv.current.style.display = 'none';
}

  function closeBar(e) {
    e.preventDefault();
    form.current.setAttribute('class', 'flexBox4');
    input.current.setAttribute('class', 'searchField');
    navTextDiv.current.style.display = 'flex';
    searchButton.current.setAttribute('class', '');
}

  return (
    <header className='flexBox2 flexBox3'>
      <div id='logo'><NavLink to='/'><img src={logo} alt=''/></NavLink></div>
    	<nav className='flexBox2 flexBox3'>

      <div className='flexBox3' id='navTextDiv' ref={navTextDiv}>
    	 <NavLink to='/Memoir'>Memoir</NavLink>
			 <NavLink to='/About'>About</NavLink>
       </div>

			 <form  ref={form} >
				  <input type='search' name='search' className='searchField' ref={input} placeholder='Search here...' onBlur={closeBar}/>
          <button id='searchButton' onClick={revealBar} ref={searchButton}><img src={searchIcon} alt='' id='icon'  ref={icon}/></button>
			 </form> 
    	</nav>

      <NavLink to='#'><button id='loginBtn'>Login</button> </NavLink>
    </header>
  );
}

export default Header;