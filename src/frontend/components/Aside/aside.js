import "./aside.css";
import { NavLink } from "react-router-dom";

export function Aside() {
	const sidebarMenuClass = ({ isActive }) =>
		isActive ? "side-bar-menu active-link" : "side-bar-menu";

	return (
		<>
			<div className="aside">
				<div className="lists">
					<NavLink to="/task" className={sidebarMenuClass}>
						<span className="material-icons-outlined fs-30">add_task</span>
						<span className="menu-text"> Add Task</span>
					</NavLink>

					<NavLink to="/pomodoro" className={sidebarMenuClass}>
						<span className="material-icons-outlined fs-30">alarm_on</span>
						<span className="menu-text"> Timer</span>
					</NavLink>

					<NavLink to="/user-profile" className={sidebarMenuClass}>
						<span className="material-icons-outlined fs-30">account_circle</span>
						<span className="menu-text">Profile</span>
					</NavLink>
				</div>
			</div>
		</>
	);
}
