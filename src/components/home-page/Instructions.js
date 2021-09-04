import React from 'react';
import { Link } from 'react-router-dom';
import './styles/instructions.css';


function Instructions() {
	return (
		<div className="instructions">
			<h3 className="instructions__title">How it works</h3>

			<section className="instructions__bar">
				<span className="circle"></span>
				<span className="line"></span>
				<span className="circle"></span>
				<span className="line"></span>
				<span className="circle"></span>
			</section>

			<section className="instructions__content">
				<div className="instructions__step">
					<h1>01</h1>
					<h2>Pick your coffee</h2>
					<p>
						Select from our evolving range of artisan coffees. Our beans are ethically 
  				sourced and we pay fair prices for them. There are new coffees in all profiles 
  				every month for you to try out.
				</p>
				</div>
			
				<div className="instructions__step">
					<h1>02</h1>
					<h2>Choose the frequency</h2>
					<p>
						Customize your order frequency, quantity, even your roast style and grind type. 
  				Pause, skip or cancel your subscription with no commitment through our online portal.
					</p>
				</div>

				<div className="instructions__step">
					<h1>03</h1>
					<h2>Receive and enjoy!</h2>
					<p>
						We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning 
  				world-class coffees curated to provide a distinct tasting experience.
					s</p>
				</div>

			</section>

				<Link to="/plan">
					<button className="instructions__button">Create your plan</button>
				</Link>
		</div>
	)
}

export default Instructions;
