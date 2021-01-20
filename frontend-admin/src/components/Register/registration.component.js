import React, { Component } from 'react'
import Background from './image/pic2.png'
import ReactDOM from 'react-dom'
import axios from 'axios'
import { red } from '@material-ui/core/colors'

export default class UserRegistration extends Component {
	constructor(props) {
		super(props)
		this.state = {
			firstName: '',
			lastName: '',
			email: '',
			mobileNumber: '',
			address: '',
			password: '',
			password2: '',
			status: '',
		}

		this.handleChange = this.handleChange.bind(this)
		this.onChange = this.onChange.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
	}

	componentDidMount() {}

	onChange = e => {
		this.setState({ [e.target.id]: e.target.value })
	}

	handleChange(event) {
		this.setState({ gender: event.target.value })
	}

	myChangeHandler = event => {
		let nam = event.target.name
		let val = event.target.value
		if (nam === 'mobileNumber') {
			if (!Number(val)) {
				alert('Your mobile number must include only digits')
			}
		}
		this.setState({ [nam]: val })
	}

	onSubmit(e) {
		e.preventDefault()

		if (this.state.password != this.state.password2) {
			this.setState({
				status: 'Password Mismatch',
			})

			return false
		} else {
			this.setState({
				status: 'Password matched',
			})

			const user = {
				firstName: this.state.firstName,
				lastName: this.state.lastName,
				email: this.state.email,
				mobileNumber: this.state.mobileNumber,
				address: this.state.address,
				password: this.state.password,
				type: 'user',
			}

			console.log(user)

			axios
				.post('http://localhost:8080/users/', user)
				.then(({ data }) => {
					console.log(data)
					window.location = '/userLogin'
				})
				.catch(error => {
					console.log(error)
				})

			this.setState({
				firstName: '',
				lastName: '',
				email: '',
				mobileNumber: '',
				address: '',
				password: '',
				password2: '',
			})
		}
	}

	render() {
		return (
			<div class='container'>
				<div class='card shadow-lg o-hidden border-0 my-5'>
					<div class='card-body p-0'>
						<div class='row'>
							<div class='col-lg-5 d-none d-lg-flex'>
								<div
									class='flex-grow-1 bg-login-image'
									style={{
										// border: "2px solid blue",
										backgroundImage: `url(${Background})`,
										backgroundRepeat: 'no-repeat' /* Do not repeat the image*/,
										backgroundSize: 'cover',
										boxShadow: '10px 7px 10px rgba(110, 107, 107, 0.548)',
										boxShadow: '10px 7px 10px rgba(110, 107, 107, 0.548)',
									}}
								></div>{' '}
							</div>
							<div class='col-lg-7'>
								<div class='p-5'>
									<div class='text-center'>
										<h4 class='text-dark mb-4'>Create an Account!</h4>
									</div>
									<form class='user' onSubmit={this.onSubmit}>
										<div class='form-group row'>
											<div class='col-sm-6 mb-3 mb-sm-0'>
												<input
													onChange={this.onChange}
													class='form-control form-control-user'
													type='text'
													id='firstName'
													placeholder='First Name'
													value={this.state.firstName}
													name='firstName'
													required
												/>
											</div>
											<div class='col-sm-6'>
												<input
													onChange={this.onChange}
													class='form-control form-control-user'
													type='text'
													id='lastName'
													placeholder='Last Name'
													value={this.state.lastName}
													name='lastName'
													required
												/>
											</div>
										</div>

										<div class='form-group row'>
											<div class='col-sm-6'>
												<input
													class='form-control form-control-user'
													type='text'
													id='mobileNumber'
													placeholder='Mobile Number'
													name='mobileNumber'
													required
													value={this.state.mobileNumber}
													onChange={this.myChangeHandler}
													//onChange = {this.onChange}
												/>
											</div>
										</div>
										<div class='form-group'>
											<input
												class='form-control form-control-user'
												type='email'
												id='email'
												aria-describedby='emailHelp'
												placeholder='Email Address'
												name='email'
												onChange={this.onChange}
												value={this.state.email}
												required
											/>
										</div>
										<div class='form-group'>
											<textarea
												class='form-control form-control-user'
												type='address'
												id='address'
												aria-describedby='addresslHelp'
												placeholder='Address'
												name='address'
												onChange={this.onChange}
												value={this.state.address}
												required
											/>
										</div>
										<div class='form-group row'>
											<div class='col-sm-6 mb-3 mb-sm-0'>
												<input
													class='form-control form-control-user'
													type='password'
													id='password'
													placeholder='Password'
													name='password'
													onChange={this.onChange}
													value={this.state.password}
													required
												/>
											</div>
											<div class='col-sm-6'>
												<input
													class='form-control form-control-user'
													type='password'
													id='password2'
													placeholder='Repeat Password'
													onChange={this.onChange}
													value={this.state.password2}
													name='password2'
													required
												/>
											</div>

											<p style={{ color: 'red' }}>{this.state.status}</p>
										</div>
										<button
											class='btn btn-primary btn-block text-white btn-user'
											id='signup'
											name='signup'
											type='submit'
										>
											Sign Up
										</button>
									</form>
									<div class='text-center'>
										<a class='small' href='userlogin'>
											Already have an account? Login!
										</a>
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
