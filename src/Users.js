import { Outlet, useSearchParams } from "react-router-dom";
const Users=()=>{
    const [searchParams,setSearchParams]=useSearchParams()
    const mmm=searchParams.get('filter')==="Active"
    return(
        <div>
            <h1>User 1</h1>
            <h1>User 2</h1>
            <h1>User 3</h1>
            <Outlet />

            <button onClick={()=>setSearchParams({filter:"Active"})}>Active users</button>
            <button onClick={()=>setSearchParams({})}>Reset users</button>
            {
                mmm ? <h1>filter user</h1>:<h1>Reset user</h1>
            }
        </div>
         
     )
}
export default Users;