import { useState } from "react";
import "./taskModal.css";
import { AddTaskService, EditTaskService } from "../../services";
import { useAuth } from "../../contexts";

export function TaskModal({ setTaskCard, taskDispatch, task, setTask }) {
	const [modal, setModal] = useState(true);
	const {
		authState: { token },
	} = useAuth();

	const handleChange = (e) => {
		e.preventDefault();
		setTask({ ...task, [e.target.name]: e.target.value });
	};

	const addTask = async () => {
		try {
			const response = await AddTaskService(token, task);
			taskDispatch({ type: "UPDATE_TASK", payload: response.data.habits });
		} catch (error) {
			console.log(error);
		}
		setTaskCard(false);
	};

	const editTask = async () => {
		try {
			const response = await EditTaskService(token, task);
			taskDispatch({ type: "UPDATE_TASK", payload: response.data.habits });
		} catch (error) {
			console.error(error);
		}
		setTaskCard(false);
	};

	return (
		<>
			{modal && (
				<form
					className="taskcard"
					onSubmit={(e) => {
						e.preventDefault();

						task._id ? editTask() : addTask();
					}}
				>
					<div className="input-div">
						<input
							className="input"
							id="name"
							name="name"
							type="text"
							placeholder="title here*"
							required
							value={task.name || ""}
							onChange={handleChange}
						/>
					</div>

					<div className="input-div">
						<input
							className="input description"
							type="text"
							name="label"
							id="label"
							placeholder="Add description"
							required
							value={task.label || ""}
							onChange={handleChange}
						/>
					</div>

					<div className="input-div">
						<input
							className="input"
							id="time"
							name="time"
							type="number"
							placeholder="time in minutes*"
							required
							value={task.time || ""}
							onChange={handleChange}
						/>
					</div>

					<div className="flex-row">
						<button className="outline btn-w50" onClick={() => setModal(false)}>
							Cancel
						</button>
						<button className="solid btn-w50" type="submit">
							{task._id ? "Save" : "Add"}
						</button>
					</div>
				</form>
			)}
		</>
	);
}
