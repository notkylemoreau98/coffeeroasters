import React from 'react';
import './styles/benefits.css';

import Bean from '../styles/assets/home/desktop/icon-coffee-bean.svg';
import Gift from '../styles/assets/home/desktop/icon-gift.svg';
import Truck from '../styles/assets/home/desktop/icon-truck.svg';

function Benefits() {
	return (
		<div className="benefits">
			<section className="benefits__about">
				<h2 className="benefits__title">Why choose us?</h2>
				<p>
					A large part of our role is choosing which particular coffees will be featured 
  			in our range. This means working closely with the best coffee growers to give 
  			you a more impactful experience on every level.
				</p>
			</section>

			<section className="benefits__cards">
				<div className="benefits__card">
					<img src={Bean} alt="Coffee Bean" />
					<h3>Best quality</h3>
					<p>Discover an endless variety of the world’s best artisan coffee from each of our roasters.</p>
				</div>
				
				<div className="benefits__card">
					<img src={Gift} alt="Special Offers" />
					<h3>Exclusive benefits</h3>
					<p>Special offers and swag when you subscribe, including 30% off your first shipment.</p>
				</div>
				
				<div className="benefits__card">
					<img src={Truck} alt="Shipping" className="logo" />
					<h3>Free shipping</h3>
					<p>We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.</p>
				</div>
				
			</section>
		</div>
	)
}

export default Benefits
