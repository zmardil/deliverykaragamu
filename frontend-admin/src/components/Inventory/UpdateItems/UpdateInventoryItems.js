import React, { Component } from 'react'

import './UpdateInventoryItems.css'
import axios from 'axios'
import { confirmAlert } from 'react-confirm-alert' // Import
import Background from './img/gymbanner.jpg'
import $ from 'jquery'
export default class UpdateInventoryItems extends Component {
	constructor(props) {
		super(props)
		this.state = {
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
			ImgPreview: '',
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
						ImgPreview: Img1Path.replace(/ /g, '%20'),
					})

					console.log(this.state.ImgPreview)
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
										<div
											class='flex-grow-1 bg-login-image'
											style={{
												backgroundImage: `url(${this.state.ImgPreview})`,
											}}
										>
											{' '}
										</div>
									</div>
									<div class='col-lg-6'>
										<div class='p-5'>
											<div class='text-center'>
												<h4 class='text-dark mb-4'>
													Inventory | {this.state.updateMode} Items
												</h4>
											</div>
											<form class='user'>
												<div class='form-group'>
													<label
														style={{ fontSize: '12px', marginLeft: '15px' }}
													>
														Item Name
													</label>
													<input
														class='form-control form-control-user'
														type='text'
														id='ItemName'
														placeholder='Enter Item Name...'
														name='ItemName'
														value={this.state.Name}
														onChange={e =>
															this.onItemNameChange(e.target.value)
														}
													/>
												</div>
												<div class='form-group'>
													<label
														style={{ fontSize: '12px', marginLeft: '15px' }}
													>
														Item Description
													</label>
													<textarea
														class='form-control form-control-user'
														id='ItemDescription'
														placeholder='Enter Item Description...'
														name='ItemDescription'
														value={this.state.Description}
														onChange={e =>
															this.onDescriptionChange(e.target.value)
														}
													/>
												</div>

												<div class='form-group'>
													<label
														style={{ fontSize: '12px', marginLeft: '15px' }}
													>
														Item Price
													</label>
													<input
														class='form-control form-control-user'
														type='number'
														id='ItemPrice'
														style={{ borderRadius: '20px' }}
														placeholder='Enter Item Price...'
														name='ItemPrice'
														value={this.state.Price}
														onChange={e => this.onPriceChange(e.target.value)}
													/>
												</div>

												<div class='form-group'>
													<label
														style={{ fontSize: '12px', marginLeft: '15px' }}
													>
														Item Code
													</label>
													<input
														class='form-control form-control-user'
														type='text'
														style={{ borderRadius: '20px' }}
														placeholder='Enter Item Code...'
														name='ItemCode'
														id='ItemCode'
														value={this.state.Code}
														onChange={e =>
															this.onItemCodeChange(e.target.value)
														}
													/>
												</div>

												<div class='form-group'>
													<label
														style={{ fontSize: '12px', marginLeft: '15px' }}
													>
														Category 1
													</label>
													<input
														class='form-control form-control-user'
														type='text'
														id='exampleInputEmail'
														placeholder='Enter Category 1...'
														name='Category1'
														id='Category1'
														value={this.state.Category1}
														onChange={e =>
															this.onCategory1Change(e.target.value)
														}
													/>
												</div>

												<div class='form-group'>
													<label
														style={{ fontSize: '12px', marginLeft: '15px' }}
													>
														Category 2
													</label>
													<input
														class='form-control form-control-user'
														type='text'
														style={{ borderRadius: '20px' }}
														placeholder='Enter Category 2...'
														name='Category2'
														id='Category2'
														value={this.state.Category2}
														onChange={e =>
															this.onCategory2Change(e.target.value)
														}
													/>
												</div>

												<div class='form-group'>
													<label
														style={{ fontSize: '12px', marginLeft: '15px' }}
													>
														Stock Count
													</label>
													<input
														class='form-control form-control-user'
														type='number'
														style={{ borderRadius: '20px' }}
														placeholder='Enter Stock Count...'
														name='StockCount'
														id='StockCount'
														value={this.state.stock}
														onChange={e => this.onStockChange(e.target.value)}
													/>
												</div>

												<div class='form-group'>
													<label
														style={{ fontSize: '12px', marginLeft: '15px' }}
													>
														Images (Maximum 5)
													</label>
													<input
														class='form-control form-control-user'
														type='file'
														multiple
														id='Image'
														name='Image'
														style={{ padding: '2px' }}
														onChange={e => this.onFileChange(e)}
													/>
												</div>

												<div class='form-group'>
													<button
														class='btn btn-primary btn-block text-white btn-user'
														type='button'
														onClick={e => this.submitPackage(e.target.value)}
													>
														{this.state.updateMode} Item
													</button>
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
