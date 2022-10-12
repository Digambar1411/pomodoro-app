import "./navbar.css";
import { useTheme, useAuth } from "../../contexts";
import { useNavigate, Link, NavLink} from "react-router-dom";
import logo from "../../assets/logo.png";
import { useState } from "react";

export function Navbar() {
	const { toggleTheme, theme } = useTheme();
	const {authState: { isLoggedIn }} = useAuth();
	const navigate = useNavigate();
	const [mobileNav, setMobileNav]= useState(false);

	const toggleMobileMenus = () => {
		setMobileNav(mobileNav=>!mobileNav)
	};

	return (
		<>
			<div className={mobileNav ? "mobile-aside" : "hidden"}>
				<div className="aside-header">
					<section className="brand-logo-section center">
						<img src={logo} alt="logo" />
						<div className="brand" onClick={() => navigate("/")}>
							Pomodor
						</div>
					</section>
					<span
						className="material-icons-outlined fs-32 close-menu"
						onClick={toggleMobileMenus}
					>
						close
					</span>
				</div>
				<ul>
					<li>
						<Link to="/task" onClick={toggleMobileMenus}>
							Task
						</Link>
					</li>

					<li>
						<Link to="/task" onClick={toggleMobileMenus}>
							Timer
						</Link>
					</li>

					<li>
						<Link to="/user-profile" onClick={toggleMobileMenus}>
							Profile
						</Link>
					</li>

					<li onClick={()=>toggleTheme()}>
						{ theme==="light" ? "Dark" : "Light"}
					</li>
				</ul>
			</div>

			<nav className="mobile-navigation">
				<div className="mobile-nav nav-content">
					<section className="brand-logo-section center">
						<img src={logo} alt="logo" />
						<span className="brand" onClick={() => navigate("/")}>
							Pomodor
						</span>
					</section>

					<section className="right-section center">
						<span
							className="material-icons-outlined fs-32 ml-8 open-menu"
							onClick={toggleMobileMenus}
						>
							menu
						</span>
					</section>
				</div>
			</nav>

			<nav className="default-navigation">
				<div className="nav nav-content">
					<section className="brand-logo-section center">
						<img src={logo} alt="logo" />
						<span className="brand" onClick={() => navigate("/")}>
							Pomodor
						</span>
					</section>

					<section className="right-section center">
						{theme === "light" ? (
							<span
								className="material-icons fs-36"
								onClick={() => toggleTheme()}
							>
								dark_mode
							</span>
						) : (
							<span
								className="material-icons-outlined fs-30"
								onClick={() => toggleTheme()}
							>
								light_mode
							</span>
						)}

						{isLoggedIn ? (
							<span
								className="material-icons-outlined fs-36 profile"
								onClick={() => navigate("/user-profile")}
							>
								person
							</span>
						) : (
							<>
								<Link to="/login" className="control-btn">
									Login
								</Link>
								<button
									className="control-btn"
									onClick={() => navigate("/signup")}
								>
									sign up
								</button>
							</>
						)}
					</section>
				</div>
			</nav>
		</>
	);
}
