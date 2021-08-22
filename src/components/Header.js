import React from 'react';
import Logo from '../coffeeroasters-subscription-site/starter-code/assets/home/desktop/icon-coffee-bean.svg';

// Need to import react-router

function Header() {
	return (
		<div className="header">
			<img src={Logo} alt="Coffeeroasters logo" className="header__img" />

			<section className="header__links">
				<a href="#">Home</a>
				<a href="#">About us</a>
				<a href="#">Create your plan</a>
			</section>
		</div>
	)
}

export default Header
