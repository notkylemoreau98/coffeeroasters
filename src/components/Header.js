import React from 'react';
import Logo from './styles/assets/shared/desktop/logo.svg';
import './styles/header.css';

// Need to import react-router

function Header() {
	return (
		<div className="header">
			<section className="header__logoContainer">
				<a href="#">
					<img src={Logo} alt="Coffeeroasters logo" className="header__logo" />
				</a>
			</section>

				<section className="header__links">
					<a href="#">Home</a>
					<a href="#">About us</a>
					<a href="#">Create your plan</a>
				</section>
		</div>
	)
}

export default Header
