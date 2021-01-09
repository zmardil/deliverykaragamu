import React, { Component } from 'react'

import './ViewInventoryItems.css'
import axios from 'axios'
import { confirmAlert } from 'react-confirm-alert'
import { PayPalButton } from 'react-paypal-button-v2'
import $ from 'jquery'
import SimpleImageSlider from 'react-simple-image-slider'
export default class ViewInventoryItems extends Component {
	constructor(props) {
		super(props)
		this.state = {
			id: '',
			Name: '',
			Description: '',
			Price: '',
			Code: '',
			Category1: '',
			Category2: '',
			ImgPath: [],
			Img1Path: '',
			Img2Path: '',
			Img3Path: '',
			Img4Path: '',
			Img5Path: '',
			Img1: '',
			Img2: '',
			Img3: '',
			Img4: '',
			Img5: '',
			stock: '',
			ImgPreview: [],
			updateMode: 'Insert',
		}
	}
	componentDidMount() {
		const productId = this.props.location.data
		if (productId !== undefined) {
			this.setState({
				updateMode: 'Update',
			})
			const config = {
				headers: {
					'x-auth-token': localStorage.getItem('x-auth-token'),
				},
			}
			axios
				.get('http://localhost:8080/products/' + productId, config)
				.then(({ data }) => {
					let Img1Path = 'http://localhost:8080/' + data.Img1Path
					let Img2Path = 'http://localhost:8080/' + data.Img2Path
					let Img3Path = 'http://localhost:8080/' + data.Img3Path
					let Img4Path = 'http://localhost:8080/' + data.Img4Path
					let Img5Path = 'http://localhost:8080/' + data.Img5Path
					this.setState({
						id: data._id,
						Name: data.Name,
						Description: data.Description,
						Price: data.Price,
						Code: data.Code,
						Category1: data.Category1,
						Category2: data.Category2,
						Img1Path: Img1Path,
						Img2Path: Img2Path,
						Img3Path: Img3Path,
						Img4Path: Img4Path,
						Img5Path: Img5Path,
						stock: data.stock,
						ImgPreview: [
							{
								url: Img1Path.replace(/ /g, '%20'),
							},
							{
								url: Img2Path.replace(/ /g, '%20'),
							},
							{
								url: Img3Path.replace(/ /g, '%20'),
							},
							{
								url: Img4Path.replace(/ /g, '%20'),
							},
							{
								url: Img5Path.replace(/ /g, '%20'),
							},
						],
					})
				})
				.catch(error => {
					console.log(error)
				})
		}
	}
	onItemNameChange(e) {
		$('#ItemName').css('background-color', '#fff')
		this.setState({
			Name: e,
		})
	}
	onDescriptionChange(e) {
		$('#ItemDescription').css('background-color', '#fff')
		this.setState({
			Description: e,
		})
	}
	onPriceChange(e) {
		$('#ItemPrice').css('background-color', '#fff')
		this.setState({
			Price: e,
		})
	}
	onItemCodeChange(e) {
		$('#ItemCode').css('background-color', '#fff')
		this.setState({
			Code: e,
		})
	}
	onCategory1Change(e) {
		$('#Category1').css('background-color', '#fff')
		this.setState({
			Category1: e,
		})
	}
	onCategory2Change(e) {
		$('#Category2').css('background-color', '#fff')
		this.setState({
			Category2: e,
		})
	}
	onStockChange(e) {
		$('#StockCount').css('background-color', '#fff')
		this.setState({
			stock: e,
		})
	}

	onFileChange = event => {
		let files = Array.from(event.target.files)

		files.forEach(ImgPath => {
			let reader = new FileReader()
			reader.onloadend = () => {
				this.setState({
					ImgPath: [...this.state.ImgPath, ImgPath],
					ImgPreview: [reader.result],
				})
				console.log(this.state.ImgPath)
			}
			reader.readAsDataURL(ImgPath)
		})
	}

