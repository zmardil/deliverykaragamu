import { FETCH_CATEGORIES } from '../actions/products'

const initialState = {
	products: [],
	categories: [],
}

export function products(state = initialState, action) {
	switch (action.type) {
		case FETCH_CATEGORIES:
			return { ...state, categories: action.payload }
		default:
			return state
	}
}
