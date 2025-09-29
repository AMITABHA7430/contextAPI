import React,{useContext} from "react";
import { UserContext } from "../context/usercontext";
function Profile() {
    const {user} = useContext(UserContext);
 if(!user) return <h1>Please Login First</h1>
    
    return (
    <div>
      <h1>Profile Page</h1>
      <h2>Username: {user?.username}</h2>
      <h2>Password: {user?.password}</h2>
    </div>
  );
}
export default Profile;