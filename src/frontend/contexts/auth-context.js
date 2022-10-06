import {useContext,createContext,useReducer} from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);


const AuthProvider = ({ children }) => {
	const navigate = useNavigate();
	
	const initialValue = {
		isLoggedIn: localStorage.getItem("auth_token") ? true : false,
		user: JSON.parse(localStorage.getItem("auth_user")),
		token:localStorage.getItem("auth_token")
	};


	const logoutHandler=()=>{
		localStorage.removeItem("auth_user")
		localStorage.removeItem("auth_token")
		authDispatch({type:"LOGOUT"})
		navigate("/login")
	}

	const authReducerFunc = (authState, action) => {
		switch (action.type) {
			case "LOGIN":
				return { ...authState, 
					isLoggedIn: true,
					user:JSON.parse(localStorage.getItem("auth_user"))};

			case "SIGNUP":
				return { ...authState, 
					isLoggedIn: true,
					user:JSON.parse(localStorage.getItem("auth_user"))};

			case "LOGOUT":
				return { ...authState, 
					isLoggedIn: false };
            default :
            return authState;
		}
	};

	const [authState, authDispatch] = useReducer(authReducerFunc,initialValue);

	return (
		<AuthContext.Provider value={{ authState, useAuth , authDispatch, logoutHandler }}>
			{children}
		</AuthContext.Provider>
	);
};

export { useAuth, AuthProvider };
