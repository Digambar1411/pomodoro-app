import React, { useState } from "react";
import { Link , NavLink} from "react-router-dom";
// import { useAuth } from "../../contexts";
// import { SignupService } from "../../services";
import "./auth.css";

export function Signup() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [firstName, setFirstname] = useState("");
	const [lastName, setLastname] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	// const navigate = useNavigate();
	// const { dispatchAuth } = useAuth();

	const SignUpHandler = async (e) => {
		e.preventDefault();
		// try{
		//     const response = await SignupService(firstName, lastName, email, password);
		//     if(response.status===201){
		//         console.log(response.data)
		//         localStorage.setItem("auth_token", response.data.encodedToken);
		//         localStorage.setItem("auth_user", JSON.stringify({
		//             firstName:response.data.createdUser.firstName,
		//             lastName:response.data.createdUser.lastName,
		//             email:response.data.createdUser.email
		//         }))
		//         dispatchAuth({type:"SIGNUP"})
		//         navigate("/")
		//     }
		// }

		// catch(error){
		//     console.log(error);
		// }
	};

	return (
		<div className="login-card flex-col">
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

			<form className="flex-col-login form" onSubmit={SignUpHandler}>
				<div className="input-div">
					<label className="input-label" htmlFor="fname">
						FirstName
					</label>
					<input
						className="input"
						type="text"
						id="fname"
						placeholder="john"
						onChange={(e) => setFirstname(e.target.value)}
						value={firstName}
						required
					/>
				</div>

				<div className="input-div">
					<label className="input-label" htmlFor="lname">
						LastName
					</label>
					<input
						className="input"
						type="text"
						id="lname"
						placeholder="john"
						onChange={(e) => setLastname(e.target.value)}
						value={lastName}
						required
					/>
				</div>

				<div className="input-div">
					<label className="input-label" htmlFor="email">
						Email address
					</label>
					<input
						className="input"
						type="email"
						id="email"
						placeholder="abc@gmail.com"
						onChange={(e) => setEmail(e.target.value)}
						value={email}
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

				<div className="input-div">
					<label className="input-label" htmlFor="re-password">
						Confirm Password
					</label>
					<input
						className="input"
						id="re-password"
						placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
						type="password"
						onChange={(e) => setConfirmPassword(e.target.value)}
						value={confirmPassword}
						required
					/>
				</div>

				<div className="password-section">
					<div className="flex-left">
						<label className="checkbox-input-label center" htmlFor="terms">
							<input
								className="input-checkbox"
								id="terms"
								required
								type="checkbox"
							/>
							Accept terms & condition
						</label>
					</div>
				</div>

				<div>
					<button className="auth-btn signup">Create account</button>
				</div>
			</form>

			<div className="auth-controls">
				<span>Already have account ?</span>
				<Link className="auth-control-btn" to="/login">
					Login
				</Link>
			</div>
		</div>
	);
}
