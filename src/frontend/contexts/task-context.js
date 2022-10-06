import { useReducer, useContext, createContext } from "react";

const TaskContext = createContext(null);

const useTasks = () => useContext(TaskContext);

const TaskProvider = ({ children }) => {
	const taskReducerFunc = (taskState, action) => {
		switch (action.type) {
			case "UPDATE_TASK":
                return { ...taskState, tasks: action.payload };
			default:
				return { taskState };
		}
	};

	const [taskState, taskDispatch] = useReducer(taskReducerFunc, {tasks: []});

	return (
		<TaskContext.Provider value={{ taskState, taskDispatch }}>
			{children}
		</TaskContext.Provider>
	);
};

export { TaskProvider, useTasks };
