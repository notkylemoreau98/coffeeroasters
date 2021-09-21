import { useState } from 'react';
import './styles/accordian.css';

import Data  from './Data';
import OptionCard from './OptionCard';
import styled from 'styled-components';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

function Accordian({ title, fieldName1, fieldName2, fieldName3, desc1, desc2, desc3, state, setState }) {
	const [active, setActive] = useState(true);
	// const [orderValue, setOrderValue] = useState('');

	console.log(state, setState);

	return (
		<section className="accordian">
			<div className="accordian__header" onClick={() => setActive(!active)}>
				<h3>{title}</h3>
				{active ? <IoIosArrowDown /> : <IoIosArrowUp />}
			</div>

			{active ? <div className="accordian__cards">
				<OptionCard fieldName={fieldName1} desc={desc1} onClick={() => setState(fieldName1)} />
				<OptionCard fieldName={fieldName2} desc={desc2} onClick={() => setState(fieldName2)} />
				<OptionCard fieldName={fieldName3} desc={desc3} onClick={() => setState(fieldName3)} />
			</div> : ''}
			
		</section>
	)
}

export default Accordian;
