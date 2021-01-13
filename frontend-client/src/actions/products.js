export const fetchData = () => async (dispatch, getState) => {
	await fetch('http://localhost:8080/products/filter/category')
		.then(res => res.json())
		.then(res => ({
			type: 'FETCH_CATEGORIES',
			payload: res,
		}))
}
