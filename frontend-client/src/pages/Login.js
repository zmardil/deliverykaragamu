import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.scss'

import { connect } from 'react-redux'
import { logIn } from '../actions/user'

const mapStateToProps = state => ({
	user: state.user,
})

const mapDispatchToProps = { logIn }

const Login = ({ logIn, user, ...props }) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState(false)

	const onLoginSuccess = x => {
		console.log(x)
		setError(true)
		props.history.push('/archive')
	}

	const onLoginFailure = x => {
		setError(true)
	}

	const handleSubmit = e => {
		e.preventDefault()
		logIn({ email, password }).then(onLoginSuccess, onLoginFailure)
	}

	return (
		<main className='LogIn'>
			<h2 className='LogIn__title'>Sign In</h2>
			<section className='LogIn__form-wrapper'>
				<form className='LogIn__form' onSubmit={handleSubmit}>
					<label htmlFor='email'>Email</label>
					<input
						type='email'
						name='email'
						id='email'
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
					<label htmlFor='password'>Password</label>
					<input
						type='password'
						name='password'
						id='password'
						value={password}
						onChange={e => setPassword(e.target.value)}
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
				{error && <p>login failed</p>}
				<hr />
				<div className='create-account'>
					<h3>Don't have an account?</h3>
					<Link to='/signup'>Create an account</Link>
				</div>
			</section>
		</main>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
