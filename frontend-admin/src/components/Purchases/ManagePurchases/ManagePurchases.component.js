import React, { Component } from 'react'
import axios from 'axios'
import './ManagePurchases.css'
import $ from 'jquery'
import Background from './img/gymbanner2.jpg'

export default class UpdatePurchases extends Component {
	constructor(props) {
		super(props)
		this.state = {
			UserId: '',
			TotalAmount: '',
			Items: '',
			address: '',
			paypalId: '',
			date: '',
			Category1: '',
			Category2: '',
			Description: '',
			stock: '',
			Price: '',
		}
	}
	componentDidMount() {
		const noticeId = this.props.location.data
		if (noticeId !== undefined) {
			this.setState({
				updateMode: 'Update',
			})
			const config = {
				headers: {
					'x-auth-token': localStorage.getItem('x-auth-token'),
				},
			}

			axios
				.get('http://localhost:8080/purchase/' + noticeId, config)
				.then(({ data }) => {
					this.setState({
						UserId: data.UserId,
						TotalAmount: data.TotalAmount,
						Items: data.Items,
						address: data.address,
						paypalId: data.paypalId,
						date: data.date.split('T')[0],
					})

					axios
						.get(
							'http://localhost:8080/products/ByCode/' + this.state.Items,
							config
						)
						.then(({ data }) => {
							console.log(data)
							this.setState({
								Category1: data[0].Category1,
								Category2: data[0].Category2,
								Price: data[0].Price,
								Description: data[0].Description,
								stock: data[0].stock,
							})
						})
						.catch(error => {
							console.log(error)
						})
				})
				.catch(error => {
					console.log(error)
				})
		}
	}

	render() {
		return (
			<div class='container'>
				<div class='row justify-content-center'>
					<div class='col-md-9 col-lg-12 col-xl-10'>
						<div
							class='card  o-hidden border-0 my-5'
							style={{
								// border: "2px solid blue",
								borderRadius: '20px',
								boxShadow: '10px 7px 10px rgba(110, 107, 107, 0.548)',
							}}
						>
							<div class='card-body p-0'>
								<div class='row'>
									<div class='col-lg-6 '>
										<div class='p-5'>
											<div class='text-center'>
												<h4 class='text-dark mb-4'>Item Details</h4>
											</div>
											<form class='user'>
												<div class='form-group'>
													<label
														style={{ fontSize: '12px', marginLeft: '15px' }}
													>
														Item Code
													</label>
													<input
														disabled
														class='form-control form-control-user'
														type='text'
														value={this.state.Items}
													/>
												</div>
												<div class='form-group'>
													<label
														style={{ fontSize: '12px', marginLeft: '15px' }}
													>
														Category 1
													</label>
													<textarea
														disabled
														class='form-control form-control-user'
														type='text'
														value={this.state.Category1}
													></textarea>
												</div>

												<div class='form-group'>
													<label
														style={{ fontSize: '12px', marginLeft: '15px' }}
													>
														Category 2
													</label>
													<input
														disabled
														class='form-control form-control-user'
														type='text'
														style={{ borderRadius: '20px' }}
														value={this.state.Category2}
													/>
												</div>

												<div class='form-group'>
													<label
														style={{ fontSize: '12px', marginLeft: '15px' }}
													>
														Price
													</label>
													<input
														disabled
														class='form-control form-control-user'
														type='text'
														style={{ borderRadius: '20px' }}
														value={this.state.Price}
													/>
												</div>
												<div class='form-group'>
													<label
														style={{ fontSize: '12px', marginLeft: '15px' }}
													>
														Stock
													</label>
													<input
														disabled
														class='form-control form-control-user'
														type='text'
														style={{ borderRadius: '20px' }}
														value={this.state.stock}
													/>
												</div>

												<div class='form-group'>
													<label
														style={{ fontSize: '12px', marginLeft: '15px' }}
													>
														Description
													</label>
													<textarea
														disabled
														class='form-control form-control-user'
														type='text'
														style={{ borderRadius: '20px' }}
														value={this.state.Description}
													/>
												</div>
											</form>
										</div>
									</div>
									<div class='col-lg-6'>
										<div class='p-5'>
											<div class='text-center'>
												<h4 class='text-dark mb-4'>Order Details</h4>
											</div>
											<form class='user'>
												<div class='form-group'>
													<label
														style={{ fontSize: '12px', marginLeft: '15px' }}
													>
														Total Amount
													</label>
													<input
														class='form-control form-control-user'
														type='text'
														disabled
														name='title'
														value={this.state.TotalAmount}
													/>
												</div>
												<div class='form-group'>
													<label
														style={{ fontSize: '12px', marginLeft: '15px' }}
													>
														Paypal Id
													</label>
													<input
														class='form-control form-control-user'
														type='text'
														disabled
														name='description'
														value={this.state.paypalId}
													/>
												</div>

												<div class='form-group'>
													<label
														style={{ fontSize: '12px', marginLeft: '15px' }}
													>
														Date
													</label>
													<input
														id='noticeDate'
														class='form-control form-control-user'
														type='text'
														style={{ borderRadius: '20px' }}
														disabled
														name='date'
														value={this.state.date}
													/>
												</div>

												<div class='text-center'>
													<h4 class='text-dark mb-4'>Deliver Details</h4>
												</div>
												<div class='form-group'>
													<label
														style={{ fontSize: '12px', marginLeft: '15px' }}
													>
														Address
													</label>
													<textarea
														class='form-control form-control-user'
														style={{ borderRadius: '20px' }}
														disabled
														value={this.state.address}
													/>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
