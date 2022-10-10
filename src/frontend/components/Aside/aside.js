import "./aside.css";
import { NavLink } from "react-router-dom";

export function Aside() {
	const sidebarMenuClass = ({ isActive }) =>
		isActive ? "side-bar-menu active-link" : "side-bar-menu";

	return (
		<>
			<aside className="aside ">
				<NavLink to="/task" className={sidebarMenuClass}>
					<span className="material-icons-outlined md-30">add_task</span>
					<div className="menu-text"> Add Task</div>
				</NavLink>

				<NavLink to="/pomodoro" className={sidebarMenuClass}>
					<span className="material-icons-outlined md-30">alarm_on</span>
					<div className="menu-text"> Timer</div>
				</NavLink>

				<NavLink to="/user-profile" className={sidebarMenuClass}>
					<span className="material-icons-outlined md-30">account_circle</span>
					<div className="menu-text">Profile</div>
				</NavLink>
			</aside>
		</>
	);
}
