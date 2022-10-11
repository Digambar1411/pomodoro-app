import "./footer.css";
import github from "../../assets/github.png";
import twitter from "../../assets/twitter.png";
import linkedin from "../../assets/linkedin.png";

export function Myfooter() {
	return (
		<>
			<div className="video-lib-footer">
				<p className="footer-heading">Made with love by Digambar</p>
				<section className="social-handles">
					<a
						href="https://twitter.com/deshawald14"
						target="_blank"
						rel="noreferrer"
					>
						<img src={twitter} alt="twitter" />
					</a>
					<a
						href="https://www.linkedin.com/in/digambar-deshawal-9b279b147/"
						target="_blank"
						rel="noreferrer"
					>
						<img src={linkedin} alt="linkedin" />
					</a>
					<a
						href="https://github.com/Digambar1411"
						target="_blank"
						rel="noreferrer"
					>
						<img src={github} alt="github" />{" "}
					</a>
				</section>
			</div>
		</>
	);
}
