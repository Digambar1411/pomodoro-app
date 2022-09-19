import {useContext,createContext,useState,useEffect,useReducer,} from "react";
import axios from "axios";

const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
	const loginService = async (email, password) => {
		try {
			const response = await axios.get("/api/login", {
				email,
				password,
			});
			return response;
		} catch (error) {
			console.log(error);
		}
	};

	const loginHandler = async () => {
		const response = await loginService(
			"adarshbalika@gmail.com",
			"adarshBalika123"
		);
		console.log(response);
	};

	const initialValue = {
		authState: localStorage.getItem("token") ? true : false,
		user: localStorage.getItem("user") || [],
	};

	const authReducerFunc = (state, action) => {
		switch (action.type) {
			case "LOGIN":
				return { state };
			case "LOGOUT":
				return { ...state, authState: false };
		}
	};

	const [authState, authDispatch] = useReducer(initialValue, authReducerFunc);

	return (
		<AuthContext.Provider value={{ authState, useAuth, loginHandler }}>
			{children}
		</AuthContext.Provider>
	);
};

export { useAuth, AuthProvider };
