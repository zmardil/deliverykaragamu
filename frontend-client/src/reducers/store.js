import { FETCH_CATEGORIES } from '../actions/products'
import { FETCH_PRODUCTS } from '../actions/products'

const initialState = {
	products: [],
	categories: [],
}

export function store(state = initialState, action) {
	switch (action.type) {
		case FETCH_CATEGORIES:
			return { ...state, categories: action.payload }
		case FETCH_PRODUCTS:
			return { ...state, products: action.payload }
		default:
			return state
	}
}
