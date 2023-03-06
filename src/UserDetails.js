import { useParams } from "react-router-dom"
const UserDetails=()=>{
    const par=useParams()
    const userID=par.userID
    return(
        <div>
            User details {userID}
        </div>
    )
}

export default UserDetails