import React from 'react';
// import styles

import LandingBanner from './LandingBanner';
import Collection from './Collection';
import Benefits from './Benefits';

function Home() {
	return (
		<div className="home">
			<LandingBanner />
			<Collection />
			<Benefits />
		</div>
	)
}

export default Home
