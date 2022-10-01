import { useAuth } from "../../contexts";
import "./profile.css";

export const Profile =()=>{

    const { authState:{user},logoutHandler} = useAuth();

    return(
        <>
            <div className="profile-page">
                <div className="profile-div">
                    <div className="user-card-heading">User Details</div>
                    <p><strong>FirstName</strong>:{user.firstName}</p>
                    <p><strong>LastName</strong>:{user.lastName}</p>
                    <p><strong>Email</strong>:{user.email}</p>
                    <button className="solid btn-w50 mt-3" onClick={logoutHandler}>Logout</button>
                </div>
            </div>
        </>
    )
}