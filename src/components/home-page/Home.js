import React from 'react';
// import styles

import LandingBanner from './LandingBanner';
import Collection from './Collection';
import Benefits from './Benefits';
import Instructions from './Instructions';

function Home() {
	return (
		<div className="home">
			<LandingBanner />
			<Collection />
			<Benefits />
			<Instructions />
		</div>
	)
}

export default Home
