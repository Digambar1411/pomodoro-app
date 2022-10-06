import axios from "axios";

export const AddTaskService = async(encodedToken,task)=>{
    try{
        const response = await axios.post("/api/habits",
            {
                habit:{...task, isDone:false}
            },
            {
                headers:{
                    authorization:encodedToken
                },
            }
        )
        return response
    }

    catch(error){
        console.error(error)
    }
}

