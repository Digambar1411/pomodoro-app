import { useEffect, useState } from "react";
import "./task.css";
import { TaskModal } from "../../components/index";
import { useAuth, useTasks } from "../../contexts";
import {  DeleteTaskService, GetTaskService} from "../../services";
import { useNavigate } from "react-router";

export const Task = () => {
	const [isChecked, setIsChecked] = useState(false);
	const [taskCard, setTaskCard] = useState(false);
	const {taskState: { tasks }, taskDispatch} = useTasks();
	const {authState: { token }} = useAuth();
	const navigate = useNavigate();
	const [task, setTask] = useState({
		name: "",
		label: "",
		time: "",
	});

	const toggleTaskCard = () => {
		setTaskCard(() => !taskCard);
		setTask("");
	};

	const deleteTask = async (id) => {
		try {
			const response = await DeleteTaskService(token, id);
			console.log(response);
			taskDispatch({
				type: "UPDATE_TASK",
				payload: response.data.habits
			});
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		const getAllTask = async () => {
			try {
				const response = await GetTaskService(token);
				console.log(response);
				taskDispatch({
					type: "UPDATE_TASK",
					payload: response.data.habits,
				});
			} catch (error) {
				console.log(error);
			}
		};
		getAllTask();
	}, []);

	return (
		<>
			<div className="task-page">
				<p>
					{tasks
						? `You have ${tasks.length} Tasks to Do , All the Best`
						: " you have 0 task to do start adding Tasks"}
				</p>

				<div className="task-container flex-col">
					<div className="header space-btwn">
						<h2>Add Task</h2>
						<span
							className="add-btn material-icons-outlined md-30"
							onClick={toggleTaskCard}
						>
							add
						</span>
					</div>

					{taskCard ? (
						<TaskModal
							setTaskCard={setTaskCard}
							taskDispatch={taskDispatch}
							task={task}
							setTask={setTask}
						/>
					) : (
						""
					)}

					<div className="task-lists ">
						{tasks &&
							tasks.map((item) => {
								return (
									<div key={item._id} className="task space-btwn">
										<label
											className={`checkbox-input-label center ${
												isChecked ? "strike-text" : ""
											}`}
										>
											<input
												type="checkbox"
												className="task-input-checkbox"
												onChange={() => setIsChecked(!isChecked)}
											/>
											{item.name}
										</label>

										<div className="task-controls">
											<span
												className="material-icons-outlined md-30 task-control-btn"
												onClick={(e) => {
													e.preventDefault();
													setTask(item);
													setTaskCard(true);
												}}
											>
												edit
											</span>
											<span className="material-icons-outlined md-30 task-control-btn" 
												onClick={()=>{
													setTask(item);
													navigate(`/pomodoro/${item._id}`)
												}}
											>
												timelapse
											</span>
											<span
												className="material-icons-outlined md-30 task-control-btn"
												onClick={() => deleteTask(item._id)}
											>
												delete
											</span>
										</div>
									</div>
								);
							})}
					</div>
				</div>
			</div>
		</>
	);
};
