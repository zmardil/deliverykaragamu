import React, { Component } from 'react'
import axios from 'axios'
export default class ProfileUpdate extends Component {
	constructor(props) {
		super(props)

		//this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			firstName: '',
			lastName: '',
			email: '',
			mobileNumber: '',
			address: '',
			password: '',
			type: '',
			id: '',
		}
	}
	componentDidMount() {
		let userId = localStorage.getItem('userId')
		const config = {
			headers: {
				'x-auth-token': localStorage.getItem('x-auth-token'),
			},
		}

		axios
			.get('http://localhost:8080/users/' + userId, config)
			.then(({ data }) => {
				this.setState({
					firstName: data.firstName,
					lastName: data.lastName,
					email: data.email,
					mobileNumber: data.mobileNumber,
					address: data.address,
					password: data.password,
					id: data._id,
					type: data.type,
				})
				console.log(this.state)
			})
			.catch(error => {
				console.log(error)
			})
	}

	submit(e) {
		try {
			let formData = {
				firstName: this.state.firstName,
				lastName: this.state.lastName,
				email: this.state.email,
				mobileNumber: this.state.mobileNumber,
				address: this.state.address,
				password: this.state.password,
				type: this.state.type,
			}

			const config = {
				headers: {
					'Content-Type': 'application/json',
				},
			}

			axios
				.put('http://localhost:8080/users/' + this.state.id, formData, config)
				.then(res => {
					alert('successed')
					window.location.reload()
				})
		} catch (err) {
			console.log(err)
		}
	}
	onChange = e => {
		this.setState({ [e.target.id]: e.target.value })
	}

	render() {
		return (
			<div class='container-fluid'>
				<h3 class='text-dark mb-4'>Profile</h3>
				<div class='row mb-3'>
					<div class='col-lg-8'>
						<div class='row'>
							<div class='col'>
								<div class='card shadow mb-3'>
									<div class='card-header py-3'>
										<p class='text-primary m-0 font-weight-bold'>
											User Settings
										</p>
									</div>
									<div class='card-body'>
										<form onSubmit={this.onSubmit} class='profileUpdate1'>
											<div class='form-row'>
												<div class='col'>
													<div class='form-group'>
														<label for='first_name'>
															<strong>First Name</strong>
														</label>
														<input
															onChange={this.onChange}
															class='form-control'
															type='text'
															placeholder='First name'
															name='first_name'
															value={this.state.firstName}
															id='firstName'
														/>
													</div>
												</div>
												<div class='col'>
													<div class='form-group'>
														<label for='last_name'>
															<strong>Last Name</strong>
														</label>
														<input
															onChange={this.onChange}
															class='form-control'
															type='text'
															placeholder='Last name'
															name='last_name'
															value={this.state.lastName}
															id='lastName'
														/>
													</div>
												</div>
											</div>
											<div class='form-row'>
												<div class='col'>
													<div class='form-group'>
														<label for='email'>
															<strong>Email Address</strong>
														</label>
														<input
															onChange={this.onChange}
															class='form-control'
															type='email'
															placeholder='user@example.com'
															name='email'
															value={this.state.email}
															id='email'
														/>
													</div>
												</div>
												<div class='col'>
													<div class='form-group'>
														<label for='username'>
															<strong>Password</strong>
														</label>
														<input
															onChange={this.onChange}
															class='form-control'
															type='text'
															placeholder='Password'
															name='username'
															value={this.state.password}
															id='password'
														/>
													</div>
												</div>
											</div>
											<div class='form-group'>
												<label for='address'>
													<strong>Address</strong>
												</label>
												<input
													onChange={this.onChange}
													class='form-control'
													type='text'
													placeholder='Address'
													name='address'
													value={this.state.address}
													id='address'
												/>
											</div>
											<div class='form-row'>
												<div class='col'>
													<div class='form-group'>
														<label for='mobileNo'>
															<strong>Mobile Number</strong>
														</label>
														<input
															onChange={this.onChange}
															class='form-control'
															type='text'
															placeholder='Mobile Number'
															name='mobileNo'
															value={this.state.mobileNumber}
															id='mobileNumber'
														/>
													</div>
												</div>
											</div>
											<div class='form-group'>
												<button
													class='btn btn-primary btn-sm'
													type='button'
													onClick={e => this.submit(e.target.value)}
												>
													Save Settings
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
		)
	}
}
