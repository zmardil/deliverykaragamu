import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
import heroImg from "../assets/hero-img.jfif";
import showcaseImg1 from "../assets/showcase/Homepage_LHS_Block1_301020C.jfif";
import showcaseImg2 from "../assets/showcase/Homepage_RHS_Block2_301020.jfif";

function Home() {
	return (
		<main className="Home">
			<section className="hero">
				<figure>
					<source media="(min-width: )" srcset="" sizes="" />
					<img src={heroImg} alt="" />
					<figcaption>
						<h4>20% off</h4>
						<p>Selected Home</p>
						<Link to="/" className="cta">
							Shop all Home Offers
						</Link>
					</figcaption>
				</figure>
			</section>
			<section className="seasonal-offers">
				<div className="seasonal-offers__wrapper container">
					<h4 className="seasonal-offers__title">Seasonal Offers</h4>
					<nav className="seasonal-offers__nav">
						<Link className="seasonal-offers__nav-item" to="/">
							20% off selected Lighting
						</Link>
						<Link className="seasonal-offers__nav-item" to="/">
							20% off selected Toys
						</Link>
						<Link className="seasonal-offers__nav-item" to="/">
							20% off selected Bedding
						</Link>
						<Link className="seasonal-offers__nav-item" to="/">
							20% off selected Nursery
						</Link>
						<Link className="seasonal-offers__nav-item" to="/">
							20% off selected Womenswear
						</Link>
						<Link className="seasonal-offers__nav-item" to="/">
							20% off selected Menswear
						</Link>
					</nav>
				</div>
			</section>
			<section className="showcase">
				<div className="showcase__wrapper">
					<h4 className="showcase__title">For the cosiest time of the year</h4>
					<div className="showcase__item">
						<img src={showcaseImg1} alt="" className="showcase__item-img" />
						<h5 className="showcase__item-title">For Brisk Winter Walks</h5>
						<p className="showcase__item-desc">
							If anything cam make kup for the temperature drop, it's statement
							coats and start accessories
						</p>
						<nav className="showcase__item-link-wrapper">
							<Link to="/" className="showcase__item-link">
								Shop Coats & Jackets
							</Link>
							<Link to="/" className="showcase__item-link">
								Shop Hats, Gloves & Scarves
							</Link>
						</nav>
					</div>
					<div className="showcase__item">
						<img src={showcaseImg2} alt="" className="showcase__item-img" />
						<h5 className="showcase__item-title">For Brisk Winter Walks</h5>
						<p className="showcase__item-desc">
							If anything cam make kup for the temperature drop, it's statement
							coats and start accessories
						</p>
						<nav className="showcase__item-link-wrapper">
							<Link to="/" className="showcase__item-link">
								Shop Coats & Jackets
							</Link>
							<Link to="/" className="showcase__item-link">
								Shop Hats, Gloves & Scarves
							</Link>
						</nav>
					</div>
				</div>
			</section>
		</main>
	);
}

export default Home;