	submitPackage(e) {
		if (this.state.updateMode == 'Update') {
			const packageId = this.props.location.data
			try {
				let formData = new FormData()

				formData.append('Name', this.state.Name)
				formData.append('Description', this.state.Description)
				formData.append('Price', this.state.Price)
				formData.append('Category1', this.state.Category1)
				formData.append('Category2', this.state.Category2)
				formData.append('Code', this.state.Code)
				formData.append('stock', this.state.stock)

				const config = {
					headers: {
						'Content-Type': 'application/json',
					},
				}

				axios
					.put('http://localhost:8080/products/' + packageId, formData, config)
					.then(res => {
						alert('successed')
						window.location = '/inventory'
					})
			} catch (err) {
				console.log(err)
			}
		} else {
			try {
				let formData = new FormData()

				this.state.ImgPath.forEach(element => {
					formData.append('Img1Path', element)
					console.log(element)
				})

				formData.append('Name', this.state.Name)
				formData.append('Description', this.state.Description)
				formData.append('Price', this.state.Price)
				formData.append('Category1', this.state.Category1)
				formData.append('Category2', this.state.Category2)
				formData.append('Code', this.state.Code)
				formData.append('stock', this.state.stock)

				const config = {
					headers: {
						'Content-Type': 'application/json',
					},
				}

				axios
					.post('http://localhost:8080/products/', formData, config)
					.then(res => {
						alert('successed')
						window.location = '/inventory'
					})
			} catch (err) {
				console.log(err)
			}
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
									<div class='col-lg-6 d-none d-lg-flex'>
										<div class='flex-grow-1 bg-login-image'>
											<SimpleImageSlider
												width={500}
												height={600}
												images={this.state.ImgPreview}
											/>
										</div>
									</div>
									<div class='col-lg-6'>
										<div class='p-5'>
											<div class='text-center'>
												<h4 class='text-dark mb-4'>{this.state.Name}</h4>
											</div>
											<form class='user'>
												<div class='form-group'>
													<label
														style={{ fontSize: '12px', marginLeft: '15px' }}
													>
														Item Name :
													</label>
													<label
														style={{ fontSize: '12px', marginLeft: '15px' }}
													>
														{this.state.Name}
													</label>
												</div>
												<div class='form-group'>
													<label
														style={{ fontSize: '12px', marginLeft: '15px' }}
													>
														Item Description :
													</label>
													<p style={{ fontSize: '12px', marginLeft: '15px' }}>
														{this.state.Description}
													</p>
												</div>

												<div class='form-group'>
													<label
														style={{ fontSize: '12px', marginLeft: '15px' }}
													>
														Item Price :
													</label>
													<label
														style={{ fontSize: '12px', marginLeft: '15px' }}
													>
														{this.state.Price}
													</label>
												</div>

												<div class='form-group'>
													<label
														style={{ fontSize: '12px', marginLeft: '15px' }}
													>
														Item Code :
													</label>
													<label
														style={{ fontSize: '12px', marginLeft: '15px' }}
													>
														{this.state.Code}
													</label>
												</div>

												<div class='form-group'>
													<label
														style={{ fontSize: '12px', marginLeft: '15px' }}
													>
														Category 1 :
													</label>
													<label
														style={{ fontSize: '12px', marginLeft: '15px' }}
													>
														{this.state.Category1}
													</label>
												</div>

												<div class='form-group'>
													<label
														style={{ fontSize: '12px', marginLeft: '15px' }}
													>
														Category 2 :
													</label>
													<label
														style={{ fontSize: '12px', marginLeft: '15px' }}
													>
														{this.state.Category2}
													</label>
												</div>

												<div class='form-group'>
													<PayPalButton
														amount={this.state.Price}
														// shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
														onSuccess={(details, data) => {
															const config = {
																headers: {
																	'Content-Type': 'application/json',
																},
															}

															axios
																.get(
																	'http://localhost:8080/products/reduce/' +
																		this.state.id,
																	config
																)
																.then(res => {})

															let userId = localStorage.getItem('userId')
															console.log(userId)
															let address = ''
															if (userId == undefined) {
																address = prompt('Please enter your Address')
																const purchaseDetails = {
																	UserId: '0',
																	TotalAmount: this.state.Price,
																	Items: this.state.Code,
																	paypalId: details.id,
																	address: address,
																	date: new Date(),
																}

																axios
																	.post(
																		'http://localhost:8080/purchase/',
																		purchaseDetails,
																		config
																	)
																	.then(res => {
																		alert('successed')
																	})
															} else {
																const config = {
																	headers: {
																		'Content-Type': 'application/json',
																	},
																}
																axios
																	.get(
																		'http://localhost:8080/users/' + userId,
																		config
																	)
																	.then(({ data }) => {
																		address = data.address
																		const purchaseDetails = {
																			UserId: userId,
																			TotalAmount: this.state.Price,
																			Items: this.state.Code,
																			paypalId: details.id,
																			address: address,
																			date: new Date(),
																		}

																		axios
																			.post(
																				'http://localhost:8080/purchase/',
																				purchaseDetails,
																				config
																			)
																			.then(res => {
																				alert('successed')
																			})
																	})
															}

															console.log(details)

															// OPTIONAL: Call your server to save the transaction
															return fetch('/paypal-transaction-complete', {
																method: 'post',
																body: JSON.stringify({
																	orderID: data.orderID,
																}),
															})
														}}
														options={{
															clientId:
																'AR3sGNj5VxM5CvTqH2c6FXhyoADKhoXIVcRq-u-FcQZG4UPq6qqEAwgP3yTDLdqu0aBZFBQrnwr2pijO',
														}}
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
