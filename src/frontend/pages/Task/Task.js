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
				taskDispatch({
					type: "UPDATE_TASK",
					payload: response.data.habits,
				});
			} catch (error) {
				console.log(error);
			}
		};
		getAllTask();
	}, [taskDispatch]); // eslint-disable-line react-hooks/exhaustive-deps


	return (
		<>
			<div className="task-page">
				<div className="main-container">
					<p className="task-header-default">
						{tasks && tasks.length
							? `You have ${tasks.length} ${tasks.length>1? "tasks": "task"}  to Do , All the Best`
							: " You do not have any task, start adding task"}
					</p>

					<div className="task-container flex-col">
						<div className="header space-btwn">
							<h2>To-Do-List</h2>
							<h2
								className="add-btn material-icons-outlined md-30"
								onClick={toggleTaskCard}
							>
								add
							</h2>
						</div>

						{taskCard ? (
							<TaskModal
								setTaskCard={setTaskCard}
								taskDispatch={taskDispatch}
								task={task}
								setTask={setTask}
							/>
						) : ( "" )}

						<div className="task-lists ">
							{tasks && tasks.length ? tasks.map((item) => {
									return (
										<div key={item._id} className="task space-btwn">
											<label
												className={`checkbox-input-label center fs-20 ${
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
								}) : <p className="fs-20">start adding your task here</p>
							}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
