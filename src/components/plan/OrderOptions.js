import { useState } from 'react';
import './styles/orderOptions.css';
import Sidebar from './Sidebar';
import Accordian from './Accordian';

import Preferences from './option-components/Preferences';

function OrderOptions() {
	return (
		<div className="orop">
			<Sidebar className="sidebar__flex" />

			<section className="orop__container">
				{/* <div className="orop__preference" id="preference">
					<Accordian
						title="How do you drink your coffee?"
						fieldName1="Capsule"
						desc1="Compatible with Nespresso systems and similar brewers"
						fieldName2="Filter"
						desc2="For pour over or drip methods like Aeropress, Chemex, and V60"
						fieldName3="Espresso"
						desc3="Dense and finely ground beans for an intense, flavorful experience"
						state={preference}
						setState={setPreference}
					/>
				</div>

				<div className="orop__beanType" id="beanType">
					<Accordian
						title="What type of coffee?"
						fieldName1="Single origin"
						desc1="Distinct with Nespresso systems and similar brewers"
						fieldName2="Decaf"
						desc2="Just like regular coffee, except the caffeine has been removed"
						fieldName3="Blended"
						desc3="Combination of two or three dark roasted beans of organic coffees"
						state={beanType}
						setState={setBeanType}
					/>
				</div>

			<div className="orop__quantity" id="quantity">
				<Accordian
						title="How much would you like?"
						fieldName1="250g"
						desc1="Perfect for the solo drinker. Yields about 12 delicious cups."
						fieldName2="500g"
						desc2="Perfect option for a couple. Yields about 40 delectable cups."
						fieldName3="1000g"
						desc3="Perfect for offices and events. Yields about 90 delightful cups"
						state={quantity}
						setState={setQuantity}
					/>
			</div>

			<div className="orop__grindOption" id="grindOption">
				<Accordian
						title="Want us to grind them?"
						fieldName1="Wholebean"
						desc1="Best choice if you cherish the full sensory experience"
						fieldName2="Filter"
						desc2="For drip or pour-over coffee methods such as V60 or Aeropress"
						fieldName3="Cafetiére"
						desc3="Course ground beans specially suited for french press coffee"
						state={grindOption}
						setState={setGrindOption}
					/>
			</div>

			<div className="orop__delivery" id="delivery">
				<Accordian
						title="How often should we deliver?"
						fieldName1="Every week"
						desc1="$14.00 per shipment. Includes free first-class shipping."
						fieldName2="Every 2 weeks"
						desc2="$17.25 per shipment. Includes free priority shipping."
						fieldName3="Every month"
						desc3="$22.50 per shipment. Includes free priority shipping."
						state={delivery}
						setState={setDelivery}
					/>
			</div> */}

			<Preferences />

			</section>
		</div>
	)
}

export default OrderOptions
