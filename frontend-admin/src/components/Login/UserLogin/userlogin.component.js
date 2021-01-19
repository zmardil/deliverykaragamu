import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Background from './image/pic2.png'
import axios from 'axios'

export default class UserLogin extends Component {
	constructor(props) {
		super(props)

		this.onChangeEmail = this.onChangeEmail.bind(this)
		this.onChangePassword = this.onChangePassword.bind(this)
		this.onSubmit = this.onSubmit.bind(this)

		this.state = {
			email: '',
			password: '',
		}
	}

	onChangeEmail(e) {
		this.setState({
			email: e.target.value,
		})
	}

	onChangePassword(e) {
		this.setState({
			password: e.target.value,
		})
	}

	async onSubmit(e) {
		e.preventDefault()
		let loginResponse = ''
		try {
			const loginDetails = {
				email: this.state.email,
				password: this.state.password,
			}

			const config = {
				headers: {
					'Content-Type': 'application/json',
				},
			}

			axios
				.post('http://localhost:8080/users/login', loginDetails, config)
				.then(({ data }) => {
					loginResponse = data
					console.log(data)
					localStorage.setItem('userType', loginResponse[0].type)
					localStorage.setItem('userName', loginResponse[0].firstName)
					localStorage.setItem('userId', loginResponse[0]._id)

					if (loginResponse[0].type == 'admin') {
						window.location.replace('/inventory')
					} else {
						window.location.replace('/items')
					}
				})

			//window.location = "items";
		} catch (err) {
			console.log(err)
		}
	}

	render() {
		return (
			<div className='container'>
				<div className='row justify-content-center'>
					<div className='col-md-9 col-lg-12 col-xl-10'>
						<div className='card shadow-lg o-hidden border-0 my-5'>
							<div className='card-body p-0'>
								<div className='row'>
									<div className='col-lg-6 d-none d-lg-flex'>
										<div
											className='flex-grow-1 bg-login-image'
											style={{
												// border: "2px solid blue",
												backgroundImage: `url(${Background})`,
												backgroundRepeat:
													'no-repeat' /* Do not repeat the image*/,
												backgroundSize: 'cover',
												boxShadow: '10px 7px 10px rgba(110, 107, 107, 0.548)',
											}}
										></div>
									</div>
									<div className='col-lg-6'>
										<div className='p-5'>
											<div className='text-center'>
												<h4 className='text-dark mb-4'>Welcome Back!</h4>
											</div>
											<form className='user' onSubmit={this.onSubmit}>
												<div className='form-group'>
													<input
														className='form-control form-control-user'
														type='email'
														id='exampleInputEmail'
														placeholder='Email'
														aria-describedby='emailHelp'
														name='email'
														value={this.state.email}
														onChange={this.onChangeEmail}
													/>
												</div>
												<div className='form-group'>
													<input
														className='form-control form-control-user'
														type='password'
														id='exampleInputPassword'
														placeholder='Password'
														name='password'
														value={this.state.password}
														onChange={this.onChangePassword}
													/>
												</div>

												<button
													className='btn btn-primary btn-block text-white btn-user'
													type='submit'
												>
													Login
												</button>
											</form>

											<div className='text-center'>
												<Link className='small' to='registration'>
													Create an Account!
												</Link>
											</div>
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
