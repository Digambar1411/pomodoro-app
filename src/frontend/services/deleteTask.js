import axios from "axios";

export const DeleteTaskService = async(encodedToken,habitId)=>{
    try{
        const response = await axios.delete(`/api/habits/${habitId}`,
            {
                headers:{
                    authorization:encodedToken
                },
            },
        )
        return response
    }
    catch(error){
        console.log(error)
    }
}