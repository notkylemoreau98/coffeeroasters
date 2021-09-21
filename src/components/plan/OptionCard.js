import { useState } from 'react';
import './styles/optionCard.css';

function OptionCard({fieldName, desc}) {
	const [preference, setPreference] = useState('');
	const [beanType, setBeanType] = useState('');
	const [quantity, setQuantity] = useState('');
	const [grindOption, setGrindOption] = useState('');
	const [delivery, setDelivery] = useState('');
	
	return (
		<div 
			className="card" 
			>
			<h4>{fieldName}</h4>
			<p>{desc}</p>
		</div>
	)
}

export default OptionCard
