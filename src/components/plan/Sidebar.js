import { useState } from 'react';
import './styles/sidebar.css';

function Sidebar() {
	return (
		<div className="sidebar">	
			<a href="#preference">
				<div className="sidebar__option">
					<p className="option__number">01</p>
					<p className="option__name">Preferences</p>
				</div>
			</a>
				
			<div className="sidebar__spacer"> </div>

			<a href="#beanType">
				<div className="sidebar__option">
					<p className="option__number">02</p>
					<p className="option__name">Bean Type</p>
				</div>
			</a>
				
			<div className="sidebar__spacer"> </div>

			<a href="#quantity">
				<div className="sidebar__option">
					<p className="option__number">03</p>
					<p className="option__name">Quantity</p>
				</div>
			</a>
				
			<div className="sidebar__spacer"> </div>

			<a href="#grindOption">
					<div className="sidebar__option">
						<p className="option__number">04</p>
						<p className="option__name">Grind option</p>
				</div>
			</a>

			<div className="sidebar__spacer"> </div>
				
			<a href="#delivery">
				<div className="sidebar__option">
					<p className="option__number">05</p>
					<p className="option__name">Deliveries</p>
			</div>
			</a>
		</div>
	)
}

export default Sidebar
