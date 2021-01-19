import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Youtube, Instagram } from "react-feather";
import "./Footer.scss";

function Footer() {
	return (
		<footer className="Footer">
			<section className="Footer__banner">
				<div className="container Footer__banner-wrapper">
					<h2 className="Footer__banner-title">Be in the Know</h2>
					<p className="Footer__banner-description">
						Get inspiration, new arrivals and the latest offers to your inbox
					</p>
					<Link className="Footer__banner-cta cta">Sign me up for emails</Link>
				</div>
			</section>
			<section className="Footer__slogan">
				<div className="Footer__slogan-wrapper container">
					<Link>
						My Foo Business Slogan Here <span>Since 2020</span>
					</Link>
				</div>
			</section>
			<section className="Footer__nav">
				<div className="Footer__nav-wrapper container">
					<nav>
						<h4>Help</h4>
						<Link to="/">Customer services</Link>
						<Link to="/about">About us</Link>
						<Link to="/">Never Knowingly Undersold</Link>
						<Link to="/">Our shops</Link>
						<Link to="/">Our services</Link>
						<Link to="/">Product recalls & safety notices</Link>
						<Link to="/">Staying safe during Covid-19</Link>
					</nav>
					<nav>
						<h4>Deliver</h4>
						<Link to="/">Track your order</Link>
						<Link to="/">Delivery & Collection</Link>
						<Link to="/">Returns & Refunds</Link>
						<Link to="/">international order</Link>
					</nav>
					<nav>
						<h4>Deliver</h4>
						<Link to="/">Track your order</Link>
						<Link to="/">Delivery & Collection</Link>
						<Link to="/">Returns & Refunds</Link>
						<Link to="/">international order</Link>
					</nav>
					<nav>
						<h4>Shopping</h4>
						<Link to="/archive">All Products</Link>
						<Link to="/">Buying guides</Link>
						<Link to="/">My John Lewis</Link>
						<Link to="/">The Edit</Link>
						<Link to="/">Gift Cards & vouchers</Link>
						<Link to="/">Terms & conditions</Link>
						<Link to="/">Secure Shopping</Link>
						<Link to="/">Our privacy notice</Link>
						<Link to="/">Our privacy notice</Link>
						<Link to="/">Cookies</Link>
						<Link to="/">Our apps</Link>
						<Link to="/">Black Friday</Link>
					</nav>
					<nav>
						<h4>More from us</h4>
						<Link to="/">John Lweis Broadband</Link>
						<Link to="/">Waitrose & Partners</Link>
						<Link to="/">The Gift List</Link>
						<Link to="/">John Lewis Opticians</Link>
						<Link to="/">John Lewis & Partners Business</Link>
						<Link to="/">John Lewis Home Solutions</Link>
						<Link to="/">JLP jobs</Link>
						<Link to="/">JLP corporate information</Link>
						<Link to="/">Community matters</Link>
						<Link to="/">What's on</Link>
						<Link to="/">Download our 2019/20 Modern Slavery statement</Link>
					</nav>
					<nav>
						<h4>Finance</h4>
						<Link to="/">Partnership card</Link>
						<Link to="/">Home insurance</Link>
						<Link to="/">Pet insurance</Link>
						<Link to="/">Car insurance</Link>
						<Link to="/">Wedding insurance</Link>
						<Link to="/">Foreign currency</Link>
						<Link to="/">Wedding insurance</Link>
						<Link to="/">Foreign currency</Link>
						<Link to="/">Loans</Link>
					</nav>
					<nav>
						<h4>Feedback</h4>
						<Link to="/">Your comments help us improve our website</Link>
						<Link to="/" className="cta">
							Leave feedback
						</Link>
					</nav>
				</div>
			</section>
			<section className="Footer__socials">
				<div className="container Footer__socials-wrapper">
					<nav>
						<Link to="/">
							<Facebook color="#000" />
						</Link>
						<Link to="/">
							<Twitter color="#000" />
						</Link>
						<Link to="/">
							<Youtube color="#000" />
						</Link>
						<Link to="/">
							<Instagram color="#000" />
						</Link>
					</nav>
				</div>
			</section>
			<section className="Footer__copyrights">
				<div className="container Footer__copyrights-wrapper">
					&copy; Foo React App 2020 - 2022
				</div>
			</section>
		</footer>
	);
}

export default Footer;
