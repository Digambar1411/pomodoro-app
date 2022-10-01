import "./navbar.css";
import { useTheme, useAuth } from "../../contexts";
import { useNavigate, Link } from "react-router-dom";
import logo from "../../assets/logo.png";

export function Navbar() {
	const { toggleTheme, theme } = useTheme();
	const { authState:{isLoggedIn} } = useAuth();
	const navigate = useNavigate();

	return (
		<>
			<nav className="nav flex-sp-btwn ">
				<section className="brand-logo-section pd2-left center">
					<img src={logo} alt="logo" />
					<div className="brand" onClick={() => navigate("/")}>
						Pomodor
					</div>
				</section>

				<section className="flex-sp-btwn gap-1rem pd-right center">
					{theme === "light" ? (
						<span
							className="material-icons md-36"
							onClick={() => toggleTheme()}
						>
							dark_mode
						</span>
					) : (
						<span
							className="material-icons-outlined md-30"
							onClick={() => toggleTheme()}
						>
							light_mode
						</span>
					)}

					{isLoggedIn ? (
						<span
							className="material-icons-outlined md-36 profile"
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
			</nav>
		</>
	);
}
