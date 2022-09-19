import { useState } from "react";
import "./task.css";
export const Task = () => {
	const [isChecked, setIsChecked] = useState(false);

	return (
		<>
			<div className="task-page">
				<p>You have 2 Tasks to Do , All the Best</p>
				<div className="task-container flex-col">
					<div className="header space-btwn">
						<h2>Add Task</h2>
						<span className="add-btn material-icons-outlined md-30">add</span>
					</div>

					<div className="task-lists ">
						<div className="task space-btwn">
							<label className="checkbox-input-label center">
								<input
									type="checkbox"
									className={`task-input-checkbox ${
										isChecked ? "strike-text" : ""
									}`}
									onChange={() => setIsChecked(false ? true : false)}
								/>
								task 1
							</label>

							<div className="task-controls">
								<span className="material-icons-outlined md-30 task-control-btn">
									edit
								</span>
								<span className="material-icons-outlined md-30 task-control-btn">
									timelapse
								</span>
								<span className="material-icons-outlined md-30 task-control-btn">
									delete
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
