import axios from 'axios'
export const SET_CART = 'SET_CART'
export const ADD_TO_CART = 'ADD_TO_CART'
export const ADD_CART_ITEM = 'ADD_CART_ITEM'
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM'
export const LOG_IN = 'LOG_IN'

export const logIn = user => async (dispatch, getState) => {
	return await axios
		.post('http://localhost:8080/users/login', user, { withCredentials: true })
		.then(res => {
			dispatch({
				type: LOG_IN,
				payload: res.data,
			})
			console.log('success')
		})
		.catch(err => {
			console.log('failiure')
		})
}

export const fetchCart = ()  => async (dispatch, getState) => {
	await axios
		.get('http://localhost:8080/users/cart')
		.then(res => {
			dispatch({
				type: SET_CART,
				payload: res,
			})
		})
		.catch(err => {
			console.log(err)
		})
}

export const addToCart = productId => async (dispatch, getState) => {
	await axios
		.post(
			'http://localhost:8080/users/cart',
			{ productId },
			{ withCredentials: true }
		)
		.then(res => {
			dispatch({
				type: ADD_TO_CART,
				payload: res.data,
			})
		})
		.catch(err => {
			console.log(err)
		})
}

export const addCartItem = id => async (dispatch, getState) => {
	const payload = {
		productId: id,
		action: 'add',
	}
	await axios
		.post('http://localhost:8080/users/cart/action', payload)
		.then(res => {
			console.log(res)
			dispatch({
				type: ADD_CART_ITEM,
				payload: payload,
			})
		})
		.catch(err => {
			console.log(err)
		})
}

export const removeCartItem = id => async (dispatch, getState) => {
	const payload = {
		productId: id,
		action: 'remove',
	}
	await axios
		.post('http://localhost:8080/users/cart/action', payload)
		.then(res => {
			console.log(res)
			dispatch({
				type: REMOVE_CART_ITEM,
				payload: payload,
			})
		})
		.catch(err => {
			console.log(err)
		})
}
