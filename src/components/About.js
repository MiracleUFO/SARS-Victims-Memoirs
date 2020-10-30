import React from 'react';
import line from '../images/about/line.png'

function About() {
  return (
    <main className='flexBox' id='about'>
    	<div className='blueDiv flexBox3 flexBox4'>
    		<h1>About</h1>
    	</div>

    	<div className='blackDiv' id='aboutContentContainer'>
    		<div id='h1Div'>
    			<h1>Memoirs </h1><img src={line} alt=''/>
    		</div>

    		<div className='flexColumn' id='aboutContent'>
    			<p>
    			A web app to serve as a memoir for victims of Police brutality and SARs extrajudicial 
    			killings during the course of living their lives as human beings.
    			</p>

    			<p>
    			These individuals happen to not have existed on their own. 
    			They are people’s loved one, family but due to the menace that is happening in our society their 
    			memories are often reduced to labels by the media and press such as; "an 18-year-old teen was shot", 
    			"gunshot claims the life of a young man/lady" etc.
				</p>

				<p>
				This ends up with no one knowing who they were or the impact they had with exception of the 
				people in their circles/communities
				</p>
			</div>
    	</div>
    </main>
  );
}

export default About;