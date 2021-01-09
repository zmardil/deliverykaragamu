import React, { useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.jpg";
import { User, ShoppingCart, Menu, X } from "react-feather";

function Header() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<header className="Header">
			<nav className="Header__site-map">
				<div className="Header__site-map-wrapper container">
					<Link to="/about">About us</Link>
					<Link to="/archive">Our Shops</Link>
					<Link to="/customer-servies">Customer Services</Link>
				</div>
			</nav>
			<div className="Header__site-nav">
				<div className="Header__site-nav-wrapper container">
				<Link to="/">
					<img src={Logo} className="Header__logo" alt="Foo App Logo" />
				</Link>
					<div className="Header__site-nav-search">
						<div className="Header__site-nav-search-wrapper">
							<input
								type="search"
								aria-label="Search product or brand"
								placeholder="Search product or brand"
							/>
						</div>
					</div>
					<nav className="Header__site-nav-profile-nav">
						<Link className="signin" to="/signin">
							Sign In
						</Link>
						<Link to="/">
							<User color="black" />
						</Link>
						<Link to="basket">
							<ShoppingCart color="black" />
						</Link>
						<Link className="menu" onClick={() => setMenuOpen(!menuOpen)}>
							<Menu color="black" />
						</Link>
					</nav>
				</div>
			</div>
			<nav className={"Header__nav" + (menuOpen ? " open" : "")}>
				<div className="container">
					<X
						className="Header__nav-close-btn"
						onClick={() => setMenuOpen(false)}
					/>
					<Link to="/">Christmas</Link>
					<Link to="/">Home & Garden</Link>
					<Link to="/">Furniture & Lights</Link>
					<Link to="/">Electricals</Link>
					<Link to="/">Women</Link>
					<Link to="/">Men</Link>
					<Link to="/">Beauty</Link>
					<Link to="/">Baby & Child</Link>
					<Link to="/">Sports & Leisure</Link>
					<Link to="/">Gifts</Link>
					<Link to="/">Sale</Link>
				</div>
			</nav>
		</header>
	);
}

export default Header;
