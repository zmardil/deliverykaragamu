import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './CreateAccount.scss'

function CreateAccount({ history }) {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const handleSubmit = e => {
		e.preventDefault()
		axios
			.post(
				'http://localhost:8080/users',
				{ email, password },
				{ withCredentials: true }
			)
			.then(obj => history.push('/archive'))
	}

	return (
		<main className='CreateAccount'>
			<h2 className='CreateAccount__title'>Create an Accounct</h2>
			<section className='CreateAccount__form-wrapper'>
				<form className='CreateAccount__form' onSubmit={handleSubmit}>
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
					<button type='submit'>Create account</button>
				</form>
				<p>
					By creating an account you agree to the webiste
					<a href=''> terms and conditions </a> and our
					<a hre='#'> privacy notice </a> here.
				</p>
				<hr />
				<div className='login'>
					<h3>Already have an account?</h3>
					<Link to='/login'>Sign In</Link>
				</div>
			</section>
		</main>
	)
}

export default CreateAccount
