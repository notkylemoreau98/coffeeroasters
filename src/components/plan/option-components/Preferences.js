import { useState, useEffect } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import '../styles/accordian.css';
import '../styles/optionCard.css';


// Use a reducer to store plans in a global state

function Preferences() {
	const [active, setActive] = useState(true);
	const [preference, setPreference] = useState('');

	const handleBackgroundColor = useEffect(() => {
		const cards = document.querySelectorAll('.preference .card');

		cards.forEach(card => {
			const cardTitle = card.querySelector('.card__title');
			console.log(cardTitle.innerText);
			if(cardTitle.innerText == preference) {
				card.style.backgroundColor = "#0e8784";
			}	else {
					card.style.backgroundColor = "#f4f1eb";
			}
		})
	}, [preference]);


	return (
		<div className="preference accordian">
			<div className="accordian__header" onClick={() => setActive(!active)}>
				<h3>How do you drink your coffee?</h3>
				{active ? <IoIosArrowDown /> : <IoIosArrowUp />}
			</div>

			{active ? <div className="accordian__cards">
				<div className="card" onClick={() => setPreference("Capsule")}>
					<h4 className="card__title">Capsule</h4>
					<p>Compatible with Nespresso systems and similar brewers</p>
				</div>
				
				<div className="card" onClick={() => setPreference("Filter")} >
					<h4 className="card__title">Filter</h4>
					<p>For pour over or drip methods like Aeropress, Chemex, and V60</p>
				</div>
				
				<div className="card" onClick={() => setPreference("Espresso")}>
					<h4 className="card__title">Espresso</h4>
					<p>Dense and finely ground beans for an intense, flavorful experience</p>
				</div>
			</div> : ''}			
		</div>
	)
}

export default Preferences
