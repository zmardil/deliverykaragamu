import React, { useEffect, useState } from 'react'
import './Archive.scss'
import { Link } from 'react-router-dom'
import ShoeImg from '../assets/products/004071584.jfif'
import { Star } from 'react-feather'
import axios from 'axios'
import { connect } from 'react-redux'
import { addToCart } from '../actions/user'

const mapStateToProps = state => ({
	cart: state.user.cart,
	user: state.user.user,
})

const mapDispatchToProps = { addToCart }

const Archive = ({ user, addToCart, ...props }) => {
	const [items, setItems] = useState([])
	useEffect(() => {
		axios
			.get('http://localhost:8080/products/filter/all')
			.then(({ data }) => {
				if (data.length > 0) {
					console.log(data)
					setItems(data)
				}
			})
			.catch(error => {
				console.log(error)
			})
	}, [])

	return (
		<main className='Archive'>
			<div className='container'>
				<h4 className='Archive__title'>
					Men's Shoes <span className='Archive__item-count'>(177)</span>
				</h4>
				<div className='Archive__wrapper'>
					<aside className='Archive__filters-wrapper'>
						<ul className='Archive__filter'>
							<li>
								<input type='checkbox' name='newIn' id='newIn' />
								<label htmlFor='newIn'>New In(2)</label>
							</li>
							<li>
								<input
									type='checkbox'
									name='exclusive'
									id='exclusive'
									checked
								/>
								<label htmlFor='exclusive'>Exclusive (18)</label>
							</li>
						</ul>
						<ul className='Archive__filter'>
							<h5>Shoe Type</h5>
							<li>
								<input type='checkbox' name='derby' id='derby' />
								<label htmlFor='derby'>Derby Shoes (5)</label>
							</li>
							<li>
								<input type='checkbox' name='loafers' id='loafers' />
								<label htmlFor='loafers'>Loafers (6)</label>
							</li>
						</ul>
						<ul className='Archive__filter'>
							<h5>Brand</h5>
							<li>
								<input type='checkbox' name='fooLewis' id='fooLewis' />
								<label htmlFor='FooLewis'>Foo Lewis & Partners (14)</label>
							</li>
							<li>
								<input type='checkbox' name='dune' id='dune' />
								<label htmlFor='dune'>Dune (1)</label>
							</li>
							<li>
								<input type='checkbox' name='sebago' id='sebago' />
								<label htmlFor='sebago'>Sebago (1)</label>
							</li>
							<li>
								<input type='checkbox' name='solovair' id='solovair' />
								<label htmlFor='solovair'>Solovair (1)</label>
							</li>
						</ul>
					</aside>
					<section className='Archive__items'>
						<div className='Archive__items-header'>
							<select name='sortBy' id='sortBy'>
								<option selected='' value='relevance'>
									Sort by: Relevance
								</option>
								<option value='priceHigh'>Price high to low</option>
								<option value='priceLow'>Price low to high</option>
								<option value='new'>Newness</option>
								<option value='popularity'>Popularity</option>
								<option value='rating'>Rating</option>
								<option value='discount'>Discount % high to low</option>
							</select>
						</div>
						<div className='Archive__items-body'>
							{items &&
								items.map(item => (
									<div className='Archive__item' key={item._id}>
									{console.log(item._id)}
										<div className='Archive__item-img'>
											<img
												src={`http://localhost:8080/${item.Img4Path}`}
												alt=''
											/>
											<div className='Archive__item-img-overlay'>
												<button
													onClick={e => {
														console.log('clicked')
														user
															? addToCart(item._id, user)
															: props.history.push('login')
													}}
												>
													Add to Cart
												</button>
											</div>
										</div>
										<Link
											to={{
												pathname: '/Product',
												data: item._id,
											}}
										>
											<h5 className='Archive__item-title'>
												{item.Description}
											</h5>
											<p className='Archive__item-price'>Rs. {item.Price}</p>
											<p className='Archive__item-rating'>
												<Star size='15' />
												<Star size='15' />
												<Star size='15' />
												<Star size='15' />
												<Star size='15' color='grey' />
											</p>
										</Link>
									</div>
								))}
						</div>
					</section>
				</div>
			</div>
		</main>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(Archive)
