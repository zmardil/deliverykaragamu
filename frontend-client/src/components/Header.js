import React, { useEffect, useState } from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.jpg'
import { User, ShoppingCart, Menu, X } from 'react-feather'
import { connect } from 'react-redux'
import { fetchCategories, fetchProducts } from '../actions/products'

const mapStateToProps = state => ({
	categories: state.store.categories,
	products: state.store.products,
})

const mapDispatchToProps = { fetchCategories, fetchProducts }

function Header({
	dispatch,
	categories,
	products,
	fetchCategories,
	fetchProducts,
}) {
	const [menuOpen, setMenuOpen] = useState(false)
	const [searchText, setSearchText] = useState('')

	useEffect(() => {
		fetchCategories()
		fetchProducts()
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
								value={searchText}
								onChange={e => {
									setSearchText(e.target.value)
								}}
							/>
							{searchText.trim() && (
								<div className='Header__site-nav-search-list'>
									{products
										.filter(product => product.Name.search(searchText) !== -1)
										.map(product => (
											<Link to={`/product/${product.slug}`}>
												{product.Name}
											</Link>
										))}
								</div>
							)}
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
					{categories.map((category, id) => (
						<Link to='/archive' key={id}>
							{category}
						</Link>
					))}
				</div>
			</nav>
		</header>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
