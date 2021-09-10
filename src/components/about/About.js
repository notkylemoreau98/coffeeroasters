import React from 'react';
import './styles/about.css';

import missionImage from '../styles/assets/about/desktop/image-commitment.jpg';
import goalsImage from '../styles/assets/about/desktop/image-quality.jpg';
import australiaImage from '../styles/assets/about/desktop/illustration-australia.svg';
import canadaImage from '../styles/assets/about/desktop/illustration-canada.svg';
import ukImage from '../styles/assets/about/desktop/illustration-uk.svg';

function About() {
	return (
		<main className="about">
			<section className="about__landing">
				<div className="landing__content">
					<h1>About Us</h1>
					<p>
						 Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of 
							coffee from around the world. We have since been dedicated to bring the perfect cup - from 
							bean to brew - in every shipment.
					</p>
				</div>

				<div className="landing__spacer"> </div>
			</section>

			<section className="about__mission">
				<img src={missionImage} alt="Our Mission" />

				<div className="mission__textContent">
					<h2>Our commitment</h2>
					<p>We’re built on a simple mission and a commitment to doing good along the way. We want to make it easy for you to discover and brew the world’s best coffee at home. It all starts at the source. To locate the specific lots we want to purchase, we travel nearly 60 days a year trying to understand the challenges and opportunities in each of these places. We collaborate with exceptional coffee growers and empower a global community of farmers through with well above fair-trade benchmarks. We also offer training, support farm community initiatives, and invest in coffee plant science. Curating only the finest blends, we roast each lot to highlight tasting profiles distinctive to their native growing region.</p>
				</div>
			</section>

			<section className="about__goals">
				<div className="goals__textContent">
					<h2>Uncompromising quality</h2>
					<p> Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast consistent, user-friendly coffee, so that brewing is easy and enjoyable.</p>
				</div>

				<img src={goalsImage} alt="Goals" />
			</section>

			<section className="about__locationsContainer">
				<h2>Our headquarters</h2>

				<div className="about__locations">
								<div className="about__location">
					<img src={ukImage} alt="United Kingdom" />
					<h3>United Kingdom</h3>
					<div className="location__address">
						<p>68 Asfordby Rd</p>
						<p>Alcaston</p>
						<p>SY6 1YA</p>
						<p>+44 1241 918425</p>
					</div>
				</div>

				<div className="about__location">
					<img src={canadaImage} alt="Canada" />
					<h3>Canada</h3>
					<div className="location__address">
						<p>1528 Eglinton Avenue</p>
						<p>Toronto</p>
						<p>Ontario M4P 1A6</p>
						<p>+1 416 485 2997</p>
					</div>
				</div>

				<div className="about__location">
					<img src={australiaImage} alt="Australia" />
					<h3>Australia</h3>
					<div className="location__address">
						<p>36 Swanston Street</p>
						<p>Kewell</p>
						<p>Victoria</p>
						<p>+61 4 9928 3629</p>
					</div>
				</div>
				</div>
			</section>
		</main>
	)
}

export default About
