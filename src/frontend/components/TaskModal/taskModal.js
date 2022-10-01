import { useState } from "react";
import "./taskModal.css";

export function TaskModal() {
	const [modal, setModal] = useState(true);

	return (
		<>
			{ modal && 
				<div className="taskcard">
					
					<div className="input-div">
						<input
							className="input"
							id="name"
							type="text/number"
							placeholder="title here*"
							required
						/>
					</div>

					<div className="input-div">
						<input
							className="input description"
							type="text"
							id="time"
							placeholder="Add description"
							required
						/>
					</div>

					<div className="input-div">
						<input
							className="input"
							id="time"
							type="number"
							placeholder="time in minutes*"
							required
						/>
					</div>

					<div className="flex-row">
						<button className="outline btn-w50" onClick={()=>setModal(false)}>
							Cancel
						</button>
						<button className="solid btn-w50">Add</button>
					</div>
				</div>
			}
		</>
	);
}


