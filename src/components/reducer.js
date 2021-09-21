export const initialState = {
	preference: '',
	beanType: '',
	quantity: '',
	grindOption: '',
	delivery: ''
}

const reducer = (state,action) => {
	switch (action.type) {
		case 'UPDATE_PREFERENCE':
			return {
				...state,
				preference: action.item
			};
			
		case 'UPDATE_BEAN_TYPE':
			return {
				...state,
				beanType: action.item
			};

		case 'UPDATE_QUANTITY':
			return {
				...state,
				quantity: action.item
			};

		case 'UPDATE_GRIND_OPTION':
			return {
				...state,
				grindOption: action.item
			};
			
		case 'UPDATE_DELIVERY':
			return {
				...state,
				delivery: action.item
			};

			default:
					return;
	}
}

export default reducer;