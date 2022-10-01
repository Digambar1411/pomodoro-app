import axios from "axios";

export const SignupService = async (userFirstName, userLastName, userEmail, userPassword) => {
    try {
        const response = await axios.post("/api/auth/signup", {
            email:userEmail,
            password:userPassword,
            firstName:userFirstName,
            lastName:userLastName
        });

        return response;
    } 
    
    catch (error) {
        console.log(error);
    }
};