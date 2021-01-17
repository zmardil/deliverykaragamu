export const FETCH_CATEGORIES = 'FETCH_CATEGORIES'
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS'
export const SEARCH_PRODUCTS = 'SEARCH_PRODUCTS'

export const fetchCategories = () => async (dispatch, getState) => {
	await fetch('http://localhost:8080/products/filter/category')
		.then(res => res.json())
		.then(res =>
			dispatch({
				type: FETCH_CATEGORIES,
				payload: res,
			})
		)
}

export const fetchProducts = () => async (dispatch, getState) => {
	await fetch('http://localhost:8080/products/filter/all')
		.then(res => res.json())
		.then(res =>
			dispatch({
				type: FETCH_PRODUCTS,
				payload: res,
			})
		)
}
