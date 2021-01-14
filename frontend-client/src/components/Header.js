import React, { useEffect, useState } from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.jpg'
import { User, ShoppingCart, Menu, X } from 'react-feather'
import { connect } from 'react-redux'
import { fetchCategories } from '../actions/products'

const mapStateToProps = state => ({
	categories: state.products.categories,
})

const mapDispatchToProps = { fetchCategories }

function Header({ dispatch, categories, fetchCategories }) {
	const [menuOpen, setMenuOpen] = useState(false)

	useEffect(() => {
		fetchCategories()
	}, [])

	return (
		<header className='Header'>
			<nav className='Header__site-map'>
				<div className='Header__site-map-wrapper container'>
					<Link to='/about'>About us</Link>
					<Link to='/archive'>Our Shops</Link>
					<Link to='/customer-services'>Customer Services</Link>
				</div>
			</nav>
			<div className='Header__site-nav'>
				<div className='Header__site-nav-wrapper container'>
					<Link to='/'>
						<img src={Logo} className='Header__logo' alt='Foo App Logo' />
					</Link>
					<div className='Header__site-nav-search'>
						<div className='Header__site-nav-search-wrapper'>
							<input
								type='search'
								aria-label='Search product or brand'
								placeholder='Search product or brand'
							/>
						</div>
					</div>
					<nav className='Header__site-nav-profile-nav'>
						<Link className='login' to='/login'>
							Sign In
						</Link>
						<Link to='/'>
							<User color='black' />
						</Link>
						<Link to='/basket'>
							<ShoppingCart color='black' />
						</Link>
						<Link className='menu' onClick={() => setMenuOpen(!menuOpen)}>
							<Menu color='black' />
						</Link>
					</nav>
				</div>
			</div>
			<nav className={'Header__nav' + (menuOpen ? ' open' : '')}>
				<div className='container'>
					<X
						className='Header__nav-close-btn'
						onClick={() => setMenuOpen(false)}
					/>
					{categories.map(category => (
						<Link to='/archive'>{category}</Link>
					))}
				</div>
			</nav>
		</header>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
