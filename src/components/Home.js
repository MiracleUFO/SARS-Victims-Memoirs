import React from 'react';
import heroPic from '../images/home/heroPic.png';
import moreIcon from '../images/home/moreIcon.png';
import victim01 from '../images/home/victimForGrid.png';


function Home() {
  return (
    <main id='home'>
    	<section id='heroSect'>
    		<img src={heroPic} alt='' id='heroPic'/>
    		<img src={moreIcon} alt='' id='moreIcon'/>
    		<div id='heroBubble' className='flexBox3 flexBox4'><h1>" Delayed <br/> justice <br/> is injustice"</h1></div>
    	</section>

    	<section>
    		<h1 className='homeHeaders'>All these were lost through police brutality.</h1>

    		<article className='victimHomeGrid'>
    			<div className='flexColumn'>
    				<img src={victim01} alt='Chimela Obi'/> 
    				<div><h1>Chimela Obi</h1><p>12/07/1994  - 13/01/2019</p> 
    				<p>Was exthorted and shot by a police on her way to lectures, she’s the only child of her...</p></div>
    				<p className='flexBox5'>Read more</p>
    			</div>

				<div className='flexColumn'>
    				<img src={victim01} alt='Chimela Obi'/> 
    				<div><h1>Chimela Obi</h1><p>12/07/1994  - 13/01/2019</p> 
    				<p>Was exthorted and shot by a police on her way to lectures, she’s the only child of her...</p></div>
    				<p className='flexBox5'>Read more</p>
    			</div>    			

    			<div className='flexColumn'>
    				<img src={victim01} alt='Chimela Obi'/> 
    				<div><h1>Chimela Obi</h1><p>12/07/1994  - 13/01/2019</p> 
    				<p>Was exthorted and shot by a police on her way to lectures, she’s the only child of her...</p></div>
    				<p className='flexBox5'>Read more</p>
    			</div>

    			<div className='flexColumn'>
    				<img src={victim01} alt='Chimela Obi'/> 
    				<div><h1>Chimela Obi</h1><p>12/07/1994  - 13/01/2019</p> 
    				<p>Was exthorted and shot by a police on her way to lectures, she’s the only child of her...</p></div>
    				<p className='flexBox5'>Read more</p>
    			</div>

    			<div className='flexColumn'>
    				<img src={victim01} alt='Chimela Obi'/> 
    				<div><h1>Chimela Obi</h1><p>12/07/1994  - 13/01/2019</p> 
    				<p>Was exthorted and shot by a police on her way to lectures, she’s the only child of her...</p></div>
    				<p className='flexBox5'>Read more</p>
    			</div>

    			<div className='flexColumn'>
    				<img src={victim01} alt='Chimela Obi'/> 
    				<div><h1>Chimela Obi</h1><p>12/07/1994  - 13/01/2019</p> 
    				<p>Was exthorted and shot by a police on her way to lectures, she’s the only child of her...</p></div>
    				<p className='flexBox5'>Read more</p>
    			</div>
    		</article>
    	</section>


    	<section>
    		<h1 className='homeHeaders'>Why shoot them? Why inhuman to them?</h1>

    		<article className='victimHomeGrid'>
    			<div className='flexColumn'>
    				<img src={victim01} alt='Chimela Obi'/> 
    				<div><h1>Chimela Obi</h1><p>12/07/1994  - 13/01/2019</p> 
    				<p>Was exthorted and shot by a police on her way to lectures, she’s the only child of her...</p></div>
    				<p className='flexBox5'>Read more</p>
    			</div>

				<div className='flexColumn'>
    				<img src={victim01} alt='Chimela Obi'/> 
    				<div><h1>Chimela Obi</h1><p>12/07/1994  - 13/01/2019</p> 
    				<p>Was exthorted and shot by a police on her way to lectures, she’s the only child of her...</p></div>
    				<p className='flexBox5'>Read more</p>
    			</div>    			

    			<div className='flexColumn'>
    				<img src={victim01} alt='Chimela Obi'/> 
    				<div><h1>Chimela Obi</h1><p>12/07/1994  - 13/01/2019</p> 
    				<p>Was exthorted and shot by a police on her way to lectures, she’s the only child of her...</p></div>
    				<p className='flexBox5'>Read more</p>
    			</div>

    			<div className='flexColumn'>
    				<img src={victim01} alt='Chimela Obi'/> 
    				<div><h1>Chimela Obi</h1><p>12/07/1994  - 13/01/2019</p> 
    				<p>Was exthorted and shot by a police on her way to lectures, she’s the only child of her...</p></div>
    				<p className='flexBox5'>Read more</p>
    			</div>

    			<div className='flexColumn'>
    				<img src={victim01} alt='Chimela Obi'/> 
    				<div><h1>Chimela Obi</h1><p>12/07/1994  - 13/01/2019</p> 
    				<p>Was exthorted and shot by a police on her way to lectures, she’s the only child of her...</p></div>
    				<p className='flexBox5'>Read more</p>
    			</div>
    			
    			<div className='flexColumn'>
    				<img src={victim01} alt='Chimela Obi'/> 
    				<div><h1>Chimela Obi</h1><p>12/07/1994  - 13/01/2019</p> 
    				<p>Was exthorted and shot by a police on her way to lectures, she’s the only child of her...</p></div>
    				<p className='flexBox5'>Read more</p>
    			</div>
    		</article>
    	</section>

        <section className='greyDiv flexBox3 flexBox2' id='statsHome'>
    		  <div className='flexColumn'>
    			<h1 className='text60'>1,223</h1>
    			<p className='greyText'>Cases recorded this year.</p>
    		  </div>

    		  <div className='flexColumn'>
    			<h1 className='text60'>906</h1>
    			<p className='greyText'>Cases recorded last year</p>
    		  </div>

    		  <div className='flexColumn'>
                <h1 className='text60'>1,200</h1>
    			<p className='greyText'>Youths reportedly recorded</p>
    		  </div>

    		  <div className='flexColumn'>
    			<h1 className='text60'>2,129</h1>
    			<p className='greyText'>Total cases</p>
    		  </div>
        </section>
    </main>
  );
}

export default Home;