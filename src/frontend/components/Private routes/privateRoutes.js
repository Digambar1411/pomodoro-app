import { Navigate,useLocation } from "react-router-dom"
import { useAuth } from "../../contexts/auth-context"

export const PrivateRoutes =({children})=>{
const { authState:{isLoggedIn}}= useAuth();
const { pathname } = useLocation()

    return (
        <>
            { isLoggedIn ? children : <Navigate to="/login" state={{from:pathname}} replace/>}
        </> 
    )
}