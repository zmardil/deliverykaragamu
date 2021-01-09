import React, { Component } from 'react'
import './Product.scss'
import { Link } from 'react-router-dom'
import ShoeImg from '../assets/products/004071584.jfif'
import axios from 'axios'

export default class Product extends Component {
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
		}
	}
	componentDidMount() {
		const productId = this.props.location.data
		if (productId !== undefined) {
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
					})
				})
				.catch(error => {
					console.log(error)
				})
		}
	}

	render() {
		return (
			<main className='Product'>
				<div className='Product__wrapper container'>
					<section className='Product__header'>
						<div className='Product__img-wrapper'>
							<div className='Product__img'>
								<img src={this.state.Img1Path} alt='' />
							</div>
							<div className='Product__img'>
								<img src={this.state.Img2Path} alt='' />
							</div>
							<div className='Product__img'>
								<img src={this.state.Img3Path} alt='' />
							</div>
							<div className='Product__img'>
								<img src={this.state.Img4Path} alt='' />
							</div>
							<div className='Product__img'>
								<img src={this.state.Img5Path} alt='' />
							</div>
						</div>
						<div className='Product__primary-desc'>
							<h1 className='Product__title'>{this.state.Name}</h1>
							<p className='Product__price'>{this.state.Price} LKR</p>
							<p className='Product__discount'>
								Save 25% (Price includes Savings)
							</p>
							<p
								style={this.state.stock > 0 ? {} : { display: 'none' }}
								className='Product__availability'
							>
								Currently in Stock
							</p>
							<p
								style={(this.state.stock = 0 ? {} : { display: 'none' })}
								className='Product__discount'
							>
								Out Of Stock
							</p>
							<button className='Product__add-to-cart-btn'>Add to Cart</button>
							<button className='Product__add-to-cart-btn'>Buy</button>
						</div>
					</section>
					<section className='Product__footer'>
						<div className='Product__secondary-desc'></div>
					</section>
				</div>
			</main>
		)
	}
}
