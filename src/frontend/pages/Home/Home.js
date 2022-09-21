import "./home.css";
import banner from "../../assets/task.svg";

export const Home = () => {
	return (
		//    <div className="main-page">
		<div className="home-page flex-col">
			<img className="banner-image center" src={banner} alt="banner" />
		</div>
		//    </div>
	);
};
