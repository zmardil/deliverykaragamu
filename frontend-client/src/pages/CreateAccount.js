import React from "react";
import { Link } from "react-router-dom";
import "./CreateAccount.scss";

function CreateAccount() {
	return (
		<main className="CreateAccount">
			<h2 className="CreateAccount__title">Create an Accounct</h2>
			<section className="CreateAccount__form-wrapper">
				<form className="CreateAccount__form">
					<label htmlFor="email">Email</label>
					<input type="email" name="email" id="email" />
					<label htmlFor="password">Password</label>
					<input type="password" name="password" id="password" />
					<button type="submit">Create account</button>
				</form>
				<p>
					By creating an account you agree to the webiste
					<a href=""> terms and conditions </a> and our
					<a hre="#"> privacy notice </a> here.
				</p>
				<hr />
				<div className="signin">
					<h3>Already have an account?</h3>
					<Link to="/signin">Sign In</Link>
				</div>
			</section>
		</main>
	);
}

export default CreateAccount;
