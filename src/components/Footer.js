import React from 'react';
import { Link } from 'react-router-dom';
import './styles/footer.css';

import Logo from './styles/assets/shared/desktop/logo copy.svg';
import Facebook from './styles/assets/shared/desktop/icon-facebook.svg'
import Instagram from './styles/assets/shared/desktop/icon-instagram.svg'
import Twitter from './styles/assets/shared/desktop/icon-twitter.svg'

function Footer() {
	return (
		<div className="footer">
			<img src={Logo} alt="Logo" />

			<nav className="footer__nav">
				<Link to="/" className="footer__link">Home</Link>
				<Link to="/about" className="footer__link">About us</Link>	
				<Link to="/plan" className="footer__link">Create your plan</Link>
			</nav>

			<div className="footer__social">
				<a href="https://www.facebook.com" target="_blank">
					<img src={Facebook} alt="Faceboook" />
				</a>

				<a href="https://www.instagram.com" target="_blank">
					<img src={Instagram} alt="Instagram" />
				</a>
			
				<a href="https://www.twitter.com" target="_blank">
					<img src={Twitter} alt="Twitter" />
				</a>
			</div>
		</div>
	)
}

export default Footer;
