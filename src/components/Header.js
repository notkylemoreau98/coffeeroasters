import React from 'react';
import { Link } from 'react-router-dom';

import Logo from './styles/assets/shared/desktop/logo.svg';
import './styles/header.css';

// Need to import react-router

function Header() {
	return (
		<div className="header">
			<section className="header__logoContainer">
				<Link to="/">
					<img src={Logo} alt="Coffeeroasters logo" className="header__logo" />
				</Link>
			</section>

				<nav className="header__links">
					<Link to="/" className="header__link">Home</Link>	
					<Link to="/about" className="header__link">About us</Link>
					<Link to="/plan" className="header__link">Create your plan</Link>
				</nav>
		</div>
	)
}

export default Header
