import axios from "axios";

export const EditTaskService = async (encodedToken, habit) => {
	try {
		const response = await axios.post(
			`/api/habits/${habit._id}`,
			{
				habit,
			},
			{
				headers: {
					authorization: encodedToken,
				},
			}
		);
		return response;
	} catch (error) {
		console.log(error);
	}
};
