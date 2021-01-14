import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Login.scss'
import axios from 'axios'

export default class Login extends Component {
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

	onSubmit(e) {
		e.preventDefault()
		let loginResponse = ''
		try {
			const loginDetails = {
				email: this.state.email,
				pw: this.state.password,
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
						console.log('admin')
						window.location.replace('/inventory')
					} else {
						//window.location.replace("/items");
					}
				})

			//window.location = "items";
		} catch (err) {
			console.log(err)
		}
	}

	render() {
		return (
			<main className='LogIn'>
				<h2 className='LogIn__title'>Sign In</h2>
				<section className='Login__form-wrapper'>
					<form className='Login__form' onSubmit={this.onSubmit}>
						<label htmlFor='email'>Email</label>
						<input
							type='email'
							name='email'
							id='email'
							onChange={this.onChangeEmail}
						/>
						<label htmlFor='password'>Password</label>
						<input
							type='password'
							name='password'
							id='password'
							onChange={this.onChangePassword}
						/>
						<button type='submit'>Sign In</button>
					</form>
					<Link className='fyp-link' to='/'>
						Forgotten your password?
					</Link>
					<p>
						We treat your personal data with care,please find our
						<a hre='#'>privacy notice</a> here.
					</p>
					<hr />
					<div className='create-account'>
						<h3>Don't have an account?</h3>
						<Link to='/CreateAccount'>Create an account</Link>
					</div>
				</section>
			</main>
		)
	}
}
