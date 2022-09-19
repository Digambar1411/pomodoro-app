import React, { useState } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { useAuth } from "../../contexts";
import axios from "axios";
import "./auth.css";

export function Login() {
	const navigate = useNavigate();
	const { dispatchAuth } = useAuth();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const guestLogin = () => {
		setEmail("admin@gmail.com");
		setPassword("123456");
	};

	const loginService = async (userEmail, userPassword) => {
		try {
			const response = await axios.post("/api/auth/login", {
				userEmail,
				userPassword,
			});
			return response;
		} catch (error) {
			console.log(error);
		}
	};

	const LoginHandler = async (e) => {
		e.preventDefault();
		console.log(email);
		console.log(password);
		const loginResponse = await loginService(email, password);
		// if(response.status===200){
		console.log(loginResponse);
		//     localStorage.setItem("auth_token", response.data.encodedToken);
		//     localStorage.setItem("auth_user", JSON.stringify({
		//         firstName:response.data.foundUser.firstName,
		//         lastName:response.data.foundUser.lastName,
		//         email:response.data.foundUser.email}
		//      ));
		//     dispatchAuth({type:"LOGIN"})
		//     navigate("/");
		// }
	};

	return (
		// <div className="main-auth-page">
		<div className="login-card">
			<div className="heading">
				<NavLink
					className={({ isActive }) =>
						isActive ? "auth-heading active" : "auth-heading"
					}
					to="/login"
				>
					Login
				</NavLink>

				<NavLink
					className={({ isActive }) =>
						isActive ? "auth-heading active" : "auth-heading"
					}
					to="/signup"
				>
					Sign up
				</NavLink>
			</div>

			<form className="flex-col-login form" onSubmit={LoginHandler}>
				<div className="input-div">
					<label className="input-label" htmlFor="email">
						Email address
					</label>
					<input
						className="input"
						id="email"
						type="email"
						placeholder="john@edu.com"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</div>

				<div className="input-div">
					<label className="input-label" htmlFor="password">
						Password
					</label>
					<input
						className="input"
						id="password"
						placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
						type="password"
						onChange={(e) => setPassword(e.target.value)}
						value={password}
						required
					/>
				</div>

				<div className="auth-btns">
					<button className="auth-btn login">Login</button>
					<button className="auth-btn guest-login-btn" onClick={guestLogin}>
						Guest Login
					</button>
				</div>
			</form>

			<div className="auth-controls">
				<span>Dont have account?</span>
				<Link className="auth-control-btn" to="/signup">
					Signup
				</Link>
			</div>
		</div>

		// </div>
	);
}
