import { useState } from 'react';
import './styles/accordian.css';

import Data  from './Data';
import OptionCard from './OptionCard';
import styled from 'styled-components';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const AccordianSection = styled.div``
const Container = styled.div``

function Accordian({ title, fieldName1, fieldName2, fieldName3, desc1, desc2, desc3 }) {
	const [active, setActive] = useState(false);

	return (
		<section className="accordian">
			<div className="accordian__header" onClick={() => setActive(!active)}>
				<h3>{title}</h3>
				{active ? <IoIosArrowDown /> : <IoIosArrowUp />}
			</div>

			{active ? <div className="accordian__cards">
				<OptionCard fieldName={fieldName1} desc={desc1} />
				<OptionCard fieldName={fieldName2} desc={desc2} />
				<OptionCard fieldName={fieldName3} desc={desc3} />
			</div> : ''}
			
		</section>
	)
}

export default Accordian
