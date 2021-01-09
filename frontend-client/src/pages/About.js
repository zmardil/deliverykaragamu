import React from "react";
import { Link } from "react-router-dom";
import "./About.scss";

import potraitImg1 from "../assets/potraits/p-lucy-knight-c-aw.jfif";
import potraitImg2 from "../assets/potraits/p-tony-beradis-f.jfif";
import potraitImg3 from "../assets/potraits/p-judith-hunter-f.jfif";

function About() {
	return (
		<main className="About">
			<nav className="About__nav">
				<div className="About__nav-wrapper container">
					<Link to="/">Our Commitment</Link>
					<Link to="/">Services</Link>
					<Link to="/">Shops</Link>
					<Link to="/">More from us</Link>
				</div>
			</nav>
			<section className="our-commitment">
				<div className="container">
					<div className=" commitment__wrapper">
						<h4>
							Foo React
							<br />
							<span>& Partners</span>
						</h4>
						<p>When you're part of it, you put your heart into it</p>
						<p>
							At Foo React & Partners, we're more than employees - we're owners,
							That's why we're all called Partners. And that's why we all go
							above and beyond to offer quality products and outstanding service
							to the people who matter most - you, our customers.
						</p>
						<p className="greyed">Because for us, its' personal</p>
					</div>
				</div>
			</section>
			<section className="section">
				<div className="section__banner">
					<div className="section__banner-wrapper container">
						<h1 class="section__banner-title">Our Services</h1>
					</div>
				</div>
				<div className="section__content">
					<div className="section__content-wrapper container">
						<div className="section__content-img">
							<img src={potraitImg1} alt="" />
						</div>
						<div className="section__content-desc">
							<h4>
								"I love it when I'm able to open someone's eyes to something
								new"
							</h4>
							<h5>Lucy Knight</h5>
							<h6>Partner & Personal Stylist</h6>
							<p>
								“Each consultation varies; it could be finding the perfect
								outfit for work or an entirely new wardrobe. I love it when I’m
								able to open someone’s eyes to something new - there’s such a
								wealth of opportunity across our fashion floor.”
							</p>
							<p>
								Our Personal Stylists can help you find looks that work, to
								create a wardrobe that's unique to you.
							</p>
							<Link to="/">Personal Stylist</Link>
							<Link to="/">All our services</Link>
						</div>
					</div>
					<div className="section__content-wrapper container">
						<div className="section__content-img">
							<img src={potraitImg2} alt="" />
						</div>
						<div className="section__content-desc">
							<h4>
								"In my job there's never a dull day, I love meeting customers
								from around the world, working with them to create bespoke
								interior schemes that reflect their taste and personality."
							</h4>
							<h5>Tony Berardis</h5>
							<h6>Partner & Home Design Stylist</h6>
							<p>We’ll help you create a look you’ll love to come home to.</p>
							<Link to="/">Personal Stylist</Link>
							<Link to="/">All our services</Link>
						</div>
					</div>
				</div>
			</section>
			<section className="section">
				<div className="section__banner">
					<div className="section__banner-wrapper container">
						<h1 class="section__banner-title">Our Shops</h1>
					</div>
				</div>
				<div className="section__content">
					<div className="section__content-wrapper container">
						<div className="section__content-img">
							<img src={potraitImg1} alt="" />
						</div>
						<div className="section__content-desc">
							<h4>
								"I love it when I'm able to open someone's eyes to something
								new"
							</h4>
							<h5>Lucy Knight</h5>
							<h6>Partner & Personal Stylist</h6>
							<p>
								“Each consultation varies; it could be finding the perfect
								outfit for work or an entirely new wardrobe. I love it when I’m
								able to open someone’s eyes to something new - there’s such a
								wealth of opportunity across our fashion floor.”
							</p>
							<p>
								Our Personal Stylists can help you find looks that work, to
								create a wardrobe that's unique to you.
							</p>
							<Link to="/">Personal Stylist</Link>
							<Link to="/">All our services</Link>
						</div>
					</div>
					<div className="section__content-wrapper container">
						<div className="section__content-img">
							<img src={potraitImg2} alt="" />
						</div>
						<div className="section__content-desc">
							<h4>
								"In my job there's never a dull day, I love meeting customers
								from around the world, working with them to create bespoke
								interior schemes that reflect their taste and personality."
							</h4>
							<h5>Tony Berardis</h5>
							<h6>Partner & Home Design Stylist</h6>
							<p>We’ll help you create a look you’ll love to come home to.</p>
							<Link to="/">Personal Stylist</Link>
							<Link to="/">All our services</Link>
						</div>
					</div>
				</div>
			</section>
			<section className="more-from-us">
				<div className="more-from-us__wrapper container">
					<h1 className="more-from-us__title">More From Us</h1>
					<div className="section__content-wrapper">
						<div className="section__content-img">
							<img src={potraitImg3} alt="" />
						</div>
						<div className="section__content-desc">
							<h4>
								"I work with our partners supporting their volunteering both
								inside and outside of work. I also look at how we can support
								local community groups, schools and charities. It's just
								wonderful to see the difference our partners and customers can
								make to our community."
							</h4>
							<h5>John Hunter</h5>
							<h6>Partner & Community Liaison Coordinator</h6>
							<p>
								Our charitable giving scheme, called ‘Community Matters’, runs
								throughout our shops. Every three months each shop selects three
								community groups or charities to help. Our customers decide how
								the money is shared between the charities by voting for the
								organisation they’d like to support.
							</p>
							<Link to="/">Find out more</Link>
						</div>
					</div>
					<div className="more-from-us__content container">
						<h4>
							"My role is to explore alternative futures and identify how they
							might emerge from today.
						</h4>
						<p>
							“I have always had the belief that you should find in every
							business, away from routine operational procedures, a team of
							inventors, engineers and designers that have the freedom to think
							in an unbounded way, and have the necessary skills to bring ideas
							to life in a very short space of time.”
						</p>
					</div>
				</div>
			</section>
		</main>
	);
}

export default About;
