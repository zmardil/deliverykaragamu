import { ADD_TO_CART } from '../actions/user'
import { ADD_CART_ITEM } from '../actions/user'
import { REMOVE_CART_ITEM } from '../actions/user'
import { FETCH_CART } from '../actions/user'
import { LOG_IN } from '../actions/user'

const initialState = {
	user: {},
	cart: [],
}

export function user(state = initialState, action) {
	switch (action.type) {
		case LOG_IN:
			return { ...state, user: action.payload }
		case FETCH_CART:
			return { ...state, cart: action.payload }
		case ADD_TO_CART:
			return { ...state, cart: action.payload }
		case ADD_CART_ITEM:
			return {
				...state,
				cart: state.cart.map(item =>
					item.productId === action.payload.productId ? ++item.qty : item
				),
			}
		case REMOVE_CART_ITEM:
			return {
				...state,
				cart: state.cart.map(item =>
					item.productId === action.payload.productId ? ++item.qty : item
				),
			}
		default:
			return state
	}
}
