import React from "react";
import "./Basket.scss";
import { Link } from "react-router-dom";
import ShoeImg from "../assets/products/004071584.jfif";
import { Trash } from "react-feather";

function Basket() {
	return (
		<main className="Basket">
			<div className="container">
				<h4 className="Basket__title">Basket</h4>
				<div className="Basket__wrapper">
					<div className="Basket__items-container">
						<div className="Basket__item">
							<div className="Basket__item-img">
								<img src={ShoeImg} alt="" />
							</div>
							<div className="Basket__item-content">
								<div className="Basket__item-header">
									<h4 className="Basket__item-title">
										Timberland Earthkeeper Stormbucks Leather Shes Tan 7
									</h4>
									<button className="Basket__item-remove-btn">
										<Trash color="black" size={20} />
									</button>
								</div>
								<p className="Basket__item-availability">
									Currently in stock online
								</p>
								<div className="Basket__item-footer">
									<div className="Basket__item-quantity">
										<p className="Basket__item-quantity-title">Quantity</p>
										<div className="Basket__item-quantity-container">
											<button className="Basket__item-quantity-remove">
												-
											</button>
											<div>3</div>
											<button className="Basket__item-quantity-add">+</button>
										</div>
									</div>
									<p className="Basket__item-price">LKR 12,000.0</p>
								</div>
							</div>
						</div>
					</div>
					<div className="Basket__checkout-card">
						<h4>Summary</h4>
						<p>Your order qualifies for</p>
						<ul>
							<li>Free standard Sri Lanka Local Delivery</li>
							<li>Free Click & Collect Order before 4pm</li>
						</ul>
						<p>Main delivery options at checkout</p>
						<div className="Basket__checkout-card-total">
							<h3>Total (excluding delivery)</h3>
							<h4>LKR 70000.00</h4>
						</div>
						<button className="Basket__checkout-card-btn">
							Continue to checkout
						</button>
					</div>
				</div>
			</div>
		</main>
	);
}

export default Basket;
