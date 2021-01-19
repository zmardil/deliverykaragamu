import React, { useEffect, useState } from 'react'
import './Basket.scss'
import { Link } from 'react-router-dom'
import ShoeImg from '../assets/products/004071584.jfif'
import { Trash } from 'react-feather'
import { connect } from 'react-redux'
import { addCartItem, removeCartItem, fetchCart } from '../actions/user'
import axios from 'axios'

const mapStateToProps = state => ({
	user: state.user.user,
	cart: state.user.cart,
})

const mapDispatchToProps = {
	fetchCart,
	addCartItem,
	removeCartItem,
}

function Basket({ user, cart, ...props }) {
	const [items, setItems] = useState([])
	const [total, setTotal] = useState(0)
	useEffect(() => {
		axios
			.get('http://localhost:8080/users/cart', { withCredentials: true })
			.then(res => setItems(res.data))
	}, [])

	return (
		<main className='Basket'>
			<div className='container'>
				<h4 className='Basket__title'>Basket</h4>
				<div className='Basket__wrapper'>
					<div className='Basket__items-container'>
						{cart.length === 0 && <p>No items in cart</p>}
						{items.map(({ _id: item, qty }) => (
							<div className='Basket__item' key={item._id}>
								<div className='Basket__item-img'>
									<img
										src={`http://localhost:8080/${item.Img4Path}`}
										alt={item.Name}
									/>
								</div>
								<div className='Basket__item-content'>
									<div className='Basket__item-header'>
										<h4 className='Basket__item-title'>{item.Name}</h4>
										<button className='Basket__item-remove-btn'>
											<Trash color='black' size={20} />
										</button>
									</div>
									<p className='Basket__item-availability'>
										{item.stock
											? 'Currently in stock online'
											: 'Currently not available'}
									</p>
									<div className='Basket__item-footer'>
										<div className='Basket__item-quantity'>
											<p className='Basket__item-quantity-title'>Quantity</p>
											<div className='Basket__item-quantity-container'>
												<button
													className='Basket__item-quantity-remove'
													onClick={addCartItem(item._id)}
												>
													-
												</button>
												<div>{qty}</div>
												<button
													className='Basket__item-quantity-add'
													onClick={removeCartItem(item._id)}
												>
													+
												</button>
											</div>
										</div>
										<p className='Basket__item-price'>LKR {item.Price * qty}</p>
									</div>
								</div>
							</div>
						))}
					</div>
					<div className='Basket__checkout-card'>
						<h4>Summary</h4>
						<p>Your order qualifies for</p>
						<ul>
							<li>Free standard Sri Lanka Local Delivery</li>
							<li>Free Click & Collect Order before 4pm</li>
						</ul>
						<p>Main delivery options at checkout</p>
						<div className='Basket__checkout-card-total'>
							<h3>Total (excluding delivery)</h3>
							<h4>LKR {total}</h4>
						</div>
						<button className='Basket__checkout-card-btn'>
							Continue to checkout
						</button>
					</div>
				</div>
			</div>
		</main>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket)
