import axios from "axios";;

export const GetTaskService = async(encodedToken)=>{
    try{
        const response = await axios.get("/api/habits",{
            headers:{
                authorization: encodedToken
            }  
        })

        return response;

    }
    catch(error){
        console.log(error)
    }

}