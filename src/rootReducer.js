import data from './data.json';
import { ADD, REMOVE } from './actionTypes';

const INITIAL_STATE = {
	products  : data.products,
	cartItems : {},
	cartTotal : 0
};

const cartTotal = (products, cartItems) => {
	let total = 0;
	for (let id in cartItems) {
		total += cartItems[id] * products[id]['price'];
	}
	return total.toFixed(2);
};

function rootReducer(state = INITIAL_STATE, action) {
	const cartCopy = { ...state.cartItems };
	switch (action.type) {
		case ADD:
			cartCopy[action.id] = (cartCopy[action.id] || 0) + 1;
			return {
				...state,
				cartItems : cartCopy,
				cartTotal : cartTotal(state.products, cartCopy)
			};

		case REMOVE:
			if (!cartCopy[action.id]) return state;
			cartCopy[action.id]--;
			if (cartCopy[action.id] === 0) {
				delete cartCopy[action.id];
			}
			return {
				...state,
				cartItems : cartCopy,
				cartTotal : cartTotal(state.products, cartCopy)
			};

		default:
			return state;
	}
}

export default rootReducer;
