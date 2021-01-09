import React, { Component } from 'react'
import './Archive.scss'
import { Link } from 'react-router-dom'
import ShoeImg from '../assets/products/004071584.jfif'
import { Star } from 'react-feather'
import axios from 'axios'

export default class Archive extends Component {
	constructor(props) {
		super(props)
		this.state = {
			Items: [],
		}
	}

	componentDidMount() {
		axios
			.get('http://localhost:8080/products/filter/all')
			.then(({ data }) => {
				if (data.length > 0) {
					console.log(data)
					this.setState({
						Items: data,
					})
				}
			})
			.catch(error => {
				console.log(error)
			})
	}

	render() {
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
								{this.state.Items.map(column => (
									<Link
										to={{
											pathname: '/Product',
											data: column._id,
										}}
									>
										<div className='Archive__item'>
											<div className='Archive__item-img'>
												<img src={ShoeImg} alt='' />
												<div className='Archive__item-img-overlay'>
													<button>Add to Cart</button>
												</div>
											</div>
											<h5 className='Archive__item-title'>
												{column.Description}
											</h5>
											<p className='Archive__item-price'>{column.Price}</p>
											<p className='Archive__item-rating'>
												<Star size='15' />
												<Star size='15' />
												<Star size='15' />
												<Star size='15' />
												<Star size='15' color='grey' />
											</p>
										</div>
									</Link>
								))}
							</div>
						</section>
					</div>
				</div>
			</main>
		)
	}
}
