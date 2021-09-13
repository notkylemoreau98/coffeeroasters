import { useState } from 'react';
import './styles/optionCard.css';

function OptionCard({fieldName, desc}) {
	const [activeColor, setActiveColor] = useState(false);

	return (
		<div 
			className="card" 
			style={{"backgroundColor": activeColor ? "#0e8784" : "#f4f1eb"}} 
			onClick={() => setActiveColor(!activeColor)}
			>
			<h4>{fieldName}</h4>
			<p>{desc}</p>
		</div>
	)
}

export default OptionCard
