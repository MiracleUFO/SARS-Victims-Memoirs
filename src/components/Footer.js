import React from 'react';
import whiteLogo from '../images/footer/logofooter.png';

function Footer() {
  return (
    <footer className='flexBox2 flexBox3'>
    	<div>
    		<img src={whiteLogo} alt='Memoirs logo'/>
    		<p>Memoirs</p>
    	</div>

    	<p>Copyright <b>Memoirs 2020.</b> All rights reserved</p>

    	<p>memoirs@gmail</p>

    </footer>
  );
}

export default Footer;