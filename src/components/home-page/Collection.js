import React from 'react';
import './styles/collection.css';

import danache from '../styles/assets/home/desktop/image-danche.png';
import granEspresso from '../styles/assets/home/desktop/image-gran-espresso.png';
import piccollo from '../styles/assets/home/desktop/image-piccollo.png';
import planalto from '../styles/assets/home/desktop/image-planalto.png';

function Collection() {
	return (
		<div className="collection">
			<h2 className="collection__title">our collection</h2>

			<section className="collection__items">
				<div className="collection__item">
					<img src={granEspresso} alt="Gran-Espresso" />
					<h3>Gran Espresso</h3>
					<p>Light and flavorful blend with cocoa and black pepper for an intense experience</p>
				</div>

				<div className="collection__item">
					<img src={planalto} alt="Planalto" />
					<h3>Planalto</h3>
					<p>Brazilian dark roast with rich and velvety body, and hints of fruits and nuts</p>
				</div>

				<div className="collection__item">
					<img src={piccollo} alt="Piccollo" />
					<h3>Piccollo</h3>
					<p>Mild and smooth blend featuring notes of toasted almond and dried cherry</p>
				</div>

				<div className="collection__item">
					<img src={danache} alt="Danache" />
					<h3>Danache</h3>
					<p>Ethiopian hand-harvested blend densely packed with vibrant fruit notes</p>
				</div>
			</section>
		</div>
	)
}

export default Collection;
