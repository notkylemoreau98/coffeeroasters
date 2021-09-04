import React from 'react';
import { Link } from 'react-router-dom';
import './styles/landingBanner.css'

function LandingBanner() {
	return (
		<div className="banner">
			<section className="banner__content">
				<h1>Great coffee made simple.</h1>
				<p> 
					Start your mornings with the world’s best coffees. Try our expertly curated artisan 
					coffees from our best roasters delivered directly to your door, at your schedule.
				</p>

				<Link to="/plan">
					<button>Create your plan</button>
				</Link>
			</section>

			<section className="banner__spacer"></section>

		</div>
	)
}

export default LandingBanner