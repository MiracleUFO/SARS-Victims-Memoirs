import React from 'react';
import whiteLogo from '../images/footer/logofooter.png';

function Footer() {
  return (
    <footer className='blueDiv'>
        <section className='flexBox2 flexBox3' id='footerContentMobile'>
    	   <div>
    		  <img src={whiteLogo} alt='Memoirs logo'/>
    		  <p>Memoirs</p>
            </div>

            <div className='flexColumn'>
    	       <p>Copyright <b>Memoirs 2020.</b> All rights reserved</p>

    	       <p>memoirs@gmail</p>
            </div>
        </section>

        <section className='flexBox2 flexBox3 blueDiv' id='footerContent'>
           <div>
              <img src={whiteLogo} alt='Memoirs logo'/>
              <p>Memoirs</p>
            </div>

           <p>Copyright <b>Memoirs 2020.</b> All rights reserved</p>

           <p>memoirs@gmail</p>
        </section>

    </footer>
  );
}

export default Footer;