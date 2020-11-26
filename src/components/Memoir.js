import React from 'react';
import fem from '../images/memoirs/fem.png';
import heroPic from '../images/home/heroPic.png';

function Memoir() {
  return (
    <main id='memoir'>

    <section className='flexBox6 flexBox3' id='victimIntro'>
    	<div className='blueDiv floatLeft victimPicDiv'><img src={fem} alt='Chiemela Obi'/></div>

    	<div className='flexColumn flexBox3'>
    		<div className='flexColumn'>
    			<h1 className='text80 victimNameHeader'><b>Chiemela </b>  Obi</h1>
    			<p className='date'>12/07/1994  - 13/01/2019</p>
    		</div>

    		<div className='flexBox6'>
    			<div id='heroBubble' className='flexBox3 flexBox4'><h1>" Delayed <br/> justice <br/> is injustice"</h1></div>
    			<div className='blueDiv flexBox3' id='heroBubble2'><p>22yrs.</p></div>
    		</div>
    	</div>
    </section>

    <section id='bio'>
    	<h1>How It Happened</h1>

    	<div>
    		<p>
    		A web app to serve as a memoir for victims of Police brutality and SARs extrajudicial killings 
    		during the course of living their lives as human beings.
    		</p>

    		<p>
			These individuals happen to not have existed on their own. They are people’s loved one, family but due to the menace that is happening in our society their memories are often reduced to labels by the media and press such as;
			<br/><br/>

			"an 18-year-old teen was shot", "gunshot claims the life of a young man/lady" etc.
			</p>

			<p>
			This ends up with no one knowing who they were or the impact they had with exception of the people in their circles/communities
    		</p>
    	</div>
    </section>
    	
    <section>

    	<div className='flexBox mediaHeader'><div className='blackDiv'></div><div className='blueDiv'></div> <h1>Photos / Media</h1></div>
    	<div className='gallery'>

    	<img src={heroPic} alt=''/>
    	<img src={heroPic} alt=''/>
    	<img src={heroPic} alt=''/>
    	<img src={heroPic} alt=''/>
 
    	</div>
    </section>

    <section className='comments'>
    	<h1><b>Comments</b></h1>
    </section>

    <section className='greyDiv'>
        <div className='flexBox3 flexBox2' id='statsHome'>
              <div className='flexColumn'>
                <h1>1,223</h1>
                <p className='greyText'>Cases recorded this year.</p>
              </div>

              <div className='flexColumn'>
                <h1>906</h1>
                <p className='greyText'>Cases recorded last year</p>
              </div>

              <div className='flexColumn'>
                <h1>1,200</h1>
                <p className='greyText'>Youths reportedly recorded</p>
              </div>

              <div className='flexColumn'>
                <h1>2,129</h1>
                <p className='greyText'>Total cases</p>
              </div>
        </div>
        </section>
    
    </main>
  );
}

export default Memoir;
