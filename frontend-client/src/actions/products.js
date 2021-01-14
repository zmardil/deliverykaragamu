export const FETCH_CATEGORIES = 'FETCH_CATEGORIES'

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
