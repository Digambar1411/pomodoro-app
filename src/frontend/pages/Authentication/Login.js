import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts";
import { LoginService } from "../../services";
import "./auth.css";

export function Login() {
	const navigate = useNavigate();
	const { authDispatch } = useAuth();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const guestLogin = () => {
		setEmail("admin@gmail.com");
		setPassword("123456");
	};

	const LoginHandler = async (e) => {
		e.preventDefault();
		const loginResponse = await LoginService(email, password);
		if (loginResponse.status === 200) {
			localStorage.setItem("auth_token", loginResponse.data.encodedToken);
			localStorage.setItem(
				"auth_user",
				JSON.stringify({
					firstName: loginResponse.data.foundUser.firstName,
					lastName: loginResponse.data.foundUser.lastName,
					email: loginResponse.data.foundUser.email,
				})
			);

			authDispatch({ type: "LOGIN" });
			navigate("/");
		}
	};

	return (
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
					<button className="btn outline">Login</button>
					<button className="btn solid" type="submit" onClick={guestLogin}>
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
	);
}
