import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import './InventoryGrid.css'
import styled from 'styled-components'
import 'react-confirm-alert/src/react-confirm-alert.css'
const HoverEditButton = styled.p`
	color: #ffffff;
	:hover {
		color: blue;
	}
`

//Hover Component For Add Icon
const HoverAddButton = styled.p`
	color: #ffffff;
	border-radius: 5px;
	width: 120px;
	height: 40px;
	padding: 7px 0;
	text-align: center;
	background: rgb(8 87 130);
	:hover {
		color: rgb(80 222 71);
	}
`

export default class InventoryGrid extends Component {
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
			<div>
				{/* Ecommerce grid */}
				<div style={{ margin: '2px' }}>
					<div className='row' style={{ margin: '10px' }}>
						{/* Item Column */}
						{this.state.Items.map(column => (
							<div
								className='col-md-3'
								style={{ padding: '10px' }}
								key={column._id}
							>
								<div
									className='card shadow ShopItem'
									data-bs-hover-animate='pulse'
									style={{ padding: '10px' }}
								>
									<div className='card-body'>
										<div className='card border-white'>
											<img
												className='card-img w-100 d-block'
												data-bs-hover-animate='pulse'
												src={'http://localhost:8080/' + column.Img1Path}
												alt='itemImage'
											/>
										</div>
										<h4
											className='card-title'
											style={{
												fontFamily: 'Nunito, sans-serif',
												color: 'black',
											}}
										>
											{column.Title}
										</h4>
										<h6 className='text-muted card-subtitle mb-2'>
											<br />
											Price : {column.Price}
											<br />
										</h6>
										<h6>Description: {column.Description}</h6>

										<div className='row'>
											<div className='col'>
												<Link
													to={{
														pathname: '/ViewInventoryItems',
														data: column._id,
													}}
												>
													<button
														className='btn'
														type='button'
														style={{
															backgroundColor: '#deae2a',
															color: '#ffffff',
														}}
													>
														View
													</button>
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						))}
						{/* End of column */}
					</div>
				</div>
			</div>
		)
	}
}
