import React,{useState,useContext} from "react";
import { UserContext } from "../context/usercontext";
function Login() {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const{setUser}= useContext(UserContext);
const handleSubmit = () => {
e.preventDefault();
setUser({username,password});
}

  return (
    <div>
      <h1>Login Page</h1>
      <input type="text"
      onChange={(e) => setUsername(e.target.value)}
      placeholder="Username"/>
      <input type="text"
      onChange={(e) => setPassword(e.target.value)}
      placeholder="password" />
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
}
export default Login;