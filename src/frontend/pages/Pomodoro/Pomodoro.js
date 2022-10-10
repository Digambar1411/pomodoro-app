import "./pomodor.css";
import { useTasks } from "../../contexts";
import { useParams } from "react-router-dom";
import { Timer } from "../../components";

export const Pomodoro = () => {
	const { taskState:{tasks}}= useTasks();
	const { id } = useParams();
	const selectedTask = tasks.find(task=>task._id===id);

	return (
		<>
			<div className="pomodor-page">
				<Timer
					task={selectedTask}
				/>
			</div>
		</>
	);
};
