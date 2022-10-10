import axios from "axios";

export const LoginService = async (userEmail, userPassword) => {
	try {
		const response = await axios.post("/api/auth/login", {
			email: userEmail,
			password: userPassword,
		});

		return response;
	} catch (error) {
		console.log(error);
	}
};
